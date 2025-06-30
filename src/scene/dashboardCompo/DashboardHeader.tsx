import React from "react";
import { GoBell } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

type Props = {};

const DashboardHeader = (props: Props) => {
  return (
    <>
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-[25px]">Dashboard</h1>
        <div className="flex space-x-8 items-center">
          <div className="flex items-center space-x-1">
            <GoBell className="w-8 h-8"/>
            <p className="text-[15px]">Alert</p>
          </div>
          <div className="flex items-center space-x-1">
            <IoIosHelpCircleOutline className="w-8 h-8"/>
            <p className="text-[15px]">Help</p>
          </div>
          <div className="flex items-center space-x-1">
            <CiSettings className="w-8 h-8"/>
            <p className="text-[15px]">Settings</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
