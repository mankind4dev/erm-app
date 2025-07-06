import { FaPlus, FaUserAlt } from "react-icons/fa";
import { MdOutlineMessage, MdOutlineSpaceDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import type { SidebarLink } from "../types/types";

type Props = {
  activeTab: string;
  onTabClick: (tab: string) => void;
  onClose: () => void; // ✅ Correct type
};

const sidebar: SidebarLink[] = [
  { name: "Dashboard", link: "dashboard", icon: <MdOutlineSpaceDashboard /> },
  { name: "Schedule", link: "scheldules", icon: <SlCalender /> },
  { name: "Patients", link: "patients", icon: <FaUserAlt /> },
  { name: "Medicines", link: "medicines", icon: <AiOutlineMedicineBox /> },
  { name: "Messages", link: "messages", icon: <MdOutlineMessage /> },
];

const Sidebar = ({ activeTab, onTabClick, onClose }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between items-center w-[130px] min-h-screen bg-slate-300 pt-4 pb-1">
      {/* Close button */}
      <div className="flex lg:hidden self-end px-4">
        <button onClick={onClose}>
          <FaPlus className="text-xl rotate-45" />
        </button>
      </div>

      <div>
        <div className="flex flex-col items-center my-6">
          <img
            src="/src/assets/doc.jpeg"
            alt="doc"
            className="rounded-full w-20 h-20 object-cover"
          />
          <p className="text-[13px] font-semibold mt-2">Dr. David</p>
          <p className="text-[10px] text-gray-700">Programmer</p>
        </div>

        <div className="flex flex-col items-start w-full space-y-4 px-4">
          {sidebar.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                onTabClick(item.link);
                navigate(`/sme/${item.link}`);
                onClose(); // ✅ Close sidebar
              }}
              className={`flex items-center space-x-2 w-full p-2 rounded cursor-pointer transition-all ${
                activeTab === item.link
                  ? "bg-slate-500 text-white font-semibold"
                  : "hover:bg-slate-500 text-gray-800"
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
