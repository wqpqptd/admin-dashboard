import FileIdDetail from "@/components/FileDetail/[id]";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Chi tiết hồ sơ sát hạch | Driving School",
  description: "Trang chi tiết hồ sơ sát hạch",
  icons: {
    icon: '/images/favicon.ico',
  },
};

const FileIdDetailPage = ({params} :{params:any}) => {
  return (
    <>
      <FileIdDetail params={params.id}/>
    </>
  );
};

export default FileIdDetailPage;
