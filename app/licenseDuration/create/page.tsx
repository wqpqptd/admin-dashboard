'use client'
import CreateLicenseDuration from "@/components/LicenseDuration/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thêm thời hạn giấy phép lái xe | Driving School",
  description: "Trang thêm thời hạn giấy phép lái xe của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const createLicenseDurationPage = () => {
  return (
    <>
    <CreateLicenseDuration />
    </>
  );
};

export default createLicenseDurationPage;
