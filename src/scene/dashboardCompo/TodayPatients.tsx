import { useState } from "react";
import type { TodayTypes } from "../../types/types";
import image1 from "/src/assets/doc.jpeg";
import PatientsInfo from "./PatientsInfo";

const TodayPatientsTypes: Array<TodayTypes> = [
  {
    name: "David Aregbe",
    image: image1,
    note: "Programmer",
    time: "ongoing",
    address:
      "Line 4, Third Avenue, King's Court, Jabi, Airport Road, FCT, Abuja, Nigeria.",
    zipCode: 113011,
    date: "19-02-2024",
    dob: new Date("2024-02-19").toISOString(),
    height: "189",
    lastApoint: "2024-02-01",
    registerDate: new Date("2024-02-01").toISOString(),
    weight: "75kg",
    sext: "Male",
    phoneNumber: 2349037273879,
  },
  {
    name: "Jane Doe",
    image: image1,
    note: "Designer",
    time: new Date(),
    address:
      "Line 4, Third Avenue, King's Court, Jabi, Airport Road, FCT, Abuja, Nigeria.",
    zipCode: 113011,
    date: "19-02-2024",
    dob: new Date("2024-02-19").toISOString(),
    height: "189",
    lastApoint: "2024-02-01",
    registerDate: new Date("2024-02-01").toISOString(),
    weight: "75kg",
    sext: "Male",
    phoneNumber: 2349037273879,
  },
  {
    name: "John Smith",
    image: image1,
    note: "Dentist",
    time: "2:30 PM",
    address:
      "Line 4, Third Avenue, King's Court, Jabi, Airport Road, FCT, Abuja, Nigeria.",
    zipCode: 113011,
    date: "19-02-2024",
    dob: new Date("2024-02-19").toISOString(),
    height: "189",
    lastApoint: "2024-02-01",
    registerDate: new Date("2024-02-01").toISOString(),
    weight: "75kg",
    sext: "Male",
    phoneNumber: 2349037273879,
  },
  {
    name: "John Ade",
    image: image1,
    note: "Dentist",
    time: "2:30 PM",
    address:
      "Line 4, Third Avenue, King's Court, Jabi, Airport Road, FCT, Abuja, Nigeria.",
    zipCode: 113011,
    date: "19-02-2024",
    dob: new Date("2024-02-19").toISOString(),
    height: "189",
    lastApoint: "2024-02-01",
    registerDate: new Date("2024-02-01").toISOString(),
    weight: "75kg",
    sext: "Male",
    phoneNumber: 2349037273879,
  },
  {
    name: "Sunday Smith",
    image: image1,
    note: "Dentist",
    time: "2:30 PM",
    address:
      "Line 4, Third Avenue, King's Court, Jabi, Airport Road, FCT, Abuja, Nigeria.",
    zipCode: 113011,
    date: "19-02-2024",
    dob: new Date("2024-02-19").toISOString(),
    height: "189",
    lastApoint: "2024-02-01",
    registerDate: new Date("2024-02-01").toISOString(),
    weight: "75kg",
    sext: "Male",
    phoneNumber: 2349037273879,
  },
  {
    name: "Adewumi Smith",
    image: image1,
    note: "Dentist",
    time: "2:30 PM",
    address:
      "Line 4, Third Avenue, King's Court, Jabi, Airport Road, FCT, Abuja, Nigeria.",
    zipCode: 113011,
    date: "19-02-2024",
    dob: new Date("2024-02-19").toISOString(),
    height: "189",
    lastApoint: "2024-02-01",
    registerDate: new Date("2024-02-01").toISOString(),
    weight: "75kg",
    sext: "Male",
    phoneNumber: 2349037273879,
  },
  {
    name: "John david",
    image: image1,
    note: "Dentist",
    time: "2:30 PM",
    address:
      "Line 4, Third Avenue, King's Court, Jabi, Airport Road, FCT, Abuja, Nigeria.",
    zipCode: 113011,
    date: "19-02-2024",
    dob: new Date("2024-02-19").toISOString(),
    height: "189",
    lastApoint: "2024-02-01",
    registerDate: new Date("2024-02-01").toISOString(),
    weight: "75kg",
    sext: "Male",
    phoneNumber: 2349037273879,
  },
  {
    name: "John Adeola",
    image: image1,
    note: "Dentist",
    time: "2:30 PM",
    address:
      "Line 4, Third Avenue, King's Court, Jabi, Airport Road, FCT, Abuja, Nigeria.",
    zipCode: 113011,
    date: "19-02-2024",
    dob: new Date("2024-02-19").toISOString(),
    height: "189",
    lastApoint: "2024-02-01",
    registerDate: new Date("2024-02-01").toISOString(),
    weight: "75kg",
    sext: "Male",
    phoneNumber: 2349037273879,
  },
  {
    name: "Aregbe Smith",
    image: image1,
    note: "Dentist",
    time: "2:30 PM",
    address:
      "Line 4, Third Avenue, King's Court, Jabi, Airport Road, FCT, Abuja, Nigeria.",
    zipCode: 113011,
    date: "19-02-2024",
    dob: new Date("2024-02-19").toISOString(),
    height: "189",
    lastApoint: "2024-02-01",
    registerDate: new Date("2024-02-01").toISOString(),
    weight: "75kg",
    sext: "Male",
    phoneNumber: 2349037273879,
  },
];

const TodayPatients = () => {
  const [selectedPatient, setSelectedPatient] = useState<TodayTypes | null>(
    TodayPatientsTypes.find((p) => p.time === "ongoing") ||
      TodayPatientsTypes[0]
  );

  return (
    <div className="flex space-x-3 h-[300px]">
      <div className="">
        <h2 className="text-xl font-bold mb-1">Today's Patients</h2>
        <div className="flex flex-col space-y-1 bg-slate-300 p-2 rounded-sm w-lg h-full overflow-auto">
          {TodayPatientsTypes.map((patient, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-1 rounded-sm cursor-pointer hover:bg-slate-400 ${
                selectedPatient?.name === patient.name ? "bg-slate-400" : ""
              }`}
              onClick={() => setSelectedPatient(patient)}
            >
              <div className="flex items-center space-x-2">
                <img
                  src={patient.image}
                  alt={patient.name}
                  className="w-10 h-10 object-center rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-[14px] font-semibold">{patient.name}</p>
                  <p className="text-[12px]">{patient.note}</p>
                </div>
              </div>
              <p className="text-sm">
                {typeof patient.time === "string"
                  ? patient.time
                  : new Intl.DateTimeFormat("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }).format(new Date(patient.time))}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        {selectedPatient ? (
          <>
            <div className="h-[350px] w-[100%] mt-4 bg-white px-4 py-2 rounded shadow">
              <PatientsInfo patient={selectedPatient} />
            </div>
          </>
        ) : (
          <p>Select a patient to view details.</p>
        )}
      </div>
    </div>
  );
};

export default TodayPatients;
