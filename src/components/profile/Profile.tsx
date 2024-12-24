"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { profileMenuItems } from "@/constants/profileMenuItems";
import { ChevronRight, LogOut } from "lucide-react";
import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full">
          <div className="flex items-center lg:gap-3 gap-1 rounded-lg border lg:p-3 px-2 py-1 hover:bg-accent">
            <Avatar className="lg:h-10 h-8 w-8 lg:w-10">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback className="lg:text-inherit text-sm">
                SH
              </AvatarFallback>
            </Avatar>
            <div className="lg:flex flex-col items-start hidden">
              <div className="text-sm font-medium">Hey Saifur Hadid</div>
              <div className="text-xs text-red-500">
                Your account not verified yet
              </div>
            </div>
            <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[280px]" align="end">
          {profileMenuItems.map((item) => (
            <DropdownMenuItem key={item.label} className="py-3">
              <Link
                href={item.href}
                className="flex items-center justify-between w-full"
              >
                {item.label}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem>
            <button className="flex items-center justify-between py-1 text-red-500 w-full">
              <span>Logout</span>
              <LogOut className="h-4 w-4" />
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
