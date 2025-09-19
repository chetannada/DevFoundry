import axios from "axios";
import { providers } from "./providers";

const API_KEY = import.meta.env.VITE_API_HAGGINGFACE_KEY;

export async function generateImages(params) {
  try {
    const providerConfig = providers.find(p => p.id === params.provider);
    const [width, height] = params.dimensions.split("x").map(Number);

    const responses = await Promise.all(
      Array.from({ length: params.count }, () => {
        const seed = Math.floor(Math.random() * 1000000); // unique seed
        return axios.post(
          `https://api-inference.huggingface.co/models/${providerConfig.endpoint}`,
          {
            inputs: params.prompt,
            parameters: {
              width,
              height,
              seed, // pass the seed
            },
          },
          {
            headers: { Authorization: `Bearer ${API_KEY}`, Accept: "image/png" },
            responseType: "blob",
            withCredentials: false,
          }
        );
      })
    );

    return responses.map(response => URL.createObjectURL(response.data));
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to generate images");
  }
}
