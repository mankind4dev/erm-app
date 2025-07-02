import Appointment from "../scene/dashboardCompo/Appointment";
import DashboardHeader from "../scene/dashboardCompo/DashboardHeader";
import SubHeader from "../scene/dashboardCompo/SubHeader";
import TodayPatients from "../scene/dashboardCompo/TodayPatients";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col max-h-full space-y-2 overflow-y-hidden px-1 py-2">
        <DashboardHeader />
        <div className="h-full w-full px-1">
          <SubHeader />
          <TodayPatients />
          <Appointment />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
