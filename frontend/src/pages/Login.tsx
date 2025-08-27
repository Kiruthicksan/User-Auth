import { useForm } from "react-hook-form";
import { useState } from "react";

type LoginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="backdrop-blur-lg bg-white/80 rounded-3xl shadow-2xl border border-white/20 p-8 transform transition-all duration-300 hover:shadow-3xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-300">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-indigo-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-3 bg-gray-50/50 border-2 rounded-xl transition-all duration-300 outline-none placeholder-gray-400 ${
                  errors.email
                    ? "border-red-300 focus:border-red-500 bg-red-50/50"
                    : "border-gray-200 focus:border-indigo-500 focus:bg-white/80"
                } hover:border-gray-300 focus:shadow-lg focus:scale-[1.02]`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2 animate-pulse">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="group relative">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-indigo-600"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className={`w-full px-4 py-3 bg-gray-50/50 border-2 rounded-xl transition-all duration-300 outline-none placeholder-gray-400 pr-12 ${
                  errors.password
                    ? "border-red-300 focus:border-red-500 bg-red-50/50"
                    : "border-gray-200 focus:border-indigo-500 focus:bg-white/80"
                } hover:border-gray-300 focus:shadow-lg focus:scale-[1.02]`}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                })}
              />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3/4 -translate-y-1/2 flex items-center text-gray-400 hover:text-indigo-500 transition-colors"
                tabIndex={-1}
            >
                {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7c1.657 0 3.216.41 4.5 1.125M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.061 4.061A9.969 9.969 0 0021 12c0-3-4-7-9-7-.795 0-1.568.074-2.313.213M3 3l18 18"
                        />
                    </svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 3-4 7-9 7s-9-4-9-7 4-7 9-7 9 4 9 7z"
                        />
                    </svg>
                )}
            </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-2 animate-pulse">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>

            <div className="text-center">
                <span className="text-gray-600 text-sm">
                    Don't have an account?{" "}
                    <a
                        href="/register"
                        className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors font-semibold"
                    >
                        Register
                    </a>
                </span>
            </div>

            {/* Social Login */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex justify-center items-center px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
              >
                Google
              </button>
              <button
                type="button"
                className="flex justify-center items-center px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
              >
                GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
