import CreateLicenseDuration from "@/components/LicenseDuration/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thêm cán bộ | Driving School",
  description: "Trang thêm cán bộ của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const createLicenseDurationPage = ({ params }:{params:any}) => {
  return (
    <>
    <CreateLicenseDuration params={params.id}/>
    </>
  );
};

export default createLicenseDurationPage;
