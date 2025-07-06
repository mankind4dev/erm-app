import { useNavigate } from "react-router-dom";
import { sidebarLinks } from "../constants/sidebarLinks";

interface Props {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const SmallDevice = ({ activeTab, onTabClick }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="fixed z-50 top-0 left-0 h-full w-[200px] bg-slate-300 shadow-lg py-4">
      <div className="flex flex-col items-center h-full justify-between">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <img
            src="/doc.jpeg"
            alt="doc"
            className="rounded-full w-20 h-20 object-cover"
          />
          <p className="text-[13px] font-semibold mt-2">Dr. David</p>
          <p className="text-[10px] text-gray-700">Programmer</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-start mt-6 w-full space-y-4 px-4">
          {sidebarLinks.map(({ name, link, icon: Icon }) => (
            <button
              key={link}
              onClick={() => {
                onTabClick(link);
                navigate(`/sme/${link}`);
              }}
              className={`flex items-center space-x-2 w-full p-2 rounded transition-all ${
                activeTab === link
                  ? "bg-slate-500 text-white font-semibold"
                  : "hover:bg-slate-500 text-gray-800"
              }`}
            >
              <Icon className="text-sm" />
              <span className="text-sm font-medium">{name}</span>
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <div className="mb-6">
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallDevice;
