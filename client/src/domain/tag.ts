import { z } from "zod";

export const TagSchema = z.object({
  name: z.string().min(1),
});

export type TagType = z.infer<typeof TagSchema>;
