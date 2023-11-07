import UpdateLicenseDuration from "@/components/LicenseDuration/update";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều chỉnh cán bộ | Driving School",
  description: "Trang điều chỉnh cán bộ của Admin",
  // other metadata
};

const updateLicenseDurationPage = ({ params }:{params:any}) => {
  return (
    <>
    <UpdateLicenseDuration params={params.id}/>
    </>
  );
};

export default updateLicenseDurationPage;
