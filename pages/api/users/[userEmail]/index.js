import { getUserById, updateUserPenName } from "@/lib/prisma/users";

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const userId = req.query.userEmail    
    try {
      const { user, error } = await getUserById(userId)
      if (error) throw new Error(error)
      return res.status(200).json({ user })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  if (req.method === 'POST') {
    try {
      const email = req.body.email
      const penName = req.body.penName

      const { user, error } = await updateUserPenName(email,penName)
      if (error) throw new Error(error)
      return res.status(200).json({ user })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler