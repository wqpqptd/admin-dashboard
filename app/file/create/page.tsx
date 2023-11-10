'use client'
import CreateFile from "@/components/File/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều thêm hồ sơ | Driving School",
  description: "Trang thêm hồ sơ của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const createFilePage = () => {
  return (
    <>
    <CreateFile/>
    </>
  );
};

export default createFilePage;
