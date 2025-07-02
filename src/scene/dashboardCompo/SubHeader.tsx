import type { SubTypes } from "../../types/types";
import { HiUsers } from "react-icons/hi";
import { FaDollarSign, FaPlus } from "react-icons/fa";
import { GiRoyalLove } from "react-icons/gi";
import { CiCalendar } from "react-icons/ci";

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

const SubHeader = () => {
  return (
    <>
      <div className="flex flex-wrap items-center w-full space-x-3 space-y-2 lg:space-x-4">
        {subHeader.map((item, index) => (
          <div
            key={index}
            className={`flex items-center px-2 py-2 md:px-6 md:py-3 space-x-4 rounded-sm bg-slate-300`}
          >
            <div className={`p-1 md:p-2  rounded-full text-xl ${item.bg}`}>
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
        {/* <button
          type="button"
          className="flex justify-between items-center px-4 py-6 space-x-2 rounded-sm bg-slate-300 cursor-pointer"
        > 
          <FaPlus size={10} className="text-green-800" />
        </button> */}
      </div>
    </>
  );
};

export default SubHeader;
