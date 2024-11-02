"use client";
import { Community } from "@/domain/community";
import { statusAtom } from "@/domain/general";
import { userAtom } from "@/domain/user";
import { type ClassValue, clsx } from "clsx";
import { useAtom } from "jotai/index";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
