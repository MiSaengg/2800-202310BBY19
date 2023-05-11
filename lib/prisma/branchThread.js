import prisma from ".";

export async function getBranchThread() {
  try {
    const threads = await prisma.branchThread.findMany();
    return { threads };
  } catch (error) {
    return { error };
  }
}

export async function createBranchThread(thread, mainThreadId) {
  try {
    const mainThread = await prisma.mainThread.findUnique({
      where: {
        id: mainThreadId,
      },
    });

    const threadFromDB = await prisma.branchThread.create({ data: thread });

    const phaseStage = mainThread.phaseStage || {}; // Use the existing phaseStage object or an empty object if it's not defined
    phaseStage[threadFromDB.id] = threadFromDB; // Add the new branch thread to the object

    const updatedPhaseStage = await prisma.mainThread.update({
      where: {
        id: mainThreadId,
      },
      data: {
        phaseStage: phaseStage, // Update the phaseStage object with the new branch thread
      },
    });

    return { thread: threadFromDB, phaseStage: updatedPhaseStage };
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
