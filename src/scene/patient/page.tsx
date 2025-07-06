import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

const emergencyContactSchema = z.object({
  fullName: z.string().min(1, "Required"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  email: z.string().email("Invalid email"),
  relationship: z.string().min(1, "Relationship is required"),
});

const physicalInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  diagnosis: z.string().min(1, "Diagnosis is required"),
  phone: z.string().min(10, "Phone is required"),
  address: z.string().min(1, "Address is required"),
  notes: z.string().min(1, "Notes are required"),
});

const patientSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  gender: z.enum(["Male", "Female", "Other"], {
    errorMap: () => ({ message: "Gender is required" }),
  }),
  phoneNumber: z.string().min(10, "Phone number is required"),
  dateOfBirth: z.string().min(1, "Blood type is required"),
  bloodType: z.string().min(1, "Blood type is required"),
  email: z.string().email("Invalid email"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  emergencyContacts: z.array(emergencyContactSchema),
  physicalInfo: z.array(physicalInfoSchema),
});

type PatientFormData = z.infer<typeof patientSchema>;

const AddPatient = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PatientFormData>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      emergencyContacts: [
        { fullName: "", phoneNumber: "", email: "", relationship: "" },
      ],
      physicalInfo: [
        { name: "", diagnosis: "", phone: "", address: "", notes: "" },
      ],
    },
  });

  const { fields: emergencyFields, append: appendEmergency } = useFieldArray({
    control,
    name: "emergencyContacts",
  });

  const { fields: physicalFields, append: appendPhysical } = useFieldArray({
    control,
    name: "physicalInfo",
  });

  const onSubmit = async (data: PatientFormData) => {
    try {
      const response = await axios.post("/api/patient", data);
      alert("Patient added successfully");
      console.log(response.data);
    } catch (error: any) {
      console.error(
        "Error adding patient:",
        error?.response?.data || error.message
      );
    }
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col  w-full lg:max-w-6xl p-1  lg:p-4 bg-white lg:shadow lg:rounded">
          <h2 className="self-start text-2xl font-bold space-y-3">
            Add New Patient
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col justify-start">
                <label className="self-start">First Name</label>
                <input {...register("firstName")} className="input" />
                {errors.firstName && (
                  <p className="text-red-500 self-start text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-start">
                <label className="self-start">Last Name</label>
                <input {...register("lastName")} className="input" />
                {errors.lastName && (
                  <p className="text-red-500 self-start text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-start">
                <label className="self-start">Gender</label>
                <select {...register("gender")} className="input">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 self-start text-sm">
                    {errors.gender.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-start">
                <label className="self-start">Date of Birth</label>
                <input
                  type="date"
                  {...register("dateOfBirth")}
                  className="input"
                />
                {errors.dateOfBirth && (
                  <p className="text-red-500 self-start text-sm">
                    {errors.dateOfBirth.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-start">
                <label className="self-start">Phone Number</label>
                <input {...register("phoneNumber")} className="input" />
                {errors.phoneNumber && (
                  <p className="text-red-500 self-start text-sm">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-start">
                <label className="self-start">Email</label>
                <input {...register("email")} className="input" />
                {errors.email && (
                  <p className="text-red-500 self-start text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-start">
                <label className="self-start">Blood Type</label>
                <input {...register("bloodType")} className="input" />
                {errors.bloodType && (
                  <p className="text-red-500 self-start text-sm">
                    {errors.bloodType.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-start">
                <label className="self-start">Address</label>
                <input {...register("address")} className="input" />
                {errors.address && (
                  <p className="text-red-500 self-start text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-start">
                <label className="self-start">City</label>
                <input {...register("city")} className="input" />
                {errors.city && (
                  <p className="text-red-500 self-start text-sm">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-start">
                <label className="self-start">State</label>
                <input {...register("state")} className="input" />
                {errors.state && (
                  <p className="text-red-500 self-start text-sm">
                    {errors.state.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-start">
                <label className="self-start">Zip Code</label>
                <input {...register("zipCode")} className="input" />
                {errors.zipCode && (
                  <p className="text-red-500 self-start text-sm">
                    {errors.zipCode.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-sm whitespace-nowrap">
                  Emergency Contacts
                </h5>
                <button
                  type="button"
                  onClick={() =>
                    appendEmergency({
                      fullName: "",
                      phoneNumber: "",
                      email: "",
                      relationship: "",
                    })
                  }
                  className="flex items-center  text-sm text-green-600 hover:text-green-500 whitespace-nowrap"
                >
                  <FaPlus className="mr-1" /> Add
                </button>
              </div>

              {emergencyFields.map((field, index) => (
                <div
                  key={field.id}
                  className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4"
                >
                  <input
                    {...register(`emergencyContacts.${index}.fullName`)}
                    placeholder="Full Name"
                    className="input"
                  />
                  <input
                    {...register(`emergencyContacts.${index}.phoneNumber`)}
                    placeholder="Phone"
                    className="input"
                  />
                  <input
                    {...register(`emergencyContacts.${index}.email`)}
                    placeholder="Email"
                    className="input"
                  />
                  <select
                    {...register(`emergencyContacts.${index}.relationship`)}
                    className="input"
                  >
                    <option value="">Select Relationship</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Sister">Sister</option>
                    <option value="Brother">Brother</option>
                    <option value="Friend">Friend</option>
                    <option value="Colleague">Colleague</option>
                    <option value="Uncle">Uncle</option>
                  </select>
                </div>
              ))}
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-sm">Physical Information</h5>
                <button
                  type="button"
                  onClick={() =>
                    appendPhysical({
                      name: "",
                      diagnosis: "",
                      phone: "",
                      address: "",
                      notes: "",
                    })
                  }
                  className="flex items-center  text-sm text-green-600 hover:text-green-500 whitespace-nowrap"
                >
                  <FaPlus className="mr-1" /> Add
                </button>
              </div>

              {physicalFields.map((field, index) => (
                <div
                  key={field.id}
                  className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4"
                >
                  <input
                    {...register(`physicalInfo.${index}.name`)}
                    placeholder="Name"
                    className="input"
                  />
                  <input
                    {...register(`physicalInfo.${index}.diagnosis`)}
                    placeholder="Diagnosis"
                    className="input"
                  />
                  <input
                    {...register(`physicalInfo.${index}.phone`)}
                    placeholder="Phone"
                    className="input"
                  />
                  <input
                    {...register(`physicalInfo.${index}.address`)}
                    placeholder="Address"
                    className="input"
                  />
                  <input
                    {...register(`physicalInfo.${index}.notes`)}
                    placeholder="Notes"
                    className="input"
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="flex  bg-green-600 text-white py-2 px-4 rounded mt-4 cursor-pointer hover:bg-green-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Add Patient"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPatient;
