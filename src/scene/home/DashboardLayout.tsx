"use client";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import useMediaQuery from "../../hooks/useMediaQuery"; 

const DashboardLayout = () => {
  const location = useLocation();
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname.split("/")[2] || "dashboard";
    setActiveTab(currentPath);
  }, [location.pathname]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (isSmallScreen) setSidebarOpen(false);  
  };

  return (
    <div className="flex w-full max-h-screen relative"> 
      <div className="hidden lg:flex fixed left-0 top-0 h-screen z-20">
        <Sidebar activeTab={activeTab} onTabClick={handleTabClick} onClose={() => {}} />
      </div> 
      {isSmallScreen && isSidebarOpen && (
        <div className="fixed top-0 left-0 z-40 h-screen bg-white shadow-md">
          <Sidebar
            activeTab={activeTab}
            onTabClick={handleTabClick}
            onClose={() => setSidebarOpen(false)} 
          />
        </div>
      )} 
      <main className="w-full lg:ml-[130px]">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
