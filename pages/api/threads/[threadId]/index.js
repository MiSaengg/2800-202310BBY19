import { getMainThreadById } from "@/lib/prisma/mainThreads";
import { updateMainThread } from "@/lib/prisma/mainThreads";

/**
 * getMainThreadById
 *
 * @description Get main thread by id.
 * @param {string} mainThreadId
 * @returns {Promise<{mainThread: any}>}
 *
 * updateMainThread
 *
 * @description Update main thread.
 * @param {string} mainThreadId
 * @param {any} data
 * @returns {Promise<{thread: any}>}
 */
const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const mainThreadId = req.query.threadId;
      const { mainThread, error } = await getMainThreadById(mainThreadId);
      if (error) throw new Error(error);
      return res.status(200).json({ mainThread });
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

  if (req.method === "PATCH") {
    try {
      const mainThreadId = req.query.threadId;
      const data = req.body;
      const { thread, error } = await updateMainThread(mainThreadId, data);
      if (error) throw new Error(error);
      return res.status(200).json({ thread });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST", "PATCH"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
