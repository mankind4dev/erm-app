import { MdOutlineSpaceDashboard, MdOutlineMessage } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMedicineBox } from "react-icons/ai";
import type { IconType } from "react-icons";

export interface SidebarLink {
  name: string;
  link: string;
  icon: IconType;
}

export const sidebarLinks: SidebarLink[] = [
  {
    name: "Dashboard",
    link: "dashboard",
    icon: MdOutlineSpaceDashboard,
  },
  {
    name: "Schedule",
    link: "scheldules",
    icon: SlCalender,
  },
  {
    name: "Patients",
    link: "patients",
    icon: FaUserAlt,
  },
  {
    name: "Medicines",
    link: "medicines",
    icon: AiOutlineMedicineBox,
  },
  {
    name: "Messages",
    link: "messages",
    icon: MdOutlineMessage,
  },
];
