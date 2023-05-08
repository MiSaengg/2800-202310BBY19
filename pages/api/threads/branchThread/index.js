import { getBranchThread, createBranchThread } from "@/lib/prisma/branchThread";

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

  // delete
  // if (req.method === "DELETE"){
  //     try {
  //         const data = req.body
  //         const {threads, error } = await createBranchThread(data)
  //         if (error) throw new Error(error)
  //         return res.status(200).json({threads})
  //     }catch(error){
  //         return res.status(500).json({error : error.message})
  //     }
  // }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
}

export default handler;
