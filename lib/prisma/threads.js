import prisma from "."

export async function getThreads(){
  try{
    const threads = await prisma.thread.findMany()
    return { threads }

  }catch(error){
    return {error}
  }
}

export async function createThread(thread){
  try {
    const threadFromDB = await prisma.thread.create({data:thread})
    return { thread : threadFromDB}
  }catch(error){
    return {error}
  }
}

export async function getThreadById(id){
  try {
    const thread = await prisma.thread.findUnique({
      where:{id},      
    })
    return {thread}
  } catch (error){
    return {error}
  }
}

export async function likeThread({ threadId }) {
  try {
    const thread = await prisma.thread.update({
      where: { id: threadId },
      data: {
        likes: {
          increment: 1
        }
      }
    })
    return { threadId }
  } catch (error) {
    return { error }
  }
}

export async function unLikeThread({ threadId }) {
  try {
    const thread = await prisma.thread.update({
      where: { id: threadId },
      data: {
        likes: {
          decrement: 1
        }
      }
    })
    return { thread }
  } catch (error) {
    return { error }
  }
}