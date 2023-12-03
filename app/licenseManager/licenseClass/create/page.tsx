'use client'
import CreateLicenseClass from "@/components/LicenseClass/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thêm cán bộ | Driving School",
  description: "Trang thêm cán bộ của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const createLicenseClassPage = () => {
  return (
    <>
    <CreateLicenseClass />
    </>
  );
};

export default createLicenseClassPage;
