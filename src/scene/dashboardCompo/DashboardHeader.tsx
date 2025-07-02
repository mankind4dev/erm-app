import { GoBell } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci"; 
import { IoMenu } from "react-icons/io5";

const DashboardHeader = () => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <button className="flex md:hidden">
           <IoMenu />
        </button>
        <div className="flex justify-between items-center w-full">
          <h1 className="text-[14px] lg:text-[25px]">Dashboard</h1>
          <div className="flex space-x-3 md:space-x-8 items-center">
            <div className="flex relative items-center space-x-1">
              <div className="relative">
                <GoBell
                  className="md:w-8 w-3 h-3 md:h-8 text-gray-700"
                  aria-label="Notifications"
                />
                <span className="absolute -top-1 -right-1 bg-red-400 text-white  text-[5px] md:text-xs font-bold rounded-full md:w-5 md:h-5 h-2 w-2 p-[2px] md:p-1 flex items-center justify-center shadow z-50">
                  3
                </span>
              </div>
              <p className="hidden md:text-[15px] ">Alert</p>
            </div>
            <div className="flex items-center space-x-1">
              <IoIosHelpCircleOutline className="md:w-8 w-3 h-3 md:h-8 " />
              <p className="hidden md:text-[15px] ">Help</p>
            </div>
            <div className="flex items-center space-x-1">
              <CiSettings className="md:w-8 w-3 h-3 md:h-8 " />
              <p className="hidden md:text-[15px] ">Settings</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
