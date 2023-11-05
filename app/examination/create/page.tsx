import CreateExamination from "@/components/Examination/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thêm đợt sát hạch | Driving School",
  description: "Trang thêm đợt sát hạch của Admin",
  // other metadata
};

const createExaminationPage = ({ params }:{params:any}) => {
  return (
    <>
    <CreateExamination params={params.id}/>
    </>
  );
};

export default createExaminationPage;
