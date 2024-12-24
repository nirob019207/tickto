import { StaticImageData } from "next/image";
import { IconType } from "react-icons"


export interface subItems{
    label: string,
    link: string,
}

export type adminSidebarRoutesType = {
  label: string;
  link: string;
  icon: string | StaticImageData;
  subItems?: subItems[];
};