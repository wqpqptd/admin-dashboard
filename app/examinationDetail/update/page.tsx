'use client'
import UpdateExaminationDetail from "@/components/ExaminationDetail/update";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều chỉnh đợt sát hạch | Driving School",
  description: "Trang điều chỉnh đợt sát hạch của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const updateExaminationDetailPage = () => {
  return (
    <>
    <UpdateExaminationDetail/>
    </>
  );
};

export default updateExaminationDetailPage;
