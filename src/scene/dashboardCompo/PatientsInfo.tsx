import type { TodayTypes } from "../../types/types";

const PatientsInfo = ({ patient }: { patient: TodayTypes }) => {
  return (
    <>
      <div className="flex flex-col border shadow-md">
        <div className="flex space-x-2">
          <div className="flex ">
            <img src={patient.image} alt={patient.name} />
          </div>
          <div className="flex flex-col ">
            <p className="text-md font-semibold">{patient.name}</p>
            <div className="flex flex-col">
              <span className="text-sm"></span>
            </div>
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
