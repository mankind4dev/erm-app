import React from "react";
import { GoBell } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

type Props = {};

const DashboardHeader = (props: Props) => {
  return (
    <>
      <div className="flex justify-between items-center my-1">
        <h1 className="text-[25px]">Dashboard</h1>
        <div className="flex space-x-8 items-center">
          <div className="flex relative items-center space-x-1">
            <div className="relative">
              <GoBell
                className="w-8 h-8 text-gray-700"
                aria-label="Notifications"
              />
              <span className="absolute -top-1 -right-1 bg-gray-400 text-white text-xs font-bold rounded-full w-5 h-5 p-1 flex items-center justify-center shadow z-50">
                3
              </span>
            </div> 
            <p className="text-[15px]">Alert</p>
          </div>
          <div className="flex items-center space-x-1">
            <IoIosHelpCircleOutline className="w-8 h-8" />
            <p className="text-[15px]">Help</p>
          </div>
          <div className="flex items-center space-x-1">
            <CiSettings className="w-8 h-8" />
            <p className="text-[15px]">Settings</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
