import { useForm } from "react-hook-form";
import { useState } from "react";

type RegisterForm = {
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>();

  const onSubmit = async (data: RegisterForm) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Data", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-300 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Glassmorphism container */}
        <div className="backdrop-blur-lg bg-white/80 rounded-3xl shadow-2xl border border-white/20 p-8 transform transition-all duration-300 hover:shadow-3xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Create Account
            </h2>
            <p className="text-gray-600">Join us and start your journey</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Username Field */}
            <div className="group">
              <label
                htmlFor="userName"
                className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-purple-600"
              >
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="userName"
                  placeholder="Enter your username"
                  className={`w-full px-4 py-3 bg-gray-50/50 border-2 rounded-xl transition-all duration-300 outline-none placeholder-gray-400 ${
                    errors.userName
                      ? "border-red-300 focus:border-red-500 bg-red-50/50"
                      : "border-gray-200 focus:border-purple-500 focus:bg-white/80"
                  } hover:border-gray-300 focus:shadow-lg focus:scale-[1.02]`}
                  {...register("userName", { required: "Username is required" })}
                />
              </div>
              {errors.userName && (
                <p className="text-red-500 text-sm mt-2 animate-pulse flex items-center">
                  {errors.userName.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-purple-600"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 bg-gray-50/50 border-2 rounded-xl transition-all duration-300 outline-none placeholder-gray-400 ${
                    errors.email
                      ? "border-red-300 focus:border-red-500 bg-red-50/50"
                      : "border-gray-200 focus:border-purple-500 focus:bg-white/80"
                  } hover:border-gray-300 focus:shadow-lg focus:scale-[1.02]`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-2 animate-pulse flex items-center">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="group">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-purple-600"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Create a password"
                  className={`w-full px-4 py-3 bg-gray-50/50 border-2 rounded-xl transition-all duration-300 outline-none placeholder-gray-400 pr-12 ${
                    errors.password
                      ? "border-red-300 focus:border-red-500 bg-red-50/50"
                      : "border-gray-200 focus:border-purple-500 focus:bg-white/80"
                  } hover:border-gray-300 focus:shadow-lg focus:scale-[1.02]`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-purple-500 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-2 animate-pulse flex items-center">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Phone Number Field */}
            <div className="group">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-purple-600"
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-3 bg-gray-50/50 border-2 rounded-xl transition-all duration-300 outline-none placeholder-gray-400 ${
                    errors.phoneNumber
                      ? "border-red-300 focus:border-red-500 bg-red-50/50"
                      : "border-gray-200 focus:border-purple-500 focus:bg-white/80"
                  } hover:border-gray-300 focus:shadow-lg focus:scale-[1.02]`}
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: { value: /^[0-9]{10}$/, message: "Phone number must be 10 digits" },
                  })}
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-2 animate-pulse flex items-center">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-600 mt-6">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-purple-600 hover:text-purple-800 font-semibold hover:underline transition-colors"
              >
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

