'use client'
import CreateOfficer from "@/components/Officer/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thêm cán bộ | Driving School",
  description: "Trang thêm cán bộ của Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

const createOfficerPage = () => {
  return (
    <>
    <CreateOfficer/>
    </>
  );
};

export default createOfficerPage;
