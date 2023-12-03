'use client'
import CreateLicense from "@/components/License/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thêm giấy phép lái xe | Driving School",
  description: "Trang thêm giấy phép lái xe của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const createLicensePage = () => {
  return (
    <>
    <CreateLicense/>
    </>
  );
};

export default createLicensePage;
