import { z } from "zod";
import { TagSchema } from "../../tags/types/tag";

export const EventCardSchema = z.object({
  title: z.string(),
  publisher: z.string(),
  publisherIcon: z.string(),
  datetime: z.string(),
  tag_name: TagSchema.array(),
  imageUrl: z.string(),
  liked: z.boolean(),
  handleEventClose: z.function(),
});

export type EventCardType = z.infer<typeof EventCardSchema>;
