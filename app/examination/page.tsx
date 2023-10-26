import Examination from "@/components/Examination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đợt sát hạch | Driving School",
  description: "Trang quản lý đợt sát hạch của Admin",
  // other metadata
};

const ExaminationPage = () => {
  return (
    <>
      <Examination />
    </>
  );
};

export default ExaminationPage;
