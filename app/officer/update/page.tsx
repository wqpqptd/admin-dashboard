'use client'
import UpdateOfficer from "@/components/Officer/update";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều chỉnh cán bộ | Driving School",
  description: "Trang điều chỉnh cán bộ của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const updateOfficerPage = () => {
  return (
    <>
    <UpdateOfficer/>
    </>
  );
};

export default updateOfficerPage;
