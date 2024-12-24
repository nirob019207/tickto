"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FilterPanel from "./FilterPanel";
import { SearchCard } from "../searchResultCard/SearchCard";
import { useState, useRef, useEffect } from "react";

const countryOptions = [
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "namerica", label: "North America" },
  { value: "samerica", label: "South America" },
  { value: "oceania", label: "Oceania" },
];

const stateOptions = [
  { value: "al", label: "Alabama (AL)" },
  { value: "ak", label: "Alaska (AK)" },
  { value: "az", label: "Arizona (AZ)" },
  { value: "ar", label: "Arkansas (AR)" },
  // Add more states as needed
];

const businessOptions = [
  { value: "accounting", label: "Accounting & Finance" },
  { value: "technology", label: "Technology" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  // Add more business types as needed
];
const monthOptions = [
  { value: "january", label: "January" },
  { value: "february", label: "February" },
  { value: "march", label: "March" },
  { value: "april", label: "April" },
  { value: "may", label: "May" },
  { value: "june", label: "June" },
  { value: "july", label: "July" },
  { value: "august", label: "August" },
  { value: "september", label: "September" },
  { value: "october", label: "October" },
  { value: "november", label: "November" },
  { value: "december", label: "December" },
];
export default function SearchHeader() {
  const [isOpenCountry, setIsOpenCountry] = useState(false);
  const [isOpenState, setIsOpenState] = useState(false);
  const [isOpenBusiness, setIsOpenBusiness] = useState(false);
  const [isOpenMonth, setIsOpenMonth] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState("Africa");
  const [selectedState, setSelectedState] = useState("Alabama (AL)");
  const [selectedBusiness, setSelectedBusiness] = useState(
    "Accounting & Finance"
  );
  const [month, setMonth] = useState("Month");

  const countryRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        countryRef.current &&
        !countryRef.current.contains(event.target as Node)
      ) {
        setIsOpenCountry(false);
      }
      if (
        stateRef.current &&
        !stateRef.current.contains(event.target as Node)
      ) {
        setIsOpenState(false);
      }
      if (
        businessRef.current &&
        !businessRef.current.contains(event.target as Node)
      ) {
        setIsOpenBusiness(false);
      }
      if (
        monthRef.current &&
        !monthRef.current.contains(event.target as Node)
      ) {
        setIsOpenMonth(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (dropdown === "country") setIsOpenCountry((prev) => !prev);
    if (dropdown === "state") setIsOpenState((prev) => !prev);
    if (dropdown === "business") setIsOpenBusiness((prev) => !prev);
    if (dropdown === "month") setIsOpenMonth((prev) => !prev);
  };

  const selectOption = (dropdown: string, value: string) => {
    if (dropdown === "country") {
      setSelectedCountry(value);
      setIsOpenCountry(false);
    }
    if (dropdown === "state") {
      setSelectedState(value);
      setIsOpenState(false);
    }
    if (dropdown === "business") {
      setSelectedBusiness(value);
      setIsOpenBusiness(false);
    }
    if (dropdown === "month") {
      setMonth(value);
      setIsOpenMonth(false);
    }
  };

  return (
    <div className="md:mt-[188px] mt-[120px] container">
      <h1 className="font-sans lg:text-left text-center sm:text-4xl text-2xl md:text-5xl font-semibold">
        Let&apos;s narrow <span className="text-primary">your search</span>
      </h1>
      <div className="mx-auto mt-7 bg-[#FFF] rounded-2xl">
        <div className="p-6">
          <div className="flex md:flex-row flex-col justify-start gap-8 items-center">
            {/* Dropdown for Country */}
            <div
              className="relative md:w-[288px] w-full h-full md:h-[63px]"
              onClick={() => toggleDropdown("country")}
              ref={countryRef}
            >
              <div className="w-full h-full bg-white rounded-[16px] border border-[#D0D5DD] p-4 flex flex-col justify-center cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#263238] md:text-[10px] lg:text-sm text-sm font-sans mb-1 font-normal">
                      Search by country
                    </div>
                    <div className="text-[#1D2939] text-[18px] lg:text-[18px] md:text-[12px] font-normal lg:font-normal font-sans">
                      {selectedCountry}
                    </div>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`text-[#475467] transition-transform duration-200 ${
                      isOpenCountry ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {/* Dropdown Options */}
              {isOpenCountry && (
                <ul className="absolute w-full mt-1 bg-white border border-[#D0D5DD] rounded-[16px] shadow-lg z-10">
                  {countryOptions.map((country) => (
                    <li
                      key={country.value}
                      className="px-4 py-2 cursor-pointer hover:bg-[#F6F6F6] text-[#344054]"
                      onClick={() => selectOption("country", country.label)}
                    >
                      {country.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Dropdown for State */}
            <div
              className="relative md:w-[288px] w-full h-full md:h-[63px]"
              onClick={() => toggleDropdown("state")}
              ref={stateRef}
            >
              <div className="w-full h-full bg-white rounded-[16px] border border-[#D0D5DD] p-4 flex flex-col justify-center cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#263238] md:text-[10px] lg:text-sm text-sm font-sans mb-1 font-normal flex items-center gap-1">
                      State{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                      >
                        <path
                          d="M6.9987 5.60352C6.5962 5.60352 6.26953 5.93018 6.26953 6.33268V6.3951C6.26953 6.51113 6.22344 6.62241 6.14139 6.70446C6.05934 6.78651 5.94806 6.8326 5.83203 6.8326C5.716 6.8326 5.60472 6.78651 5.52267 6.70446C5.44063 6.62241 5.39453 6.51113 5.39453 6.3951V6.33268C5.39453 5.90723 5.56354 5.4992 5.86438 5.19837C6.16522 4.89753 6.57325 4.72852 6.9987 4.72852H7.06636C7.38018 4.72866 7.68643 4.82489 7.94393 5.00427C8.20142 5.18365 8.39782 5.43757 8.5067 5.73189C8.61559 6.02621 8.63174 6.34682 8.55299 6.65059C8.47424 6.95437 8.30436 7.22675 8.0662 7.4311L7.61703 7.8161C7.56068 7.86502 7.5154 7.92539 7.48422 7.99318C7.45304 8.06098 7.43667 8.13464 7.4362 8.20927V8.52018C7.4362 8.63621 7.3901 8.74749 7.30806 8.82954C7.22601 8.91159 7.11473 8.95768 6.9987 8.95768C6.88267 8.95768 6.77139 8.91159 6.68934 8.82954C6.60729 8.74749 6.5612 8.63621 6.5612 8.52018V8.20927C6.5612 7.80268 6.73853 7.41652 7.04711 7.15227L7.49686 6.76727C7.59949 6.6793 7.6727 6.56202 7.70666 6.43119C7.74061 6.30036 7.73367 6.16228 7.68678 6.03551C7.63988 5.90874 7.55529 5.79939 7.44436 5.72215C7.33344 5.64492 7.20153 5.60351 7.06636 5.60352H6.9987ZM6.9987 10.416C7.15341 10.416 7.30178 10.3546 7.41118 10.2452C7.52057 10.1358 7.58203 9.98739 7.58203 9.83268C7.58203 9.67797 7.52057 9.5296 7.41118 9.4202C7.30178 9.31081 7.15341 9.24935 6.9987 9.24935C6.84399 9.24935 6.69562 9.31081 6.58622 9.4202C6.47682 9.5296 6.41536 9.67797 6.41536 9.83268C6.41536 9.98739 6.47682 10.1358 6.58622 10.2452C6.69562 10.3546 6.84399 10.416 6.9987 10.416Z"
                          fill="#0076EF"
                        />
                        <path
                          d="M1.89453 7.50065C1.89453 6.14694 2.43229 4.84868 3.38951 3.89146C4.34672 2.93424 5.64499 2.39648 6.9987 2.39648C8.35241 2.39648 9.65067 2.93424 10.6079 3.89146C11.5651 4.84868 12.1029 6.14694 12.1029 7.50065C12.1029 8.85436 11.5651 10.1526 10.6079 11.1098C9.65067 12.0671 8.35241 12.6048 6.9987 12.6048C5.64499 12.6048 4.34672 12.0671 3.38951 11.1098C2.43229 10.1526 1.89453 8.85436 1.89453 7.50065ZM6.9987 3.27148C6.44332 3.27148 5.89337 3.38087 5.38027 3.59341C4.86716 3.80595 4.40094 4.11746 4.00823 4.51018C3.61551 4.90289 3.30399 5.36911 3.09146 5.88222C2.87892 6.39532 2.76953 6.94527 2.76953 7.50065C2.76953 8.05603 2.87892 8.60598 3.09146 9.11908C3.30399 9.63219 3.61551 10.0984 4.00823 10.4911C4.40094 10.8838 4.86716 11.1954 5.38027 11.4079C5.89337 11.6204 6.44332 11.7298 6.9987 11.7298C8.12034 11.7298 9.19605 11.2842 9.98917 10.4911C10.7823 9.698 11.2279 8.6223 11.2279 7.50065C11.2279 6.37901 10.7823 5.3033 9.98917 4.51018C9.19605 3.71706 8.12034 3.27148 6.9987 3.27148Z"
                          fill="#0076EF"
                        />
                      </svg>
                    </div>
                    <div className="text-[#1D2939] text-[18px] lg:text-[18px] md:text-[12px] font-normal font-sans">
                      {selectedState}
                    </div>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`text-[#475467] transition-transform duration-200 ${
                      isOpenState ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {/* Dropdown Options */}
              {isOpenState && (
                <ul className="absolute w-full mt-1 bg-white border border-[#D0D5DD] rounded-[16px] shadow-lg z-10">
                  {stateOptions.map((state) => (
                    <li
                      key={state.value}
                      className="px-4 py-2 cursor-pointer hover:bg-[#F6F6F6] text-[#344054]"
                      onClick={() => selectOption("state", state.label)}
                    >
                      {state.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="">
              <p className="text-sm font-medium max-w-[86px] text-gray-500">
                AND/OR
              </p>
            </div>
            {/* Dropdown for Business */}
            <div
              className="relative w-full h-full md:w-[330px] md:h-[63px]"
              onClick={() => toggleDropdown("business")}
              ref={businessRef}
            >
              <div className="w-full h-full bg-white rounded-[16px] border border-[#D0D5DD] p-4 flex flex-col justify-center cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#263238] md:text-[10px] lg:text-sm text-sm font-sans mb-1 font-normal">
                      Business
                    </div>
                    <div className="text-[#1D2939] text-[18px] lg:text-[18px] md:text-[12px] font-normal font-sans">
                      {selectedBusiness}
                    </div>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`text-[#475467] transition-transform duration-200 ${
                      isOpenBusiness ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {/* Dropdown Options */}
              {isOpenBusiness && (
                <ul className="absolute w-full mt-1 bg-white border border-[#D0D5DD] rounded-[16px] shadow-lg z-10">
                  {businessOptions.map((business) => (
                    <li
                      key={business.value}
                      className="px-4 py-2 cursor-pointer hover:bg-[#F6F6F6] text-[#344054]"
                      onClick={() => selectOption("business", business.label)}
                    >
                      {business.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <hr className="mt-7 mb-5" />

          {/* Travel Begins Section */}
          <div className="">
            <label className="text-sm sm:text-left text-center font-medium text-gray-700">
              Travel Begins(MM/YY)
            </label>
            <div className="flex md:flex-row flex-col items-center mt-3 gap-4">
              <div
                className="relative w-full h-full md:w-[254px] md:h-[50px]"
                onClick={() => toggleDropdown("month")}
                ref={monthRef}
              >
                <div className="w-full h-full bg-white rounded-[16px] border border-[#D0D5DD] p-4 flex flex-col justify-center cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[#1D2939] text-[18px] font-normal font-sans">
                        {month}
                      </div>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`text-[#475467] transition-transform duration-200 ${
                        isOpenMonth ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {/* Dropdown Options */}
                {isOpenMonth && (
                  <ul className="absolute w-full mt-1 bg-white border border-[#D0D5DD] rounded-[16px] shadow-lg z-10">
                    {monthOptions.map((month) => (
                      <li
                        key={month.value}
                        className="px-4 py-2 cursor-pointer hover:bg-[#F6F6F6] text-[#344054]"
                        onClick={() => selectOption("month", month.label)}
                      >
                        {month.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex sm:flex-row flex-col items-center gap-8">
                <Input
                  type="text"
                  placeholder="Year"
                  className="sm:w-[240px] h-full w-full sm:h-[50px] bg-white"
                />
                <Button
                  size="icon"
                  className="bg-primary  rounded-full hover:bg-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2938 14.5697 18.0025 12.8204 18 11C18 7.133 14.867 4 11 4C7.133 4 4 7.133 4 11C4 14.867 7.133 18 11 18C12.8204 18.0025 14.5697 17.2938 15.875 16.025L16.025 15.875Z"
                      fill="white"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        <FilterPanel />
        <SearchCard />
      </div>
    </div>
  );
}
