import  DrivingSchool from "@/components/Dashboard/Driving-School";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driving School",
  description: "This is Home Blog page for Admin",
  icons: {
    icon: '/images/favicon.ico',
  },
  // other metadata
};

export default function Home() {
  return (
    <>
      < DrivingSchool/>
    </>
  );
}
