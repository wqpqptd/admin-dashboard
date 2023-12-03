// 'use client'
import LicenseDuration from "@/components/LicenseDuration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cán bộ | Driving School",
  description: "Trang quản lý cán bộ của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const LicenseDurationPage = () => {
  return (
    <>
      <LicenseDuration/>
    </>
  );
};

export default LicenseDurationPage;
