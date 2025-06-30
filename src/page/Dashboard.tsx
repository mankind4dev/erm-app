import Appointment from "../scene/dashboardCompo/Appointment";
import DashboardHeader from "../scene/dashboardCompo/DashboardHeader";
import SubHeader from "../scene/dashboardCompo/SubHeader";
import TodayPatients from "../scene/dashboardCompo/TodayPatients";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col max-h-full space-y-2 overflow-y-hidden">
        <DashboardHeader />
        <div className="h-full  ">
          <SubHeader />
          <TodayPatients />
          <Appointment />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
