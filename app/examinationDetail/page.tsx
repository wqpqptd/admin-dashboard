'use client'
import ExaminationDetail from "@/components/ExaminationDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đợt sát hạch | Driving School",
  description: "Trang quản lý đợt sát hạch của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const ExaminationDetailPage = () => {
  return (
    <>
      <ExaminationDetail />
    </>
  );
};

export default ExaminationDetailPage;
