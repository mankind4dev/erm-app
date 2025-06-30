import type { ReactNode } from "react";  
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";

type prop = {
  children: ReactNode;
};

const indexPage = ({ children }: prop) => {
  return (
    <>
      <div className=" ">
        {/* <DashboardHome  />
        {children}   */}
      </div>
    </>
  );
};

export default indexPage;
