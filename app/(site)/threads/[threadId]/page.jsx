import { getMainThreadById } from "@/lib/prisma/mainThreads"

// async function getMainThreadByIds(threadId){
//   const { thread } = await getMainThreadById(threadId)
//   if(!thread){
//     throw new Error('failed to fetch data')
//   }
//   return thread
// }

const Page = async ({ params }) => {  
  const { mainThread } = await getMainThreadById(params.threadId)
  
  return (
    <>
      {mainThread.pilot}    
    </>
  )
}

export default Page