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
    <>
      <div className="">
        <h2 className="text-xl font-bold mb-2">Today's Patients</h2>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-200 rounded-md p-3 h-[350px] overflow-y-auto space-y-2">
              {TodayPatientsTypes.map((patient, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedPatient(patient)}
                  className={`flex justify-between items-center p-2 rounded-md cursor-pointer transition-all 
              ${
                selectedPatient?.name === patient.name
                  ? "bg-slate-400 text-white"
                  : "hover:bg-slate-300"
              }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={patient.image}
                      alt={patient.name}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold">{patient.name}</p>
                      <p className="text-xs text-gray-600">{patient.note}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700">
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
          <div className="lg:w-1/2 w-full">
            {selectedPatient ? (
              <div className="bg-white rounded-md shadow-md p-4 h-[350px] overflow-y-auto">
                <PatientsInfo patient={selectedPatient} />
              </div>
            ) : (
              <div className="bg-gray-100 rounded-md p-4 h-[350px] flex items-center justify-center">
                <p className="text-sm text-gray-500">
                  Select a patient to view details.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayPatients;
