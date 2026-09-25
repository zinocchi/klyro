import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DEPARTMENTS_DATA } from "../constants/landingData";
import { HeroShowcase } from "./HeroShowcase";

export const HeroSection: React.FC = () => {
  const [selectedDeptId, setSelectedDeptId] = useState<string>("marketing");
  const currentDept =
    DEPARTMENTS_DATA[selectedDeptId] || DEPARTMENTS_DATA.marketing;

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-klyro-canvas">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Headline & Actionable Pills */}
          <div className="lg:col-span-6 space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-klyro-blue/10 text-klyro-blue text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-klyro-turquoise animate-pulse" />
                Next-Gen Kanban Workspace
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-[58px] font-bold tracking-tight text-klyro-dark leading-[1.12]">
                People and workflows{" "}
                <span className="bg-gradient-to-r from-klyro-blue via-[#6366f1] to-klyro-turquoise bg-clip-text text-transparent">
                  moving as one.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-klyro-slate font-normal max-w-lg leading-relaxed">
                The visual workspace where fast-moving teams organize boards,
                deliver tasks, and achieve clarity without friction.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {Object.values(DEPARTMENTS_DATA).map((dept) => {
                const isActive = selectedDeptId === dept.id;

                return (
                  <motion.button
                    layout
                    key={dept.id}
                    onClick={() => setSelectedDeptId(isActive ? "" : dept.id)}
                    className={`relative inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 select-none ${
                      isActive
                        ? "text-monday-violet bg-monday-lavender border border-transparent"
                        : "text-klyro-slate bg-white border border-klyro-mist hover:bg-slate-100 hover:border-slate-200"
                    }`}>
                    <div className="relative z-10 flex items-center">
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            initial={{
                              scale: 0,
                              opacity: 0,
                              width: 0,
                              marginRight: 0,
                            }}
                            animate={{
                              scale: 1,
                              opacity: 1,
                              width: "auto",
                              marginRight: 6,
                            }}
                            exit={{
                              scale: 0,
                              opacity: 0,
                              width: 0,
                              marginRight: 0,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                            className="overflow-hidden inline-flex items-center">
                            {/* Desain centang baru: Background bulat solid, icon putih */}
                            <div className="flex items-center justify-center w-4 h-4 rounded-full bg-monday-violet text-white shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          </motion.span>
                        )}
                      </AnimatePresence>

                      <span>{dept.label}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="/register"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-pill bg-klyro-blue text-white text-base font-semibold shadow-klyro-glow transition-all duration-200 active:scale-95">
                  <span>Get Started Free</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>

                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-pill border border-klyro-dark/20 text-klyro-dark text-base font-semibold transition-all duration-200 hover:border-klyro-slate hover:bg-slate-50 hover:shadow-sm active:scale-95">
                  <span>Explore Boards</span>
                </Link>
              </div>

              {/* Sub-label guarantee */}
              <p className="text-xs text-klyro-slate flex items-center gap-2">
                <span>✦ No credit card required</span>
                <span>•</span>
                <span>Instant team setup</span>
              </p>
            </div>
          </div>

          {/* Right Column: Showcase */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <HeroShowcase
              currentDept={currentDept}
              isInitialMarketing={selectedDeptId === "marketing"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
