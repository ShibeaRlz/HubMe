"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SignupFormSchema, User, userAtom } from "@/domain/user";
import { createUser } from "@/feature/signup/hook/signup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai/index";
import { CircleChevronRight } from "lucide-react";
import react, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import style from "./style.module.scss";

// const SignupFormSchema = z.object({
// 	nickname: z.string().min(1, { message: "入力必須な項目です。" }),
// 	belong_to1: z.string().min(1, { message: "入力必須な項目です。" }),
// 	belong_to2: z.string(),
// 	belong_to3: z.string(),
// 	mail: z.string().min(1, { message: "入力必須な項目です。" }),
// 	password: z.string().min(1, { message: "入力必須な項目です。" }),
// 	introduction: z.string(),
// });

type Props = {
	introduction: string;
};

export const SignUpDialog = (props: Props) => {
	const [currentUser, setCurrentUser] = useAtom<User | null>(userAtom);

	const form = useForm<z.infer<typeof SignupFormSchema>>({
		// resolver: zodResolver(SignupFormSchema),
		defaultValues: {
			nickname: "",
			belong_to1: "",
			belong_to2: "",
			belong_to3: "",
			mail: "",
			password: "",
			introduction: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof SignupFormSchema>) => {
		try {
			console.log("Form data:", data);
			const response = await createUser(data);
			console.log("Response:", response);

			const user: User = {
				uuid: response.uuid,
				name: response.name,
				email: response.email,
				password: response.password,
				img: response.img,
				self: response.self,
				mem1: response.mem1,
				mem2: response.mem2,
				mem3: response.mem3,
				tag: response.tag,
			};
			setCurrentUser(user);
		} catch (error) {
			console.error("Error submitting form:", error);
		}
		// console.log("test");
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Card className={style.card}>
					<CardHeader>
						<CardTitle className={style.mobo}>新規会員登録</CardTitle>
					</CardHeader>

					<CardContent>
						<FormField
							control={form.control}
							name="nickname"
							render={({ field }) => (
								<FormItem className={style.form}>
									<FormLabel className={style.label}>
										<span className={style.span}>*</span>ニックネーム
									</FormLabel>
									<FormControl>
										<Input
											placeholder="やまけん"
											{...field}
											className={style.input}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="belong_to1"
							render={({ field }) => (
								<FormItem className={style.form}>
									<FormLabel className={style.label}>
										<span className={style.span}>*</span>所属1
									</FormLabel>
									<FormControl>
										<Input
											placeholder="立命館大学"
											{...field}
											className={style.input}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="belong_to2"
							render={({ field }) => (
								<FormItem className={style.form}>
									<FormLabel className={style.label}>所属2</FormLabel>
									<FormControl>
										<Input
											placeholder="立命館大学"
											{...field}
											className={style.input}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="belong_to3"
							render={({ field }) => (
								<FormItem className={style.form}>
									<FormLabel className={style.label}>所属3</FormLabel>
									<FormControl>
										<Input
											placeholder="立命館大学"
											{...field}
											className={style.input}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="mail"
							render={({ field }) => (
								<FormItem className={style.form}>
									<FormLabel className={style.label}>
										<span className={style.span}>*</span>メールアドレス
									</FormLabel>
									<FormControl>
										<Input
											placeholder="e-mail"
											{...field}
											className={style.input}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem className={style.form}>
									<FormLabel className={style.label}>
										<span className={style.span}>*</span>パスワード
									</FormLabel>
									<FormControl>
										<Input
											placeholder="text"
											{...field}
											className={style.input}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<br />
						<br />

						<FormField
							control={form.control}
							name="introduction"
							render={({ field }) => (
								<FormItem className={style.form}>
									<FormLabel className={style.label}>
										{props.introduction}
									</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Text"
											{...field}
											className={style.input}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</CardContent>
					<br />
					<br />
					<CardFooter className={style.cardFooter}>
						<Button type="submit" className={style.button}>
							新規会員登録
							<CircleChevronRight />
						</Button>
					</CardFooter>
				</Card>
			</form>
		</Form>
	);
};
