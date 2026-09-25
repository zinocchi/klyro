import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import klyroLogo from "@/assets/Klyro-brand-pack/LOGO.svg";
import { registerSchema, RegisterFormInputs } from "../schemas/auth.schema";
import { useRegister } from "../api/authHooks";

export const RegisterPage: React.FC = () => {
  const { mutate: registerUser, isPending, error } = useRegister();

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-klyro-canvas p-6">
      <div className="w-full max-w-[400px] bg-white rounded-3xl p-8 border border-klyro-mist shadow-xl">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <img
              src={klyroLogo}
              alt="Klyro Logo"
              className="h-8 w-auto transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-bold tracking-tight text-klyro-dark">
              Klyro.
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-klyro-dark">
            Create an account
          </h2>
          <p className="text-sm text-klyro-slate mt-1">
            Start your free workspace
          </p>
        </div>

        {/* Global Error Banner */}
        {error && (
          <div className="mb-6 p-3 rounded-xl bg-rose-50 border border-rose-200 text-sm text-rose-600 font-medium text-center">
            {(error as any)?.message ||
              "Gagal melakukan pendaftaran. Silakan coba lagi."}
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
            <input
              type="password"
              {...register("password")}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.password
                  ? "border-rose-500 focus:ring-rose-200"
                  : "border-klyro-mist focus:border-klyro-blue focus:ring-klyro-blue/20"
              } bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 transition-all text-sm`}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-rose-500 text-xs mt-1.5 font-medium">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full mt-2 py-3 px-4 rounded-xl bg-klyro-blue text-white text-sm font-bold shadow-klyro-glow hover:bg-[#4338ca] active:scale-[0.98] transition-all disabled:opacity-70 flex justify-center items-center gap-2">
            {isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-klyro-slate mt-8 font-medium">
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
