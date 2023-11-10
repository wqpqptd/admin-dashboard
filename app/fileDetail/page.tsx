import FileDetail from "@/components/FileDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đợt sát hạch | Driving School",
  description: "Trang quản lý đợt sát hạch của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const FileDetailPage = () => {
  return (
    <>
      <FileDetail />
    </>
  );
};

export default FileDetailPage;
