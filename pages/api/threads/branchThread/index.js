import {
  getBranchThread,
  createBranchThread,
  voteBranchThread,
  unVoteBranchThread,
  deleteBranchThread,
} from "@/lib/prisma/branchThread";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { threads, error } = await getBranchThread();
      if (error) throw new Error(error);
      return res.status(200).json({ threads });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const data = req.body;
      const { threads, error } = await createBranchThread(data);
      if (error) throw new Error(error);
      return res.status(200).json({ threads });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "PATCH") {
    const { branchthreadId, vote } = req.body;
    try {
      const result = vote
        ? await voteBranchThread({ branchthreadId })
        : await unVoteBranchThread({ branchthreadId });

      if (result.error) {
        throw new Error(result.error.message);
      }

      res.status(200).json(result.thread);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    return;
  }

  if (req.method === "DELETE") {
    const { branchthreadId } = req.query;
    try {
      const { thread, error } = await deleteBranchThread({ branchthreadId });
      if (error) throw new Error(error);
      return res.status(200).json({ thread });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST", "PATCH", "DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
};

export default handler;
