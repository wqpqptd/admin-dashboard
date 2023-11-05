import CreateOfficer from "@/components/Officer/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thêm cán bộ | Driving School",
  description: "Trang thêm cán bộ của Admin",
  // other metadata
};

const createOfficerPage = ({ params }:{params:any}) => {
  return (
    <>
    <CreateOfficer params={params.id}/>
    </>
  );
};

export default createOfficerPage;
