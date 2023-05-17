import {
  getMainThreadById,
  getMainThreads,
  createMainThread,
  getRandomMainThreads,
  getSearchMainThreads
} from "@/lib/prisma/mainThreads";



const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const searchParam = req.query.search;
      const genreParam = req.query.genre;
      const tagParam = req.query.tag;
      
      const getMainThread = searchParam || genreParam || tagParam
        ? getSearchMainThreads(searchParam, genreParam, tagParam)
        : getRandomMainThreads();

      const { randomMainThreads, error } = await getMainThread;

      if (error) throw new Error(error);      
      return res.status(200).json({ randomMainThreads });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const data = req.body;
      const { thread, error } = await createMainThread(data);
      if (error) throw new Error(error);
      return res.status(200).json({ thread });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  
  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
