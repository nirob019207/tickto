"use client";
import travelimg from "@/assets/home/travelbanner.png";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function TravelSearch() {
  return (
    <div className="mt-[160px]">
      <div className="container">
        <div
          className="grid rounded-2xl pt-[40px] pb-[60px] px-[34px] lg:px-[134px] grid-cols-1 gap-10 text-white bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${travelimg.src})` }}
        >
          <div className="">
            <h1 className="text-[30px] sm:text-[40px] md:text-[54px] text-center font-normal">
              Quick search your travel partner
            </h1>
          </div>
          <div className="max-w-[532px] w-full mx-auto">
            {" "}
            {/* Ensure it takes full width of max 532px */}
            <div className="rounded-lg bg-white/10 backdrop-blur-md p-6 space-y-6">
              <div className="text-white text-xl sm:text-2xl mb-5 text-center">
                Search for
              </div>
              <div className="grid gap-6">
                {/* Travel Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">
                      Travel type
                    </label>
                    <Select>
                      <SelectTrigger className="bg-transparent border-white text-white">
                        <SelectValue placeholder="Select travel type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="leisure">Leisure</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="adventure">Adventure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Destination (Updated to Dropdown) */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">
                    Destination country
                  </label>
                  <Select>
                    <SelectTrigger className="bg-transparent border-white text-white">
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USA">United States</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="France">France</SelectItem>
                      <SelectItem value="Germany">Germany</SelectItem>
                      <SelectItem value="Japan">Japan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Travel Begin */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">
                    Travel Begin (MM/YY)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select>
                      <SelectTrigger className="bg-transparent border-white text-white">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => (
                          <SelectItem key={i + 1} value={String(i + 1)}>
                            {new Date(0, i).toLocaleString("default", {
                              month: "long",
                            })}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {/* Replacing Input with Select for Year */}
                    <Select>
                      <SelectTrigger className="bg-transparent border-white text-white">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 100 }, (_, i) => (
                          <SelectItem key={i + 1} value={String(2024 + i)}>
                            {2024 + i}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Age Range */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Age</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select>
                      <SelectTrigger className="bg-transparent border-white text-white">
                        <SelectValue placeholder="From" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 83 }, (_, i) => (
                          <SelectItem key={i + 18} value={String(i + 18)}>
                            {i + 18}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="bg-transparent border-white text-white">
                        <SelectValue placeholder="To" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 83 }, (_, i) => (
                          <SelectItem key={i + 18} value={String(i + 18)}>
                            {i + 18}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Group Membership */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">
                    Group membership
                  </label>
                  <Select>
                    <SelectTrigger className="bg-transparent border-white text-white">
                      <SelectValue placeholder="ExodUS Summit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="expat">Expat</SelectItem>
                      <SelectItem value="summit">Summit</SelectItem>
                      <SelectItem value="both">ExodUS Summit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Link href={'/search-filter'}>
                <Button className="w-full bg-primary hover:bg-blue-700 mt-6">
                  Let&apos;s find a member
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
