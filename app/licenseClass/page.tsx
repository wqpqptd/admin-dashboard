import LicenseClass from "@/components/LicenseClass";
import Officer from "@/components/Officer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cán bộ | Driving School",
  description: "Trang quản lý cán bộ của Admin",
  // other metadata
};

const LicenseClassPage = () => {
  return (
    <>
      <LicenseClass/>
    </>
  );
};

export default LicenseClassPage;
