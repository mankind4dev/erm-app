import React from "react";
import { number, string } from "zod/v4-mini";
import type { SubTypes } from "../../types/types";
import { HiUsers } from "react-icons/hi";
import { FaDollarSign, FaPlus } from "react-icons/fa";
import { GiRoyalLove } from "react-icons/gi";
import { CiCalendar } from "react-icons/ci";

type Props = {};

const subHeader: Array<SubTypes> = [
  {
    icon: <HiUsers />,
    title: "Patients",
    numbers: 666,
    bg: "bg-slate-400 text-green-300",
  },
  {
    icon: <FaDollarSign />,
    title: "Income",
    numbers: 2111,
    bg: "bg-slate-400 text-yello-400",
  },
  {
    icon: <CiCalendar />,
    title: "Application",
    numbers: 211,
    bg: "bg-slate-400 text-green-400",
  },
  {
    icon: <GiRoyalLove />,
    title: "Treatment",
    numbers: 402,
    bg: "bg-slate-400 text-red-400",
  },
];

const SubHeader = (props: Props) => {
  return (
    <div className="flex items-center justify-between w-full space-x-4">
      {subHeader.map((item, index) => (
        <div
          key={index}
          className={`flex items-center px-6 py-3 space-x-4 w-full rounded-sm bg-slate-300`}
        >
          <div className={`p-2 rounded-full   text-xl ${item.bg}`}>
            {item.icon}
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium">{item.title}</p>
            <p className="text-lg font-bold">
              {item.title === "Income"
                ? new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(item.numbers)
                : item.numbers}
            </p>
          </div>
        </div>
      ))}
      <button type="button" className="flex justify-between items-center w-lg h-full whitespace-nowrap px-2 py-6 space-x-2 rounded-sm bg-green-800 cursor-pointer">
        <p className="text-lg">Add Patient</p>
        <FaPlus size={20} />
      </button>
    </div>
  );
};

export default SubHeader;
