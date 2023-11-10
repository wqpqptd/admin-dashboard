
'use client'
import File from "@/components/File";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hồ sơ sát hạch | Driving School",
  description: "Trang quản lý hồ sơ sát hạch của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const FilePage = () => {
  return (
    <>
      <File/>
    </>
  );
};

export default FilePage;
