import { createThread, getThreads } from "@/lib/prisma/threads";

/**
 * createThread
 *
 * @description Create thread.
 * @param {string} data
 * @returns {Promise<{thread: any}>}
 *
 * getThreads
 *
 * @description Get threads.
 * @returns {Promise<{threads: any}>}
 */
const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { threads, error } = await getThreads();
      if (error) throw new Error(error);
      return res.status(200).json({ threads });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const data = req.body;
      const { thread, error } = await createThread(data);
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
