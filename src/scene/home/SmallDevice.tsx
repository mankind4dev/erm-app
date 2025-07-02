import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import type { SidebarLink } from "../../types/types";

type DeviceProps = {
  onTabClick: (tab: string) => void;
  activeTab: string;
  sidebar: SidebarLink[]; // ✅ FIXED: this should be an array of SidebarLink
};

const SmallDevice = ({ onTabClick, activeTab, sidebar }: DeviceProps) => {
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);

  return (
    <>
      {/* Hamburger toggle visible only on small screens */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMenuToggle((prev) => !prev)}
          className="text-2xl text-slate-700"
        >
          <FaHamburger />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 bg-slate-300 min-h-screen w-[200px] py-4 transition-transform duration-300
        ${isMenuToggle ? "translate-x-0" : "-translate-x-full"}
        lg:hidden`}
      >
        <div className="flex flex-col justify-between items-center h-full w-full">
          {/* Profile */}
          <div className="flex flex-col items-center mt-6">
            <img
              src="/src/assets/doc.jpeg"
              alt="doc"
              className="rounded-full w-20 h-20 object-cover"
            />
            <p className="text-[13px] font-semibold mt-2">Dr. David</p>
            <p className="text-[10px] text-gray-700">Programmer</p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start w-full mt-6 space-y-4 px-4">
            {sidebar.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  onTabClick(item.link);
                  setIsMenuToggle(false); // Close sidebar on click
                }}
                className={`flex items-center space-x-2 w-full p-2 rounded transition-all
                  ${
                    activeTab === item.link
                      ? "bg-slate-500 text-white"
                      : "hover:bg-slate-500 hover:text-white"
                  }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Logout Button */}
          <div className="mb-6">
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallDevice;
