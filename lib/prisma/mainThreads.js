import prisma from ".";

export async function getMainThreads() {
  try {
    const threads = await prisma.mainThread.findMany(
      {
        include: {
          branchThread: true,
        },
      },
    );
    return { threads };
  } catch (error) {
    return { error };
  }
}

export async function createMainThread(thread) {
  try {
    console.log(thread);
    const threadFromDB = await prisma.mainThread.create({ data: thread });

    return { thread: threadFromDB };
  } catch (error) {
    return { error };
  }
}

/**
 * getThreadById
 *
 * @param {ObjectId} id
 * @returns thread
 */
export async function getMainThreadById(id) {
  try {
    const threads = await prisma.mainThread.findUnique({
      where: { id },
      include: {
        branchThread: true,
      },
    });
    return { threads };
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
 * @returns updateMainThread
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

    if (mainThread.phase === 5) {
      throw new Error('Cannot merge threads for a main thread in phase 5.');
    }

    // Get text from main branch
    const mainThreadText = mainThread.content;
    // console.log(mainThreadText)

    const branchThread = await prisma.branchThread.findUnique({
      where: {
        id: branchThreadId,
      },
    });
    // Get text from chosen branch
    const branchThreadText = branchThread.content;
    // console.log(branchThreadText)

    // Merge two branch
    mainThreadText.push(branchThreadText);

    // mainThreadText.toString(); to show entire text as a string.
    // console.log(mergedThreadText)
    // After merge, the mainThread should be updated.
    if (mainThread.phase === 4) {
      const updateMainThread = await prisma.mainThread.update({
        where: { id: mainThreadId },
        data: {
          content: mainThreadText,
          phase: {
            increment: 1,
          },
          tag: "complete",
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
        content: mainThreadText,
        phase: {
          increment: 1,
        },
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

export async function likeThread({ mainThreadId }) {
  try {
    const thread = await prisma.mainThread.update({
      where: { id: mainThreadId },
      data: {
        likes: {
          increment: 1,
        },
      branchThread: mainThreadArray
      },
    });
    return { thread };
  } catch (error) {
    return { error };
  }
}

export async function unLikeThread({ mainThreadId }) {
  try {
    const thread = await prisma.mainThread.update({
      where: { id: mainThreadId },
      data: {
        likes: {
          decrement: 1,
        },
      },
    });
    return { thread };
  } catch (error) {
    return { error };
  }
}
