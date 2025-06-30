import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "../../utils/redux/store";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../../utils/redux/user/userSLice";

const signInSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one special character (!@#$%^&*)"
    ),
});

type SignInFormData = z.infer<typeof signInSchema>;

const SignIn = () => {
  const router = useNavigate();
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      dispatch(signInStart());
      const response = await axios.post("/api/auth/signin", data);
      console.log(response.data);
      if (response?.data?.role?.toLowerCase() === "ADMIN") {
        dispatch(signInSuccess(response.data));
        router("/dashboard");
      } else {
        setErrorMessage("Only the ADMIN can login");
        dispatch(signInFailure("Only the ADMIN can sign in. Please"));
      }
    } catch (error: any) {
      setErrorMessage(error?.response?.data || error.message);
      dispatch(signInFailure(errorMessage));
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="flex flex-col w-full md:w-2/4 bg-white shadow-md rounded-md p-2">
          <h2 className="flex self-start text-2xl font-bold mb-6">Sign In</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full space-y-4"
          >
            <div className="flex flex-col justify-start">
              <label className="self-start font-medium">Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-full border outline-none px-3 py-2 rounded"
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
                className="w-full border outline-none px-3 py-2 rounded"
              />
              {errors.password && (
                <p className="self-start text-red-600 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <p className="text-red-300 p-2">{errorMessage}</p>
          <div className="flex items-center justify-start space-x-2 my-2">
            <p>Don't have an account?</p>
            <Link to="/sign-up" className="hover:underline block text-sm">
              Sign in here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
