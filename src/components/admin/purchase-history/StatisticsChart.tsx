"use client";

import { Bar } from "react-chartjs-2";
import "./chartStyle.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const StatisticsChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("this-year");
  const [data, setData] = useState<any>(null); // This will store the dynamic data

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const responsiveOptions = {
    ...options,
    maintainAspectRatio: false,
    aspectRatio: isTabletOrMobile ? 1 : 2,
  };

  // Current Month (zero-based index: 0 = January, 11 = December)
  const currentMonth = new Date().getMonth(); // Returns a value between 0 and 11

  // Simulated dummy data for "This Year" and "Last Year"
  const thisYearData = {
    business: [65, 75, 70, 80, 60, 75, 90, 70, 80, 75, 70, 80], // Full year data
    standard: [35, 45, 35, 45, 35, 45, 35, 45, 35, 45, 35, 45], // Full year data
  };

  const lastYearData = {
    business: [55, 65, 60, 70, 50, 65, 80, 60, 70, 65, 60, 70],
    standard: [30, 40, 30, 40, 30, 40, 30, 40, 30, 40, 30, 40],
  };

  // Fetch or switch data based on selected period
  useEffect(() => {
    // Adjust "This Year" data to only include up to the current month
    const adjustedThisYearData = {
      business: thisYearData.business.slice(0, currentMonth + 1),
      standard: thisYearData.standard.slice(0, currentMonth + 1),
    };

    // Select data based on the selected period
    const dataset =
      selectedPeriod === "this-year" ? adjustedThisYearData : lastYearData;

    setData({
      labels: labels.slice(0, currentMonth + 1), // Only show labels up to the current month
      datasets: [
        {
          label: "Business",
          data: dataset.business,
          backgroundColor: "#2563eb",
        },
        {
          label: "Standard",
          data: dataset.standard,
          backgroundColor: "#f97316",
        },
      ],
    });
  }, [selectedPeriod]); // Only trigger the effect when selectedPeriod changes

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between w-full">
        <CardTitle className="md:text-[18px] font-semibold text-sm">
          Statistics
        </CardTitle>
        <Select defaultValue="this-year" onValueChange={setSelectedPeriod}>
          <SelectTrigger className="md:w-[94px] w-[70px] !p-[8px] text-[12px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent className="text-[12px]">
            <SelectItem value="this-year">This Year</SelectItem>
            <SelectItem value="last-year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex items-center justify-center w-full">
        <div className="w-full md:px-4 px-1">
          {data ? (
            <Bar className="!w-full" options={responsiveOptions} data={data} />
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatisticsChart;
