import prisma from ".";

export async function getThreads() {
  try {
    const threads = await prisma.thread.findMany();
    return { threads };
  } catch (error) {
    return { error };
  }
}

export async function createThread(thread) {
  try {
    const threadFromDB = await prisma.thread.create({ data: thread });
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
export async function getThreadById(id) {
  try {
    const thread = await prisma.thread.findUnique({
      where: { id },
    });
    return { thread };
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
    const mainThread = await prisma.thread.findUnique({
      where: {
        id: mainThreadId,
      },
    });

    // Get text from main branch
    const mainThreadText = mainThread.body;
    // console.log(mainThreadText)

    const branchThread = await prisma.thread.findUnique({
      where: {
        id: branchThreadId,
      },
    });
    // Get text from chosen branch
    const branchThreadText = branchThread.body;
    // console.log(branchThreadText)

    // Merge two branch
    const mergedThreadText = mainThreadText + " " + branchThreadText;
    // console.log(mergedThreadText)
    // After merge, the mainThread should be updated.
    const updateMainThread = await prisma.thread.update({
      where: { id: mainThreadId },
      data: {
        body: mergedThreadText,
        phase: {
          increment: 1,
        },
      },
    });
    return { mainThreadId };
  } catch (error) {
    return { error };
  }
}

export async function likeThread({ threadId }) {
  try {
    const thread = await prisma.thread.update({
      where: { id: threadId },
      data: {
        likes: {
          increment: 1,
        },
      },
    });
    return { threadId };
  } catch (error) {
    return { error };
  }
}

export async function unLikeThread({ threadId }) {
  try {
    const thread = await prisma.thread.update({
      where: { id: threadId },
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
