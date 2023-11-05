import UpdateExamination from "@/components/Examination/update";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều chỉnh đợt sát hạch | Driving School",
  description: "Trang điều chỉnh đợt sát hạch của Admin",
  // other metadata
};

const updateExaminationPage = ({ params }:{params:any}) => {
  return (
    <>
    <UpdateExamination params={params.id}/>
    </>
  );
};

export default updateExaminationPage;
