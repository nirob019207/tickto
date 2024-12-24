"use client";

import { adminSidebarRoutes } from "@/constants/adminSidebarItems";
import Image from "next/image";
import SidebarRoutes from "./SidebarRoutes";
import logo from "@/assets/expat-logo.png";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import Promotiom from "@/assets/Promotiom.png";
import Link from "next/link";

interface props {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ expand, setExpand }: props) => {
  // const [expand, setExpand] = useState(false);
  const handleclick = () => {};

  return (
    <div
      className={`fixed top-0 left-0 z-50 transition  h-[calc(100vh-20px)] ${
        expand ? "md:w-[300px] w-[100px]" : "md:w-[300px] w-[60px]"
      }`}
      id="adminSidebar"
    >
      <div className="relative md:pt-0 pt-20">
        {/* Admin  */}
        <div className="absolute top-9 text-xl  left-2 md:hidden">
          <CiMenuFries onClick={() => setExpand((e) => !e)} />
        </div>
      </div>
      <div className="logo py-5 md:flex justify-center hidden">
        <Link href={"/dashboard/admin"}>
          <Image
            className="h-[68px] w-[92px] mx-auto object-fill "
            src={logo}
            alt="Image Description"
            width={150}
            height={150}
            unoptimized
          />
        </Link>
      </div>

      {/* border */}
      <div className="border-b border md:block hidden"></div>

      {/* sidebar routes */}
      <div className="items flex flex-col gap-2 pt-5 ">
        {adminSidebarRoutes.map((item) => (
          <SidebarRoutes
            expand={expand}
            setExpand={setExpand}
            routes={item}
            key={item.link}
          />
        ))}

        {/* Admin  */}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Button className="flex items-center gap-2" variant={"link"}>
          <Image
            src={Promotiom}
            height={24}
            width={24}
            alt=""
            className={`size-6 ${expand?"flex":"flex"}`}
            unoptimized
          />
          {
            <p
              className={`${
                expand ? "md:flex block" : "md:flex hidden"
              } text-[#0F0F0F]`}
            >
              Logout
            </p>
          }
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
