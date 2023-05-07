import { mergeTwoThreadsByIds } from "@/lib/prisma/threads";


/**
 * handler functino that diverse by the POST or GET Method.
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const handler = async (req, res) => {

  if (req.method === "POST"){
    try {
      // Should be send a req include mainThreadId
      const mainThreadId = req.body.mainThreadId      
      console.log(mainThreadId)
      // Should be send a req include branchThreadId
      const branchThreadId = req.body.branchThreadId
      console.log(branchThreadId)
      

      const {thread, error } = await mergeTwoThreadsByIds( {mainThreadId}, {branchThreadId})
      if (error) throw new Error(error)
      return res.status(200).json({thread})
    }catch(error){
      return res.status(500).json({error : error.message})
    }
  }

  res.setHeader('Allow',['GET', 'POST'] )
  res.status(425).end(`Method ${req.method} is not allowed.`)

}

export default handler

// api/threads/mergeThread
