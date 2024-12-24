"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminSidebarRoutes } from "@/constants/adminSidebarItems";
import { subItems } from "@/types/sidebarItemsType";

interface props{
  expand:boolean
}

const Header = ({expand}:props) => {
  const [subitems, setSubitems] = useState<subItems[]>([]);
  const [activeRoute] = useState("dashboard/admin/purchase");
  const pathname = usePathname(); // Use usePathname for dynamic routing
  // console.log(pathname)

  useEffect(() => {
    // Find the sidebar item that matches the current route
    const activeItem = adminSidebarRoutes.find(
      (item) =>
        (pathname.startsWith(item.link) ||
          item.subItems?.some((si) => si.link == pathname)) &&
        item.subItems
    );

    if (activeItem?.subItems) {
      setSubitems(activeItem.subItems);
    } else {
      setSubitems([]);
    }
  }, [pathname]);

  return (
    <div
      className={`flex items-center gap-10 pl-2 h-[81px] flex-shrink-0  sticky top-0 z-40  bg-[#f6f6f6] ${
        expand ? " ml-[120px] md:ml-[300px]" : "md:ml-[300px] ml-[80px]"
      }`}
    >
      {subitems.map((item, index) => (
        <Link
          href={item.link}
          className={`${
            pathname == item.link || activeRoute == item.link
              ? "font-inter font-normal text-[18px]"
              : "font-sans font-normal text-[16px]"
          }`}
          key={index}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Header;
