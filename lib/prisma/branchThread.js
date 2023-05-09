import prisma from ".";

export async function getBranchThread() {
  try {
    const threads = await prisma.branchThread.findMany();
    return { threads };
  } catch (error) {
    return { error };
  }
}

export async function createBranchThread(thread) {
  try {
    const threadFromDB = await prisma.branchThread.create({ data: thread });
    return { thread: threadFromDB };
  } catch (error) {
    return { error };
  }
}

export async function deleteBranchThread(thread) {
  try {
    const threadFromDB = await prisma.branchThread.delete({ data: thread });
    return { thread: threadFromDB };
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
