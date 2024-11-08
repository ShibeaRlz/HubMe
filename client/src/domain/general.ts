import { atom } from "jotai/index";
import { Atom } from "lucide-react";
import { z } from "zod";

export const accountTypeSchema = z.enum(["user", "community"]);

export type AccountType = z.infer<typeof accountTypeSchema>;

export const accountTypeAtom = atom<AccountType | null>(null);
