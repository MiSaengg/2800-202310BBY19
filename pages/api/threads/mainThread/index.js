import { getMainThreadById, getMainThreads, createMainThread } from "@/lib/prisma/mainThreads"

const handler = async (req, res) => {
  if (req.method === "GET"){
    try {
      console.log("alskdjfhasdfasdfwefawefawe")
      const {threads , error} = await getMainThreads()
      if (error) throw new Error(error)
      return res.status(200).json({threads})
    } catch(error){
      return res.status(500).json({error: error.message})
    }
  }
  
  if (req.method === "POST"){
    try {
      const data = req.body
      const {thread, error } = await createMainThread(data)
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

