import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import klyroLogo from "@/assets/Klyro-brand-pack/LOGO.svg";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-klyro-mist/60 transition-all">
      <div className="max-w-[1240px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center group focus:outline-none">
          <img
            src={klyroLogo}
            alt="Klyro Logo"
            className="h-24 md:h-28 lg:h-32 w-auto transition-all duration-300 hover:scale-105"
          />
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-klyro-slate">
          <div className="flex items-center gap-1 cursor-pointer hover:text-klyro-blue transition-colors">
            <span>Platform</span>
            <ChevronDown className="w-4 h-4 opacity-70" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-klyro-blue transition-colors">
            <span>Solutions</span>
            <ChevronDown className="w-4 h-4 opacity-70" />
          </div>
          <a
            href="#features"
            className="hover:text-klyro-blue transition-colors">
            Features
          </a>
          <a
            href="#pricing"
            className="hover:text-klyro-blue transition-colors">
            Pricing
          </a>
        </nav>

        {/* Right CTA Actions - Hover button biru udah diilangin */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-5 py-2 rounded-pill border border-klyro-dark/20 text-klyro-dark text-base font-semibold transition-all duration-200 hover:border-klyro-slate hover:bg-slate-50 hover:shadow-sm active:scale-95">
            Log in
          </Link>

          <Link
            to="/register"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-pill bg-klyro-blue text-white text-sm font-medium transition-all duration-200 active:scale-95">
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </header>
  );
};
