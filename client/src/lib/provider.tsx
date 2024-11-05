"use client";
import { Community } from "@/domain/community";
import { statusAtom } from "@/domain/general";
import { User, userAtom } from "@/domain/user";
import { apiClient } from "@/utils/client";
import { useAtom } from "jotai/index";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useAtom(userAtom);
  const [currentCommunity, setCurrentCommunity] = useState<Community | null>(null);
  const [currentStatus] = useAtom(statusAtom);
  const router = useRouter();

  React.useEffect(() => {
    if (!currentStatus || (currentStatus === "user" && !currentUser)) {
      router.push("/signin/user");
    } else if (currentStatus === "community" && !currentCommunity) {
      router.push("/signin/community");
    }
  }, [currentStatus, currentUser, currentCommunity, router]);

  return <>{children}</>;
}
