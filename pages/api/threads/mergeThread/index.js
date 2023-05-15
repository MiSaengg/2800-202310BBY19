import { mergeTwoThreadsByIds } from "@/lib/prisma/mainThreads";

/**
 * handler function that diverse by the POST or GET Method.
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const mainThreadId = req.body.mainThreadId;
      const branchThreadId = req.body.branchThreadId;
      const { updateMainThread, error } = await mergeTwoThreadsByIds(
        { mainThreadId },
        { branchThreadId }
      );

      if (error) throw new Error(error);
      return res.status(200).json({ updateMainThread });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
