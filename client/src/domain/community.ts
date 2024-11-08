import { User } from "@/domain/user";
import { atom } from "jotai/index";

export type Community = {
  uuid: string;
  name: string;
  email: string;
  password: string;
  img: string;
  self: string;
  mem1: string;
  mem2: string;
  mem3: string;
  tag: number[];
};
export const communityAtom = atom<Community | null>(null);
