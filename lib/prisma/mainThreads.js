import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

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
  }
}

export async function createMainThread(thread) {
  try {
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
    const mainThread = await prisma.mainThread.findUnique({
      where: { id },
    });

    return { mainThread };
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
 * @param {ObjectI  d} mainThreadId
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

export async function likeThread({ mainThreadId }) {
  try {
    const thread = await prisma.mainThread.update({
      where: { id: mainThreadId },
      data: {
        likes: {
          increment: 1,
        },
        branchThread: mainThreadArray,
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

export async function getRandomMainThreads() {
  try {
    
    // Get all mainThread ids
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
          id: Prisma.SortOrder.asc,
        },
      ],
      cursor: {
        id: randomMainId,
      },
      include: {
        branchThread: true,
      },
    });

    return { randomMainThreads };
  } catch (error) {
    return { error };
  }
}

export async function getSearchMainThreads(searchParam) {
  try {
    const randomMainThreads = await prisma.mainThread.findMany({
      where : {
        title: {
          contains : searchParam 
        }
      }
    })

    return { randomMainThreads };
  } catch (error) {
    return { error };
  }
}


