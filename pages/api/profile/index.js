import { getMainThreadsById } from "@/lib/prisma/mainThreads";

/**
 * getMainThreadsById
 *
 * @description Get main threads by user id.
 * @param {string} userId
 * @returns {Promise<{mainThreads: any}>}
 */
const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
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
