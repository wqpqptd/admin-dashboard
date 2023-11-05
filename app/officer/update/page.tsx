import UpdateOfficer from "@/components/Officer/update";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều chỉnh cán bộ | Driving School",
  description: "Trang điều chỉnh cán bộ của Admin",
  // other metadata
};

const updateOfficerPage = ({ params }:{params:any}) => {
  return (
    <>
    <UpdateOfficer params={params.id}/>
    </>
  );
};

export default updateOfficerPage;
