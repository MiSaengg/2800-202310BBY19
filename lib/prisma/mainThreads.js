import prisma from ".";

/**
 * getMainThreads
 *
 * @returns {Promise<{threads: any}>}
 */
export async function getMainThreads() {
  try {
    const threads = await prisma.mainThread.findMany({
      include: {
        branchThread: true,
      },
    });
    return { threads };
  } catch (error) {
    return { error };
  } finally {
  }
}

/**
 * createMainThread
 *
 * @param {Object} thread
 * @returns {Promise<{thread: threadFromDB}>}
 */
export async function createMainThread(thread) {
  try {
    const threadFromDB = await prisma.mainThread.create({ data: thread });
    return { thread: threadFromDB };
  } catch (error) {
    return { error };
  }
}

/**
 * getMainThreadById
 *
 * @param {ObjectId} id
 * @returns {Promise<{mainThread>}>}
 */
export async function getMainThreadById(id) {
  try {
    const mainThread = await prisma.mainThread.findUnique({
      where: { id },
    });

    return { mainThread };
  } catch (error) {
    return { error };
  }
}

/**
 * getMainThreadsById
 *
 * @param {ObjectId} id
 * @returns {Promise<{mainThreads}>}
 */
export async function getMainThreadsById(userId) {
  try {
    const mainThreads = await prisma.mainThread.findMany({
      where: { userId },
    });

    return { mainThreads };
  } catch (error) {
    return { error };
  }
}

/**
 * mergeTwoThreadsByIds
 * TODO : evaluate this function. -> "delete the other branchThreads."
 * TODO : Should check the owner. -> "Another function."
 *
 * UserStories : If thread owner choose the thread then this function
 * will be executed.
 *
 * Merge Two Branches by their Id.
 * Need to Put user data as well.
 *
 * @param {ObjectId} mainThreadId
 * @param {ObjectId} branchThreadId
 * @returns {Promise<{updateMainThread}>}
 */
export async function mergeTwoThreadsByIds(
  { mainThreadId },
  { branchThreadId }
) {
  try {
    const mainThread = await prisma.mainThread.findUnique({
      where: {
        id: mainThreadId,
      },
      include: {
        branchThread: true,
      },
    });

    const branchThread = await prisma.branchThread.findUnique({
      where: {
        id: branchThreadId,
      },
    });

    const contentObjectArray = mainThread.content || {};
    contentObjectArray[branchThread.id] = branchThread;

    const mainThreadText = mainThread.contentBody;
    const branchThreadText = branchThread.body;

    if (mainThread.phase === 5) {
      const updateMainThread = await prisma.mainThread.update({
        where: { id: mainThreadId },
        data: {
          phase: {
            increment: 1,
          },
          tag: "Complete",
          content: contentObjectArray,
          contentBody: mainThreadText + " " + branchThreadText,
          phaseStage: {},
          branchThread: {
            connect: {
              id: branchThreadId,
            },
          },
        },
        include: {
          branchThread: true,
        },
      });
      return { updateMainThread };
    } else {
      const updateMainThread = await prisma.mainThread.update({
        where: { id: mainThreadId },
        data: {
          phase: {
            increment: 1,
          },
          content: contentObjectArray,
          contentBody: mainThreadText + " " + branchThreadText,
          phaseStage: {},
          branchThread: {
            connect: {
              id: branchThreadId,
            },
          },
        },
        include: {
          branchThread: true,
        },
      });

      return { updateMainThread };
    }
  } catch (error) {
    return { error };
  }
}

/**
 * likeThread
 *
 * @param {ObjectId} threadId
 * @param {ObjectId} loginUserId
 * @returns {Promise<{mainThread}>}
 */
export async function likeThread({ threadId, loginUserId }) {
  try {
    const mainThreadUserLikes = await prisma.mainThread.findUnique({
      where: { id: threadId },
    });
    let mainThreadLikedByUser = mainThreadUserLikes.userLikes;

    mainThreadLikedByUser.push(loginUserId);

    const mainThread = await prisma.mainThread.update({
      where: { id: threadId },
      data: {
        likes: {
          increment: 1,
        },
        userLikes: mainThreadLikedByUser,
      },
    });

    const userLikesThreads = await prisma.user.findUnique({
      where: { id: loginUserId },
    });

    const uniqueUserLikesThreads = userLikesThreads.likeThreads;
    uniqueUserLikesThreads[mainThread.id] = mainThread;

    const userId = await prisma.user.update({
      where: { id: loginUserId },
      data: {
        likeThreads: uniqueUserLikesThreads,
      },
    });
    return { mainThread };
  } catch (error) {
    return { error };
  }
}

/**
 * unLikeThread
 *
 * @param {ObjectId} threadId
 * @param {ObjectId} loginUserId
 * @returns {Promise<{mainThread}>}
 */
export async function unLikeThread({ threadId, loginUserId }) {
  try {
    const mainThreadUserLikes = await prisma.mainThread.findUnique({
      where: { id: threadId },
    });
    let mainThreadLikedByUser = mainThreadUserLikes.userLikes;

    mainThreadLikedByUser = mainThreadLikedByUser.filter(
      (element) => element !== loginUserId
    );

    const mainThread = await prisma.mainThread.update({
      where: { id: threadId },
      data: {
        likes: {
          decrement: 1,
        },
        userLikes: mainThreadLikedByUser,
      },
    });

    const userLikesThreads = await prisma.user.findUnique({
      where: { id: loginUserId },
    });

    let uniqueUserLikesThreads = userLikesThreads.likeThreads;
    delete uniqueUserLikesThreads[threadId];

    const userId = await prisma.user.update({
      where: { id: loginUserId },
      data: {
        likeThreads: uniqueUserLikesThreads,
      },
    });
    return { mainThread };
  } catch (error) {
    return { error };
  }
}

