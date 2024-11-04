"use client";
import Invite from "@/../public/invite";
import Logo from "@/../public/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { userAtom } from "@/domain/user";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useAtom } from "jotai/index";
import { CreditCard, Settings, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { MailIcon } from "./components/mail";
import Search from "./components/search";
import style from "./index.module.scss";

const mockData = [
  { label: "東京大学" },
  { label: "京都大学" },
  { label: "大阪大学" },
  { label: "東北大学" },
  { label: "名古屋大学" },
  { label: "九州大学" },
  { label: "北海道大学" },
  { label: "筑波大学" },
  { label: "早稲田大学" },
  { label: "慶應義塾大学" },
];

const inviteNum = 3;
const mailNum = 80;
const userIcon = "https://github.com/shadcn.png";

export const Menubar = () => {
  const [currentUser, setCurrentUser] = useAtom(userAtom);
  return (
    <div className={style.header}>
      <div className={style.icons}>
        {/*<a href="/profile/setting/user" className={style.icon}>*/}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className={style.avatar}>
              <AvatarImage src={userIcon} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{currentUser?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/*<DropdownMenuGroup>*/}
            <DropdownMenuItem asChild>
              <Link href="/profile">
                <User />
                <span>Profile</span>
              </Link>
              {/*<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>*/}
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/profile/setting/user">
                <Settings />
                <span>setting</span>
              </Link>
              {/*<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>*/}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/*</a>*/}
        <a href="/invite" className={style.icon}>
          <Invite size={60} />
          <span className={style.badge}>{inviteNum}</span>
        </a>
        <a href="/chat" className={style.icon}>
          <MailIcon count={mailNum} size={40} />
        </a>
      </div>
      <div className={style.logo}>
        <a href="/event">
          <Logo size={50} />
        </a>
      </div>
      <div className={style.search}>
        <Search data={mockData} />
      </div>
    </div>
  );
};
