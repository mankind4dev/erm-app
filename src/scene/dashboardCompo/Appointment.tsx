import { FaPencil } from "react-icons/fa6";
import type { ApointmentTypes } from "../../types/types";
import image1 from "/src/assets/doc.jpeg";
import { FaRegTimesCircle } from "react-icons/fa";

 
const ApointmentTypes: Array<ApointmentTypes> = [
  {
    name: "David Aregbe",
    icon1: <FaRegTimesCircle />,
    icon2: <FaPencil />,
    image: image1,
    note: "Programmer",
    time: "ongoing",
  },
  {
    name: "Jane Doe",
    icon1: <FaRegTimesCircle />,
    icon2: <FaPencil />,
    image: image1,
    note: "Designer",
    time: new Date(),
  },
  {
    name: "John Smith",
    icon1: <FaPencil />,
    icon2: <FaPencil />,
    image: image1,
    note: "Dentist",
    time: "2:30 PM",
  },
  {
    name: "John Ade",
    icon1: <FaRegTimesCircle />,
    icon2: <FaPencil />,
    image: image1,
    note: "Dentist",
    time: "2:30 PM",
  },
  {
    name: "Sunday Smith",
    icon1: <FaRegTimesCircle />,
    icon2: <FaPencil />,
    image: image1,
    note: "Dentist",
    time: "2:30 PM",
  },
  {
    name: "Adewumi Smith",
    icon1: <FaRegTimesCircle />,
    icon2: <FaPencil />,
    image: image1,
    note: "Dentist",
    time: "2:30 PM",
  },
  {
    name: "John david",
    icon1: <FaRegTimesCircle />,
    icon2: <FaPencil />,
    image: image1,
    note: "Dentist",
    time: "2:30 PM",
  },
  {
    name: "John Adeola",
    icon1: <FaRegTimesCircle />,
    icon2: <FaPencil />,
    image: image1,
    note: "Dentist",
    time: "2:30 PM",
  },
  {
    name: "Aregbe Smith",
    icon1: <FaRegTimesCircle />,
    icon2: <FaPencil />,
    image: image1,
    note: "Dentist",
    time: "2:30 PM",
  },
];

const Appointment = () => {
  return (
    <>
      <div className="flex flex-col h-[250px] mt-8">
        <div className="h-full flex flex-col">
          <h2 className="text-md font-semibold mb-[3px]">
            Appointment Requests
          </h2>
          <div className="flex flex-col gap-1 bg-slate-200 px-2 py-1 rounded-sm flex-grow overflow-auto">
            {ApointmentTypes.map((apoint, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-1 rounded-sm cursor-pointer hover:bg-slate-400"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={apoint.image}
                    alt={apoint.name}
                    className="w-9 h-9 object-center rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="text-[14px] font-semibold">{apoint.name}</p>
                    <p className="text-[12px]">{apoint.note}</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button>{apoint.icon1}</button>
                  <button>{apoint.icon2}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