/**
 * getRandomMainThreads
 *
 * @returns {Promise<{randomMainThreads}>}
 */
export async function getRandomMainThreads() {
  try {
    const entireIds = await prisma.mainThread.findMany({
      select: {
        id: true,
      },
    });

    const index = Math.floor(Math.random() * entireIds.length);
    const randomMainId = entireIds[index].id;

    const randomMainThreads = await prisma.mainThread.findMany({
      take: 6,
      orderBy: [
        {
          id: "asc",
        },
      ],
      cursor: {
        id: randomMainId,
      },
      include: {
        branchThread: true,
        user: true,
      },
    });

    return { randomMainThreads };
  } catch (error) {
    return { error };
  }
}

/**
 * getSearchMainThreads
 *
 * @param {String} searchParam
 * @param {String} genreParam
 * @param {String} tagParam
 * @returns {Promise<{randomMainThreads}>}
 */
export async function getSearchMainThreads(searchParam, genreParam, tagParam) {
  try {
    const genreFilter = genreParam !== "" ? { genre: { has: genreParam } } : {};
    const tagFilter = tagParam !== "" ? { tag: { equals: tagParam } } : {};

    const randomMainThreads = await prisma.mainThread.findMany({
      where: {
        title: {
          contains: searchParam,
          mode: "insensitive",
        },
        ...genreFilter,
        ...tagFilter,
      },
      include: {
        user: true,
      },
    });

    return { randomMainThreads };
  } catch (error) {
    return { error };
  }
}

/**
 * updateVotedBranchThreadInMainThread
 *
 * @param {ObjectId} mainThreadId
 * @param {ObjectId} branchThreadId
 * @param {ObjectId} userId
 * @returns {Promise<{votedMainThread}>}
 */
export async function updateVotedBranchThreadInMainThread(
  mainThreadId,
  branchThreadId,
  userId
) {
  try {
    const mainThread = await prisma.mainThread.findUnique({
      where: {
        id: mainThreadId,
      },
    });

    // Bring phaseStage in mainThread & update votes + 1.
    const mainThreadPhaseStage = mainThread.phaseStage;
    const branchThreadInMainThread = mainThreadPhaseStage[branchThreadId];
    branchThreadInMainThread["votes"] += 1;

    const votedMainThread = await prisma.mainThread.update({
      where: {
        id: mainThreadId,
      },
      data: {
        phaseStage: mainThreadPhaseStage,
      },
    });

    // After update is complete, update user's votedBranchThread
    const userVotedBranchThread = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    let userVotedBranchThreadArr = userVotedBranchThread.voteBranchThreads;
    userVotedBranchThreadArr.push(branchThreadId);

    const updateUserVotedBranchThread = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        voteBranchThreads: userVotedBranchThreadArr,
      },
    });

    return { votedMainThread };
  } catch (error) {
    return { error };
  }
}

/**
 * updateUnVotedBranchThreadInMainThread
 *
 * @param {ObjectId} mainThreadId
 * @param {ObjectId} branchThreadId
 * @param {ObjectId} userId
 * @returns {Promise<{unvotedMainThread}>}
 */
export async function updateUnVotedBranchThreadInMainThread(
  mainThreadId,
  branchThreadId,
  userId
) {
  try {
    const mainThread = await prisma.mainThread.findUnique({
      where: {
        id: mainThreadId,
      },
    });

    // Bring phaseStage in mainThread & update votes - 1.
    const mainThreadPhaseStage = mainThread.phaseStage;
    const branchThreadInMainThread = mainThreadPhaseStage[branchThreadId];
    branchThreadInMainThread["votes"] -= 1;

    const unvotedMainThread = await prisma.mainThread.update({
      where: {
        id: mainThreadId,
      },
      data: {
        phaseStage: mainThreadPhaseStage,
      },
    });

    // After update is complete, update user's votedBranchThread
    const userUnVotedBranchThread = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    let userUnVotedBranchThreadArr = userUnVotedBranchThread.voteBranchThreads;
    userUnVotedBranchThreadArr = userUnVotedBranchThreadArr.filter(
      (e) => e !== branchThreadId
    );

    const updateUserVotedBranchThread = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        voteBranchThreads: userUnVotedBranchThreadArr,
      },
    });

    return { unvotedMainThread };
  } catch (error) {
    return { error };
  }
}

/**
 * updateMainThread
 *
 * @param {ObjectId} mainThreadId
 * @param {Object} data
 * @returns {Promise<{thread, error}>}
 */
export async function updateMainThread(mainThreadId, data) {
  try {
    const updatedThread = await prisma.mainThread.update({
      where: { id: mainThreadId },
      data: {
        genre: data.genre,
        phase: {
          increment: 1,
        },
      },
    });

    return { thread: updatedThread, error: null };
  } catch (error) {
    console.error(`Error updating main thread: ${error}`);
    return { thread: null, error: error.message };
  }
}
