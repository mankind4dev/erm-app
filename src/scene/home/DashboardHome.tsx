import Sidebar from "./Sidebar";
import { useSearchParams } from "react-router-dom";
import Schedule from "../../page/Schedule";
import Patients from "../../page/Patients";
import Medicines from "../../page/Medicines";
import Dashboard from "../../page/Dashboard";
import { useEffect, useState } from "react";

type Props = {};

const DashboardLayout = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [tab, setTab] = useState<string>(() => {
    return localStorage.getItem("activeTab") || "dashboard";
  });

  const handleClick = (tabName: string) => {
    setSearchParams({tab: tabName})
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
    <>
      <div className="flex w-full max-h-screen space-x-2">
        <div className="fixed overflow-hidden">
          <Sidebar activeTab={activeTab} onTabClick={handleClick} />
        </div>
        <div className="ml-36 py-4 pr-4 w-full">
          {tab === "dashboard" && <Dashboard />}
          {tab === "schedule" && <Schedule />}
          {tab === "patients" && <Patients />}
          {tab === "medicines" && <Medicines />}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
