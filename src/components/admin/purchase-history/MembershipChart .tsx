"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMediaQuery } from "react-responsive";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

// Dummy data for "This month" and "Last month"
const dataThisMonth = {
  labels: ["Business membership", "Standard membership"],
  datasets: [
    {
      data: [2, 31], // Data for this month
      backgroundColor: ["#2563eb", "#f97316"],
    },
  ],
};

const dataLastMonth = {
  labels: ["Business membership", "Standard membership"],
  datasets: [
    {
      data: [4, 28], // Data for last month
      backgroundColor: ["#2563eb", "#f97316"],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
};

const MembershipChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("this-month");
  const [chartData, setChartData] = useState(dataThisMonth); // Default to "this-month"

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const responsiveOptions = {
    ...options,
    maintainAspectRatio: false,
    aspectRatio: isTabletOrMobile ? 1 : 2,
  };

  // Update the chart data based on the selected period
  useEffect(() => {
    if (selectedPeriod === "this-month") {
      setChartData(dataThisMonth);
    } else if (selectedPeriod === "last-month") {
      setChartData(dataLastMonth);
    }
  }, [selectedPeriod]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between flex-shrink-0 overflow-hidden">
        <CardTitle className="md:text-[18px] font-semibold text-sm">
          Order review status
        </CardTitle>
        <Select defaultValue="this-month" onValueChange={setSelectedPeriod}>
          <SelectTrigger className="md:w-[131px] w-[70px] !p-[8px] text-[12px] ">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent className="text-[12px]">
            <SelectItem value="this-month">This month</SelectItem>
            <SelectItem value="last-month">Last month</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <Doughnut
          className="md:min-h-[200px] h-[200px] sm:w-auto !w-full"
          data={chartData}
          options={responsiveOptions}
        />
      </CardContent>
    </Card>
  );
};

export default MembershipChart;
