
'use client'
import Reserve from "@/components/Reserve";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bảo lưu kết quả hồ sơ sát hạch | Driving School",
  description: "Trang quản lý kết quả bảo lưu hồ sơ sát hạch của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const ReservePage = () => {
  return (
    <>
      <Reserve/>
    </>
  );
};

export default ReservePage;
