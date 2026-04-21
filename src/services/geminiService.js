import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_GEMINI_KEY });

export const summarizeText = async (text, mode = "paragraph") => {
  const prompts = {
    paragraph: `Summarize the following text in a concise paragraph (3-5 sentences). Be clear and informative:\n\n${text}`,
    bullets: `Summarize the following text as 5 key bullet points. Start each point with "•":\n\n${text}`,
    oneline: `Summarize the following text in exactly one sentence:\n\n${text}`,
  };

  const response = await ai.models.generateContent({
    model: import.meta.env.VITE_API_GEMINI_MODEL,
    contents: prompts[mode],
  });

  return response.text;
};
