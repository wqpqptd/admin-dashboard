'use client'
import FileId from "@/components/File/[id]";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Kết quả hồ sơ sát hạch | Driving School",
  description: "Trang kết quả hồ sơ sát hạch",
  icons: {
    icon: '/images/favicon.ico',
  },
};

const FileIdDetailPage = ({params} :{params:any}) => {
  return (
    <>
      <FileId params={params.id}/>
    </>
  );
};

export default FileIdDetailPage;
