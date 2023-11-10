'use client'
import UpdateLicense from "@/components/License/update";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều chỉnh giấy phép lái xe | Driving School",
  description: "Trang điều chỉnh giấy phép lái xe của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const updateLicensePage = () => {
  return (
    <>
    <UpdateLicense/>
    </>
  );
};

export default updateLicensePage;
