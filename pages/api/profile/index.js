import { getMainThreadsById } from "@/lib/prisma/mainThreads";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      console.log("ffffffff");
      const userId = req.query.userId;
      const { mainThreads, error } = await getMainThreadsById(userId);
      if (error) throw new Error(error);
      return res.status(200).json({ mainThreads });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  
  res.setHeader("Allow", ["GET"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
