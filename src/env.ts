import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string().url({ message: "Invalid url" }),
});

export const env = envSchema.parse({
  VITE_API_URL: import.meta.env.VITE_API_URL,
});
console.log("API URL:", env.VITE_API_URL);
