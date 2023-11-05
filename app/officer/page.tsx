import Officer from "@/components/Officer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cán bộ | Driving School",
  description: "Trang quản lý cán bộ của Admin",
  // other metadata
};

const OfficerPage = () => {
  return (
    <>
      <Officer/>
    </>
  );
};

export default OfficerPage;
