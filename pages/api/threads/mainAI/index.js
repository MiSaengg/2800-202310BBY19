import axios from 'axios';
import { mainThreadAI } from "@/lib/prisma/mainThreads";
require('dotenv').config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { prompt, threadId, title, genre, mainCharacter } = req.body;

  try {

    const gptResponse = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      { prompt, max_tokens: 60 },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      },
    );

    // console.log("gptResponse:", gptResponse.data);

    const updateResponse = await mainThreadAI({ mainThreadId: threadId, title, genre, mainCharacter });

    res.status(200).json({ ai: gptResponse.data.choices[0].text, updateResponse });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
}
