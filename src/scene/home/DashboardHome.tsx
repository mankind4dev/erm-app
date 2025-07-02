import Sidebar from "./Sidebar";
import { useSearchParams } from "react-router-dom";
import Schedule from "../../page/Schedule";
import Patients from "../../page/Patients";
import Medicines from "../../page/Medicines";
import Dashboard from "../../page/Dashboard";
import { useEffect, useState } from "react";
import Messages from "../messages/Messages";
import useMediaQuery from "../../hooks/useMediaQuery"; // ✅ Ensure you import this

const DashboardLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [tab, setTab] = useState<string>(() => {
    return localStorage.getItem("activeTab") || "dashboard";
  });

  const isLargeScreen = useMediaQuery("(min-width: 1024px)"); // lg breakpoint

  const handleClick = (tabName: string) => {
    setSearchParams({ tab: tabName });
    setActiveTab(tabName);
    localStorage.setItem("activeTab", tabName);
    setTab(tabName);
  };

  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    if (!searchParams.get("tab") && savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  return (
    <div className="flex w-full max-h-screen">
      {/* Sidebar for large screens */}
      {isLargeScreen && (
        <div className="hidden lg:flex fixed left-0 top-0 h-screen z-10">
          <Sidebar activeTab={activeTab} onTabClick={handleClick} />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`w-full transition-all duration-300 px-4 py-6 ${
          isLargeScreen ? "lg:ml-[130px]" : "ml-0"
        }`}
      >
        {tab === "dashboard" && <Dashboard />}
        {tab === "schedule" && <Schedule />}
        {tab === "patients" && <Patients />}
        {tab === "medicines" && <Medicines />}
        {tab === "messages" && <Messages />}
      </div>
    </div>
  );
};

export default DashboardLayout;
