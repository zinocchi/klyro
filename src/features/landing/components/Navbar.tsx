import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import klyroLogo from "@/assets/Klyro-brand-pack/LOGO.svg";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-klyro-mist/60 transition-all">
      <div className="max-w-[1240px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo Klyro - Class yang tabrakan udah gw rapihin */}
        <Link to="/" className="flex items-center group focus:outline-none">
          <img
            src={klyroLogo}
            alt="Klyro Logo"
            className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
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
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-pill border border-klyro-dark/20 text-klyro-dark text-base font-semibold hover:border-klyro-dark hover:bg-white transition-all duration-200">
            Log in
          </Link>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-pill bg-klyro-blue text-white text-sm font-medium">
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};