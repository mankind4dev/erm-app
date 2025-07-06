import { GoBell } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery"; 
import Sidebar from "../../components/Sidebar";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <> 
      {isSmallScreen && isOpen && (
        <div className="absolute top-0 left-0 z-50 h-screen bg-white shadow-lg">
          <Sidebar
            activeTab={activeTab}
            onTabClick={(tab) => {
              setActiveTab(tab);
              setIsOpen(false);
            }}
            onClose={() => setIsOpen(false)}
          />
        </div>
      )} 
      <div className="flex items-center w-full bg-white p-2 shadow-md"> 
        {isSmallScreen && (
          <div className="flex items-center mr-2">
            <button onClick={toggleSidebar} className="md:hidden">
              <IoMenu className="text-2xl" />
            </button>
          </div>
        )} 
        <div className="flex justify-between items-center w-full">
          <h1 className="text-[16px] lg:text-[25px]">Dashboard</h1>
          <div className="flex space-x-3 md:space-x-8 items-center">
            <div className="relative flex items-center space-x-1">
              <GoBell className="md:w-8 w-4 h-4 md:h-8 text-gray-700" />
              <span className="absolute -top-1 right-8 bg-red-400 text-white text-[5px] md:text-xs font-bold rounded-full md:w-5 md:h-5 h-2 w-2 p-[2px] md:p-1 flex items-center justify-center shadow">
                3
              </span>
              <p className="hidden md:inline text-[15px]">Alert</p>
            </div>
            <div className="flex items-center space-x-1">
              <IoIosHelpCircleOutline className="md:w-8 w-4 h-4 md:h-8" />
              <p className="hidden md:inline text-[15px]">Help</p>
            </div>
            <div className="flex items-center space-x-1">
              <CiSettings className="md:w-8 w-4 h-4 md:h-8" />
              <p className="hidden md:inline text-[15px]">Settings</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
