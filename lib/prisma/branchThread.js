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
