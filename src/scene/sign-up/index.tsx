import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../../utils/redux/user/userSLice";
import { useAppDispatch } from "../../utils/redux/store";

const URL = import.meta.env.VITE_PUBLIC_API_BASE_URL;

const signUpSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one special character (!@#$%^&*)"
    ),
  role: z.enum(["ADMIN", "USER"], {
    errorMap: () => ({ message: "Role is required" }),
  }),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      dispatch(signInStart());
      // const response = await axios.post(`https://erm-backend.onrender.com/api/signup`, data);
      const response = await axios.post(`${URL}/api/signup`, data);
      console.log(response.data);

      if (response.status === 201 || response.status === 200) {
        dispatch(signInSuccess(response.data));
        navigate("/sign-in");
      } else {
        setErrorMessage("Sign Up failed, Try again later.");
        dispatch(
          signInFailure("Unexpected error when sign up, Please try again")
        );
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        "An unknown error occurred.";

      setErrorMessage(message);
      dispatch(signInFailure(message));
    }
  };

  return (
    <>
      <div className="flex items-center justify-center  min-h-screen px-2">
        <div className="flex flex-col w-full md:w-2/5 justify-center bg-white p-4 shadow-md rounded-md">
          <h2 className="flex self-start text-2xl font-bold mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="flex flex-col justify-start">
              <label className="self-start font-medium">Full Name</label>
              <input
                type="text"
                {...register("fullName")}
                className="w-full border outline-none px-2 py-2 rounded"
              />
              {errors.fullName && (
                <p className="self-start text-red-600 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col justify-start">
              <label className="self-start font-medium">Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-full border outline-none px-2 py-2 rounded"
              />
              {errors.email && (
                <p className="self-start text-red-600 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col justify-start">
              <label className="self-start font-medium">Password</label>
              <input
                type="password"
                {...register("password")}
                className="w-full border outline-none px-2 py-2 rounded"
              />
              {errors.password && (
                <p className="self-start text-red-600 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex flex-col justify-start">
              <label className="self-start font-medium">Role</label>
              <select
                {...register("role")}
                className="w-full border outline-none px-2 py-2 rounded"
              >
                <option value="">Select role</option>
                <option value="ADMIN">Admin</option>
                <option value="USER">User</option>
              </select>
              {errors.role && (
                <p className="self-start text-red-600 text-sm">
                  {errors.role.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          <p className="text-red-300 p-2 rounded">{errorMessage}</p>
          <div className="flex items-center space-x-2 mt-1">
            <p className="text-sm">Already have an account?</p>
            <Link to="/sign-in" className="hover:underline block text-sm">
              Sign in here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
