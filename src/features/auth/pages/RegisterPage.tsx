import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import klyroLogo from "@/assets/Klyro-brand-pack/logo-h.svg";
import {
  registerSchema,
  type RegisterFormInputs,
} from "../schemas/auth.schema";
import { useRegister, useGoogleAuth } from "../api/authHooks";

export const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: registerUser, isPending, error } = useRegister();
  const { mutate: googleAuth } = useGoogleAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormInputs) => {
    registerUser(data);
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      googleAuth(tokenResponse.access_token);
    },
    onError: () => console.error("Google Signup Failed"),
  });

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-klyro-canvas p-4 sm:p-6">
      <div className="w-full max-w-[400px] bg-white rounded-3xl p-6 sm:p-7 border border-klyro-mist shadow-xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <Link to="/" className="flex items-center justify-center mb-6 group">
            <img
              src={klyroLogo}
              alt="Klyro Logo"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <h2 className="text-2xl font-bold text-klyro-dark">
            Create an account
          </h2>
          <p className="text-sm text-klyro-slate mt-1">
            Start organizing your workflows today
          </p>
        </div>
        {/* Global Error Banner */}
        {error && (
          <div className="mb-6 p-3 rounded-xl bg-rose-50 border border-rose-200 text-sm text-rose-600 font-medium text-center">
            {(error as any)?.message ||
              "Gagal membuat akun. Silakan coba lagi."}
          </div>
        )}
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-klyro-dark mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              {...register("name")}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.name
                  ? "border-rose-500 focus:ring-rose-200"
                  : "border-klyro-mist focus:border-klyro-blue focus:ring-klyro-blue/20"
              } bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 transition-all text-sm`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-rose-500 text-xs mt-1.5 font-medium">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-klyro-dark mb-1.5">
              Email address
            </label>
            <input
              type="email"
              {...register("email")}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.email
                  ? "border-rose-500 focus:ring-rose-200"
                  : "border-klyro-mist focus:border-klyro-blue focus:ring-klyro-blue/20"
              } bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 transition-all text-sm`}
              placeholder="name@company.com"
            />
            {errors.email && (
              <p className="text-rose-500 text-xs mt-1.5 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-klyro-dark mb-1.5">
              Password
            </label>
            {/* Input Password dengan Toggle Eye Icon */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className={`w-full px-4 py-3 pr-12 rounded-xl border ${
                  errors.password
                    ? "border-rose-500 focus:ring-rose-200"
                    : "border-klyro-mist focus:border-klyro-blue focus:ring-klyro-blue/20"
                } bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 transition-all text-sm`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-klyro-slate hover:text-klyro-dark transition-colors focus:outline-none">
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-rose-500 text-xs mt-1.5 font-medium">
                {errors.password.message}
              </p>
            )}
            <p className="text-xs text-klyro-slate mt-2">
              Must be at least 8 characters.
            </p>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full mt-4 py-3 px-4 rounded-xl bg-klyro-blue text-white text-sm font-bold shadow-klyro-glow hover:bg-[#4338ca] active:scale-[0.98] transition-all disabled:opacity-70 flex justify-center items-center gap-2">
            {isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-klyro-mist" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-3 text-klyro-slate font-medium">
              Or sign up with
            </span>
          </div>
        </div>
        {/* Custom Google Signup Button */}
        <div className="flex justify-center w-full mb-6">
          <button
            type="button"
            onClick={() => loginWithGoogle()}
            className="w-full py-3 px-4 rounded-xl bg-white border border-klyro-mist text-klyro-dark text-sm font-bold shadow-sm hover:bg-slate-50 hover:border-klyro-slate active:scale-[0.98] transition-all flex justify-center items-center gap-2">
            <FcGoogle className="w-5 h-5" />
            <span>Sign up with Google</span>
          </button>
        </div>
        <p className="text-center text-sm text-klyro-slate font-medium">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-klyro-blue font-bold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};
