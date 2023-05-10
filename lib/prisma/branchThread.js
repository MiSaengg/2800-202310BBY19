import prisma from ".";

export async function getBranchThread() {
  try {
    const threads = await prisma.branchThread.findMany();
    return { threads };
  } catch (error) {
    return { error };
  }
}

export async function createBranchThread(thread , mainThreadId) {
  try {
    const threadFromDB = await prisma.branchThread.create({ data: thread });
    const phaseStage = await prisma.mainThread.update({
      where: {
        id: mainThreadId,
      },
      data: {
        phaseStage: {
          threadFromDB
        },
      },
    });
    return { thread: threadFromDB, phaseStage: phaseStage };
  } catch (error) {
    return { error };
  }
}

export async function deleteBranchThread({ branchthreadId }) {
  try {
    const thread = await prisma.branchThread.delete({
      where: { id: branchthreadId },
    });
    return {};
  } catch (error) {
    return { error };
  }
}

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
