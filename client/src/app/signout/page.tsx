"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { communityAtom } from "@/domain/community";
import { userAtom } from "@/domain/user";
import { SignOutDialog } from "@/feature/signout/components/signout";
import style from "@/feature/signout/components/style.module.scss";
import { useAtom } from "jotai/index";
import { allowedDisplayValues } from "next/dist/compiled/@next/font/dist/constants";
import Link from "next/link";
import React from "react";

const UserSignOutPage = () => {
  const [currentUser, setCurrentUser] = useAtom(userAtom);
  const [currentCommunity, setCurrentCommunity] = useAtom(communityAtom);

  React.useEffect(() => {
    setCurrentUser(null);
    setCurrentCommunity(null);
  }, [setCurrentUser, setCurrentCommunity]);

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

export default UserSignOutPage;
