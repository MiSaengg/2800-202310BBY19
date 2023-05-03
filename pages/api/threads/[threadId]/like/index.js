import { likeThread } from "@/lib/prisma/threads";

const handler = async (req, res) => {
  
  if (req.method === 'PATCH') {
    try {
      const { threadId } = req.query

      const { thread, error } = await likeThread({ threadId })
      if (error) throw new Error(error)

      return res.status(200).json({ thread })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow',['PATCH'] )
  res.status(425).end(`Method ${req.method} is not allowed.`)

}

export default handler
