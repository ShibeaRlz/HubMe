import { atom } from "jotai/index";
import { Atom } from "lucide-react";
import { z } from "zod";

export const statusSchema = z.enum(["user", "community"]);

export type Status = z.infer<typeof statusSchema>;

export const statusAtom = atom<Status | null>(null);
