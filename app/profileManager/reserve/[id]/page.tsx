'use client'
import FileId from "@/components/File/[id]";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hồ sơ được bảo lưu  | Driving School",
  description: "Trang quản lý kết quả bảo lưu",
  icons: {
    icon: '/images/favicon.ico',
  },
};

const ReserveIdPage = ({params} :{params:any}) => {
  return (
    <>
      <FileId params={params.id}/>
    </>
  );
};

export default ReserveIdPage;
