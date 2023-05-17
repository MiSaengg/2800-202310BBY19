import { updateVotedBranchThreadInMainThread } from "@/lib/prisma/mainThreads";

const handler = async (req, res) => {
  if (req.method === "PATCH") {
    try {      
      const mainThreadId = req.query.mainThreadId;
      const branchThreadId = req.query.branchThreadId;
    
      const { votedMainThread, error } = await updateVotedBranchThreadInMainThread(mainThreadId, branchThreadId);
      
      if (error) throw new Error(error);      
      return res.status(200).json({ votedMainThread });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }  
  
  res.setHeader("Allow", ["PATCH"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
