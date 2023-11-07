import CreateLicenseClass from "@/components/LicenseClass/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thêm cán bộ | Driving School",
  description: "Trang thêm cán bộ của Admin",
  // other metadata
};

const createLicenseClassPage = ({ params }:{params:any}) => {
  return (
    <>
    <CreateLicenseClass params={params.id}/>
    </>
  );
};

export default createLicenseClassPage;
