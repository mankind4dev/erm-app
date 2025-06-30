import { FaPhone } from "react-icons/fa";
import type { TodayTypes } from "../../types/types";

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
          <div className="flex flex-col ">
            <p className="text-md font-semibold">{patient.name}</p>
            <div className="flex space-x-1">
              <span className="text-sm w-4/6">
                {patient.address} {patient.zipCode}
              </span>
              <span className="text-sm"></span>
            </div>
          </div>
        </div>
        <table className="table-auto w-full my-4">
          <thead className="bg-gray-100">
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
          <thead className="bg-gray-100">
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

        <div className="w-5/12 items-center space-x-2 p-2 bg-amber-300">
          <div className="bg-amber-50">
            <FaPhone className="" />
            <p className="">{patient.phoneNumber}</p>
          </div>
        </div>
      </div>

      {/* <div className="p-4 border rounded shadow-sm">
      <img src={patient.image} alt={patient.name} className="w-32 h-32 rounded-full object-cover mb-4" />
      <h2 className="text-xl font-bold">{patient.name}</h2>
      <p><strong>Note:</strong> {patient.note}</p>
      <p><strong>Sex:</strong> {patient.sext}</p>
      <p><strong>Phone:</strong> {patient.phoneNumber}</p>
      <p><strong>Height:</strong> {patient.height}</p>
      <p><strong>Weight:</strong> {patient.weight}</p>
      <p><strong>Date of Birth:</strong> {patient.dob?.toLocaleDateString()}</p>
      <p><strong>Last Appointment:</strong> {patient.lastApoint}</p>
      <p><strong>Registered:</strong> {patient.registerDate?.toLocaleDateString()}</p>
      <p><strong>Time:</strong> {new Date(patient.time).toLocaleString()}</p>
    </div> */}
    </>
  );
};

export default PatientsInfo;
