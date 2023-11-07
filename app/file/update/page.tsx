

'use client'
import UpdateFile from "@/components/File/update";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hồ sơ sát hạch | Driving School",
  description: "Trang hồ sơ sát hạch",
};

const UpdateFileIdPage = () => {
  
  return (
    <>
      <UpdateFile />
    </>
  );
};

export default UpdateFileIdPage;
