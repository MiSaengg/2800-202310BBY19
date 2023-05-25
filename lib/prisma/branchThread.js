import prisma from ".";

/**
 * getBranchThread
 *
 * @returns {Promise<{threads: any}>}
 */
export async function getBranchThread() {
  try {
    const threads = await prisma.branchThread.findMany();
    return { threads };
  } catch (error) {
    return { error };
  }
}

/**
 * createBranchThread
 *
 * @param {*} thread
 * @param {*} mainThreadId
 * @returns {Promise<{threadFromDB: any}>}
 */
export async function createBranchThread(thread, mainThreadId) {
  try {
    const mainThread = await prisma.mainThread.findUnique({
      where: {
        id: mainThreadId,
      },
    });

    const threadFromDB = await prisma.branchThread.create({ data: thread });
    const phaseStage = mainThread.phaseStage || {};
    phaseStage[threadFromDB.id] = threadFromDB;
    const size = Object.keys(phaseStage).length;

    if (size <= 3) {
      const updatedPhaseStage = await prisma.mainThread.update({
        where: {
          id: mainThreadId,
        },
        data: {
          phaseStage: phaseStage,
        },
      });
    } else {
      throw new Error("You can't create more than 3 branches.");
    }
    return { threadFromDB };
  } catch (error) {
    return { error };
  }
}

/**
 * voteBranchThread
 *
 * @param {*} branchthreadId
 * @returns {Promise<{thread: any}>}
 */
export async function voteBranchThread({ branchthreadId }) {
  try {
    const thread = await prisma.branchThread.update({
      where: { id: branchthreadId },
      data: {
        votes: {
          increment: 1,
        },
      },
    });
    return { thread };
  } catch (error) {
    return { error };
  }
}

/**
 * unVoteBranchThread
 *
 * @param {*} branchthreadId
 * @returns {Promise<{thread: any}>}
 */
export async function unVoteBranchThread({ branchthreadId }) {
  try {
    const thread = await prisma.branchThread.update({
      where: { id: branchthreadId },
      data: {
        votes: {
          decrement: 1,
        },
      },
    });
    return { thread };
  } catch (error) {
    return { error };
  }
}

/**
 * deleteBranchThread
 *
 * @param {*} branchthreadId
 * @returns {Promise<{thread: any}>}
 */
export async function deleteBranchThread({ branchthreadId }) {
  try {
    const thread = await prisma.branchThread.delete({
      where: { id: branchthreadId },
    });

    const mainThreads = await prisma.mainThread.findMany();

    for (let mainThread of mainThreads) {
      if (
        mainThread.phaseStage &&
        mainThread.phaseStage.hasOwnProperty(branchthreadId)
      ) {
        const updatedPhaseStage = { ...mainThread.phaseStage };
        delete updatedPhaseStage[branchthreadId];

        await prisma.mainThread.update({
          where: {
            id: mainThread.id,
          },
          data: {
            phaseStage: updatedPhaseStage,
          },
        });
      }
    }

    return { thread };
  } catch (error) {
    console.error("Error deleting thread:", error);
    return { error: error.message };
  }
}
