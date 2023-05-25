import { unLikeThread } from "@/lib/prisma/mainThreads";

/**
 * unLikeThread
 * 
 * @description Unlike thread.
 * @param {string} threadId
 * @param {string} loginUserId
 * @returns {Promise<{mainThread: any}>}
 */
const handler = async (req, res) => {
  if (req.method === "PATCH") {
    try {
      const { threadId } = req.query;
      const loginUserId = req.query.userId;

      const { mainThread, error } = await unLikeThread({
        threadId,
        loginUserId,
      });
      if (error) throw new Error(error);

      return res.status(200).json({ mainThread });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["PATCH"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
