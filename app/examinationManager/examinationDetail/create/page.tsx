'use client'
import CreateExaminationDetail from "@/components/ExaminationDetail/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thêm chi tiết đợt sát hạch | Driving School",
  description: "Trang thêm chi tiết đợt sát hạch của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const createExaminationDetailPage = () => {
  return (
    <>
    <CreateExaminationDetail/>
    </>
  );
};

export default createExaminationDetailPage;
