

import FileId from "@/components/File/[id]";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hồ sơ sát hạch | Driving School",
  description: "Trang hồ sơ sát hạch",
};

const FileIdPage = ({params} :{params:any}) => {
  return (
    <>
      <FileId params={params.id}/>
    </>
  );
};

export default FileIdPage;
