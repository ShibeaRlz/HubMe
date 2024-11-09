import { atom } from "jotai";
import { z } from "zod";

// export type User = {
//   uuid: string;
//   name: string;
//   email: string;
//   password: string;
//   img: string;
//   self: string;
//   mem1: string;
//   mem2: string;
//   mem3: string;
//   tags: number[];
// };

export const UserSchema = z.object({
  uuid: z.string().min(1),
  name: z.string().min(1),
  email: z.string().min(1),
  password: z.string().optional(),
  img: z.string().optional(),
  self: z.string().optional(),
  mem1: z.string().optional(),
  mem2: z.string().optional(),
  mem3: z.string().optional(),
  // tags: number[];
});

export type User = z.infer<typeof UserSchema>;
export const userAtom = atom<User>();

export const SignupFormSchema = z.object({
  name: z.string().min(1, { message: "入力必須な項目です。" }),
  mem1: z.string().min(1, { message: "入力必須な項目です。" }),
  mem2: z.string(),
  mem3: z.string(),
  img: z.string(),
  email: z.string().min(1, { message: "入力必須な項目です。" }),
  password: z.string().min(1, { message: "入力必須な項目です。" }),
  self: z.string(),
});

export type SignupForm = z.infer<typeof SignupFormSchema>;

export const LoginFormSchema = z.object({
  email: z.string().min(1, { message: "入力必須な項目です。" }),
  password: z.string().min(1, { message: "入力必須な項目です。" }),
});

export type LoginForm = z.infer<typeof LoginFormSchema>;
