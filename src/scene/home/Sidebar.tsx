type Props = {
  onTabClick: (tab: string) => void;
};

const Sidebar = ({ onTabClick }: Props) => {
  return (
    <div className="flex flex-col justify-between items-center w-[130px] min-h-screen bg-slate-300 py-4 overflow-hidden">
      <div className="flex flex-col space-y-">
        <div className="flex flex-col items-center  my-6">
          <img src="/src/assets/doc.jpeg" alt="doc-image"  className="rounded-full object-center w-20 h-20"/>
          <p className="text-[13px] font-semibold">Dr. David</p>
          <p className="text-[10px]">Programmer</p>
        </div>
        <div className="flex flex-col items-start space-y-6"> 
        <button onClick={() => onTabClick("dashboard")}>Dashboard</button>
        <button onClick={() => onTabClick("schedule")}>Schedule</button>
        <button onClick={() => onTabClick("patients")}>Patients</button>
        <button onClick={() => onTabClick("medicines")}>Medicines</button>
        </div>
      </div>
      <div className="flex">
        <button>LogOut</button>
      </div>
    </div>
  );
};

export default Sidebar;
