'use client'
import UpdateLicenseDuration from "@/components/LicenseDuration/update";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều chỉnh cán bộ | Driving School",
  description: "Trang điều chỉnh cán bộ của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const updateLicenseDurationPage = () => {
  return (
    <>
    <UpdateLicenseDuration/>
    </>
  );
};

export default updateLicenseDurationPage;
