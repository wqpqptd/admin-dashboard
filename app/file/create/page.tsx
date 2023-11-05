import CreateFile from "@/components/File/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều thêm hồ sơ | Driving School",
  description: "Trang thêm hồ sơ của Admin",
  // other metadata
};

const createFilePage = ({ params }:{params:any}) => {
  return (
    <>
    <CreateFile/>
    </>
  );
};

export default createFilePage;
