import { getUserById } from "@/lib/prisma/users";

/**
 * getUserById
 *
 * @description Get user by id.
 * @param {string} userId
 * @returns {Promise<{user: any}>}
 */
const handler = async (req, res) => {
  if (req.method === "GET") {
    const userId = req.query.userId;
    try {
      const { user, error } = await getUserById(userId);
      if (error) throw new Error(error);
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
