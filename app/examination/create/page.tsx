'use client'
import CreateExamination from "@/components/Examination/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thêm đợt sát hạch | Driving School",
  description: "Trang thêm đợt sát hạch của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const createExaminationPage = () => {
  return (
    <>
    <CreateExamination/>
    </>
  );
};

export default createExaminationPage;
