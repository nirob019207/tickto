import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Filter } from "lucide-react"; // Import the filter icon
import { X } from "lucide-react";

export default function FilterPanel() {
  const [monthlyRent, setMonthlyRent] = React.useState([3000]);
  const [fromYear, setFromYear] = React.useState<number | string>("");
  const [toYear, setToYear] = React.useState<number | string>("");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <div className="relative mt-4 lg:mt-[55px]">
      {/* Drawer toggle for smaller screens, using Filter Icon */}
      <button
        className="fixed bg-primary p-1 text-white rounded-lg top-36 left-0 z-50 lg:hidden"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Filter className="text-white text-xl" />
      </button>

      {/* Drawer Panel */}
      <div
        className={`${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-[1000] w-[374px] bg-white shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto lg:translate-x-0 pb-8 lg:static lg:w-auto lg:shadow-none lg:rounded-2xl lg:px-3 lg:py-6 lg:max-w-[354px]`}
      >
        <button
          className="absolute top-5 right-3 bg-transparent lg:hidden"
          onClick={() => setIsDrawerOpen(false)}
        >
          <X className=" text-primary text-xl" />
        </button>
        <h2 className="text-2xl text-[#263238] font-semibold font-sans px-4 pt-14 lg:p-0">
          FILTER BY :
        </h2>

        {/* Travel Type */}
        <div className="space-y-4 p-4 sm:p-6 lg:p-0">
          <h3 className="font-medium lg:mt-10 text-[18px] text-[#263238]">
            Travel Type
          </h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="scouting" />
              <Label htmlFor="scouting">Scouting Trip (1-8 wks)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="slow-travel" />
              <Label htmlFor="slow-travel">Slow Travel (2 mos - 6 mos)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="long-term" />
              <Label htmlFor="long-term">Long Term (6 mos - 1 yr)</Label>
            </div>
          </div>
        </div>

        {/* Members arriving */}
        <div className="p-4 sm:p-6 lg:p-0">
          <h3 className="font-medium lg:mt-10 text-[18px] text-[#263238]">
            Members arriving between
          </h3>
          <div className="grid gap-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-start sm:items-center mt-5">
              <Select>
                <SelectTrigger className="w-full sm:w-[154px] h-[50px]">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jan">January</SelectItem>
                  <SelectItem value="feb">February</SelectItem>
                  <SelectItem value="mar">March</SelectItem>
                  <SelectItem value="apr">April</SelectItem>
                  <SelectItem value="may">May</SelectItem>
                  <SelectItem value="jun">June</SelectItem>
                  <SelectItem value="jul">July</SelectItem>
                  <SelectItem value="aug">August</SelectItem>
                  <SelectItem value="sep">September</SelectItem>
                  <SelectItem value="oct">October</SelectItem>
                  <SelectItem value="nov">November</SelectItem>
                  <SelectItem value="dec">December</SelectItem>
                </SelectContent>
              </Select>
              <input
                type="text"
                value={fromYear}
                onChange={(e) => setFromYear(e.target.value)}
                placeholder="Year"
                className="w-full sm:w-[154px] h-[46px] border border-gray-300 rounded-md p-2"
              />
            </div>
            <p className="text-center text-sm text-gray-500">To</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-start sm:items-center">
              <Select>
                <SelectTrigger className="w-full sm:w-[154px] h-[50px]">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="jan">January</SelectItem>
                  <SelectItem value="feb">February</SelectItem>
                  <SelectItem value="mar">March</SelectItem>
                  <SelectItem value="apr">April</SelectItem>
                  <SelectItem value="may">May</SelectItem>
                  <SelectItem value="jun">June</SelectItem>
                  <SelectItem value="jul">July</SelectItem>
                  <SelectItem value="aug">August</SelectItem>
                  <SelectItem value="sep">September</SelectItem>
                  <SelectItem value="oct">October</SelectItem>
                  <SelectItem value="nov">November</SelectItem>
                  <SelectItem value="dec">December</SelectItem>
                </SelectContent>
              </Select>
              <input
                type="text"
                value={toYear}
                onChange={(e) => setToYear(e.target.value)}
                placeholder="Year"
                className="w-full sm:w-[154px] h-[46px] border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>

        {/* Max Monthly Rent */}
        <div className="space-y-4 p-4 sm:p-6 lg:p-0">
          <h3 className="font-medium lg:mt-10 text-[18px] text-[#263238]">
            Max monthly rent
          </h3>
          <div className="relative w-full h-2 px-2">
            <div
              className="absolute -top-1 text-sm font-medium text-[16px] text-[#344054]"
              style={{
                left: `${(monthlyRent[0] / 5000) * 100}%`,
                transform: "translateX(-50%)",
              }}
            >
              ${monthlyRent}
            </div>
          </div>
          <Slider
            value={monthlyRent}
            onValueChange={setMonthlyRent}
            max={5000}
            step={100}
            className="relative mt-8"
          />
        </div>

        {/* Age */}
        <div className="p-4 sm:p-6 lg:p-0">
          <h3 className="font-bold lg:mt-10 text-[16px] mb-3 text-[#000]">
            Age
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="From" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                  <SelectItem key={age} value={age.toString()}>
                    {age}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="To" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                  <SelectItem key={age} value={age.toString()}>
                    {age}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Member has accommodations */}
        <div className="space-y-4 p-4 sm:p-6 lg:p-0">
          <h3 className="font-medium lg:mt-10 text-[18px] text-[#263238]">
            Member has accommodations
          </h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="has-accommodations-yes" />
              <Label htmlFor="has-accommodations-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="has-accommodations-no" />
              <Label htmlFor="has-accommodations-no">No</Label>
            </div>
          </div>
        </div>

        {/* Group membership */}
        <div className="space-y-4 p-4 sm:p-6 lg:p-0">
          <h3 className="font-medium mt-6 lg:mt-10 text-[18px] text-[#263238]">
            Group membership
          </h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="blank" />
              <Label htmlFor="blank">&lt;Blank&gt;</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="exodus" />
              <Label htmlFor="exodus">ExodUS Summit</Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
