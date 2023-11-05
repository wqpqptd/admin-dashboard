import UpdateLicense from "@/components/License/update";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều chỉnh giấy phép lái xe | Driving School",
  description: "Trang điều chỉnh giấy phép lái xe của Admin",
  // other metadata
};

const updateLicensePage = ({ params }:{params:any}) => {
  return (
    <>
    <UpdateLicense params={params.id}/>
    </>
  );
};

export default updateLicensePage;
