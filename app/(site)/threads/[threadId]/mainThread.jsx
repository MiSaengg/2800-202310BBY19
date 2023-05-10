// import { getMainThreadById } from "@/lib/prisma/mainThreads";


export default function mainThread({threadId ,pilot}) {

  const boxStyle = {border: "grey solid 2px", borderRadius: "10px", padding: "5px"};  

// async function getMainThreadByIds(threadId){
//   const { thread } = await getMainThreadById(threadId)
//   if(!thread){
//     throw new Error('failed to fetch data')
//   }
//   return thread
// }



  return (    
    <div style={boxStyle}>{pilot}</div>
  )
}
