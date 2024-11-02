"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { userAtom } from "@/domain/user";
import { useAtom } from "jotai/index";
import Link from "next/link";
import React from "react";
import style from "./style.module.scss";

export const SignOutDialog = () => {
	const [currentUser, setCurrentUser] = useAtom(userAtom);

	React.useEffect(() => {
		setCurrentUser(null);
	}, [setCurrentUser]);

	return (
		<Card className={style.card}>
			<CardHeader>
				<CardTitle className={style.header}>サインアウトしました</CardTitle>
			</CardHeader>

			<CardContent className={style.content}>
				<Button asChild className={style.button}>
					<Link href="/signin/user">サインインはこちら</Link>
				</Button>
			</CardContent>
		</Card>
	);
};
