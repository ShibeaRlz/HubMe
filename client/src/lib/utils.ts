"use client";
import { Community } from "@/domain/community";
import { statusAtom } from "@/domain/general";
import { userAtom } from "@/domain/user";
import { PutObjectCommand, PutObjectRequest, S3, S3Client } from "@aws-sdk/client-s3";
import { type ClassValue, clsx } from "clsx";
import { useAtom } from "jotai/index";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// S3の設定
// const s3 = new S3({
//   accessKeyId: process.env.ACCESS_KEY_ID,
//   secretAccessKey: process.env.SECRET_ACCESS_KEY,
//   region: process.env.REGION,
// });
const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_REGION || "",
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY || "",
  },
});

// S3に画像をアップロードし、そのURLを取得する関数
export const uploadImageToS3 = async (file: File) => {
  // アップロード時のファイル名を作成
  const fileName = `${Date.now()}-${file.name}`;
  // S3へのアップロードに必要な情報をまとめるオブジェクト
  const params: PutObjectRequest = {
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME ? process.env.NEXT_PUBLIC_S3_BUCKET_NAME : "",
    Key: fileName,
    ContentType: file.type,
    Body: file,
  };

  try {
    const command = new PutObjectCommand(params);
    const uploadResult = await s3Client.send(command);
    // S3に画像をアップロードする
    // const data = await s3.upload(params).promise();
    // アップロード成功時の処理
    console.log("画像アップロード成功:", uploadResult);
    // アップロードされた画像のURLを取得
    return `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_REGION}.amazonaws.com/${fileName}`;
  } catch (error) {
    // アップロードエラー発生時の処理
    console.error("画像アップロードエラー:", error);
    // null値を返す
    return null;
  }
};
