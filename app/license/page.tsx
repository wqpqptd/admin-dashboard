import License from "@/components/License";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giấy phép lái xe | Driving School",
  description: "Trang quản lý giấy phép lái xe của Admin",
  // other metadata
};

const LicensePage = () => {
  return (
    <>
      <License/>
    </>
  );
};

export default LicensePage;
