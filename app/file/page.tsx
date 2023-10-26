import File from "@/components/File";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hồ sơ sát hạch | Driving School",
  description: "Trang quản lý hồ sơ sát hạch của Admin",
  // other metadata
};

const FilePage = () => {
  return (
    <>
      <File />
    </>
  );
};

export default FilePage;
