'use client'
import CreateFileDetail from "@/components/FileDetail/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thêm đợt sát hạch | Driving School",
  description: "Trang thêm đợt sát hạch của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const createFileDetailPage = () => {
  return (
    <>
    <CreateFileDetail/>
    </>
  );
};

export default createFileDetailPage;
