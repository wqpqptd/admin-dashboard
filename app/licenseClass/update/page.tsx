'use client'
import UpdateLicenseClass from "@/components/LicenseClass/update";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều chỉnh cán bộ | Driving School",
  description: "Trang điều chỉnh cán bộ của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const updateLicenseClassPage = () => {
  return (
    <>
    <UpdateLicenseClass/>
    </>
  );
};

export default updateLicenseClassPage;
