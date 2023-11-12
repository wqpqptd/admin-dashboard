'use client'
import LicenseClass from "@/components/LicenseClass";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cán bộ | Driving School",
  description: "Trang quản lý cán bộ của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const LicenseClassPage = () => {
  return (
    <>
      <LicenseClass/>
    </>
  );
};

export default LicenseClassPage;
