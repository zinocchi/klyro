import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-monday-snow/90 backdrop-blur-md border-b border-monday-fog/40">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo with Prism Accent */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8181ff] via-[#33dbdb] to-[#fc527d] p-[2px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center font-bold text-monday-violet text-lg">
              W
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-monday-ink">
            work<span className="text-monday-violet">flow</span>
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-monday-slate">
          <div className="flex items-center gap-1 cursor-pointer hover:text-monday-ink transition-colors">
            <span>Product</span>
            <ChevronDown className="w-4 h-4 opacity-70" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-monday-ink transition-colors">
            <span>Solutions</span>
            <ChevronDown className="w-4 h-4 opacity-70" />
          </div>
          <a href="#features" className="hover:text-monday-ink transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-monday-ink transition-colors">
            Pricing
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-5 py-2.5 text-sm font-medium text-monday-slate hover:text-monday-ink transition-colors"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-pill bg-monday-violet text-white text-sm font-medium transition-all duration-300 hover:bg-[#5252ea] hover:shadow-monday-glow hover:translate-y-[-1px] active:translate-y-[0px]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </header>
  );
};