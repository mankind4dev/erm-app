import { FaPhone } from "react-icons/fa";
import type { TodayTypes } from "../../types/types";
import { IoMdDocument } from "react-icons/io";

const PatientsInfo = ({ patient }: { patient: TodayTypes }) => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-2">
          <div className="rounded-full p-[2px] bg-gray-100">
            <img
              src={patient.image}
              alt={patient.name}
              className="object-center w-20 h-20 rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-md font-semibold">{patient.name}</p>
            <div className="flex space-x-1">
              <span className="text-sm w-4/6 text-[#282727]">
                {patient.address} {patient.zipCode}
              </span>
              <span className="text-sm"></span>
            </div>
          </div>
        </div>
        <table className="table-auto w-full my-2">
          <thead className="">
            <tr>
              <th className="px-4 py-2 text-left">D.O.B</th>
              <th className="px-4 py-2 text-left">Sex</th>
              <th className="px-4 py-2 text-left">Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">
                {patient.dob
                  ? new Date(patient.dob).toLocaleDateString()
                  : "Not provided"}
              </td>
              <td className="px-4 py-2">{patient.sext || "Not provided"}</td>
              <td className="px-4 py-2">{patient.weight || "Not provided"}</td>
            </tr>
          </tbody>
        </table>

        <table className="table-auto w-full my-1">
          <thead className="">
            <tr>
              <th className="px-4 py-2 text-left">Height</th>
              <th className="px-4 py-2 text-left">Last Appointment</th>
              <th className="px-4 py-2 text-left">Date Registered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">{patient.height || "Not provided"}</td>
              <td className="px-4 py-2">
                {patient.lastApoint || "Not provided"}
              </td>
              <td className="px-4 py-2">
                {patient.registerDate
                  ? new Date(patient.registerDate).toLocaleDateString()
                  : "Not provided"}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex items-center space-x-4">
          <div className="flex space-x-3 items-center p-1 rounded-lg  bg-slate-300">
            <FaPhone className="rotate-90" />
            <p className="">{patient.phoneNumber}</p>
          </div>
          <div className="flex space-x-3 items-center p-1 rounded-lg  bg-slate-300">
            <IoMdDocument className="rotate-90" />
            <p className="">{patient.phoneNumber}</p>
          </div>
           
        </div>
      </div> 
    </>
  );
};

export default PatientsInfo;
