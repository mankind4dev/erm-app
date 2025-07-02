import { FaHamburger,  FaUserAlt } from "react-icons/fa";
import type { SidebarLink } from "../../types/types"; 
import { MdOutlineMessage, MdOutlineSpaceDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { AiOutlineMedicineBox } from "react-icons/ai";

type Props = {
  onTabClick: (tab: string) => void;
  activeTab: string;
};

const sidebar: Array<SidebarLink> = [
  {
    name: "Dashboard",
    link: "dashboard",
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    name: "Schedule",
    link: "schedule",
    icon: <SlCalender />,
  },
  {
    name: "Patients",
    link: "patients",
    icon: <FaUserAlt />,
  },
  {
    name: "Medicines",
    link: "medicines",
    icon: <AiOutlineMedicineBox />,
  },
  {
    name: "Messages",
    link: "messages",
    icon: <MdOutlineMessage />,
  },
];

const Sidebar = ({ activeTab, onTabClick }: Props) => {
  // const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
  // const smallSizeScreen = useMediaQuery("(max-width: 420px)");
  return (
    <>
      <div className="flex "></div>
      <div className="flex relative flex-col justify-between items-center w-[130px] min-h-screen bg-slate-300 py-4 overflow-hidden">
        <div className="hidden lg:flex absolute right-0 top-1 cursor-pointer">
          <FaHamburger className=""/>
        </div>
        <div className="">
          <div className="flex flex-col items-center my-6">
            <img
              src="/src/assets/doc.jpeg"
              alt="doc-image"
              className="rounded-full object-center w-20 h-20"
            />
            <p className="text-[13px] font-semibold mt-2">Dr. David</p>
            <p className="text-[10px] text-gray-700">Programmer</p>
          </div>

          <div className="flex flex-col items-start w-full space-y-4">
            {sidebar.map((item, index) => (
              <button
                key={index}
                onClick={() => onTabClick(item.link)}
                className={`flex items-center space-x-2 w-full p-2 rounded cursor-pointer transition-all
                ${
                  activeTab === item.link
                    ? "bg-slate-500 text-white"
                    : "hover:bg-slate-500"
                }
              `}
              >
                <span className="text-sm">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all">
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
