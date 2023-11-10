'use client'
import UpdateFileDetail from "@/components/FileDetail/update";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều chỉnh đợt sát hạch | Driving School",
  description: "Trang điều chỉnh đợt sát hạch của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const updateFileDetailPage = () => {
  return (
    <>
    <UpdateFileDetail/>
    </>
  );
};

export default updateFileDetailPage;
