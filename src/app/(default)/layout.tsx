"use client";


import Footer from "@/shared/footer/Footer";
import { HomeNavbar } from "@/shared/navbar/HomeNavbar";

import { usePathname } from "next/navigation";

import { ReactNode } from "react";

interface children {
  children: ReactNode;
}

const Layout = ({ children }: children) => {
  const path=usePathname()


  return (
    <>
     <HomeNavbar /> 
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
