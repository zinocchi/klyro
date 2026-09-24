import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  AtSign,
  Paperclip,
  LayoutGrid,
  CheckCircle2,
} from "lucide-react";
import type { DepartmentData } from "../constants/landingData";

interface HeroShowcaseProps {
  currentDept: DepartmentData;
  isInitialMarketing: boolean;
}

export const HeroShowcase: React.FC<HeroShowcaseProps> = ({
  currentDept,
  isInitialMarketing,
}) => {
  return (
    <div className="relative w-full max-w-[560px] mx-auto min-h-[480px] flex items-center justify-center">
      {/* Dynamic Background Glow - Hybrid Blue & Turquoise */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-klyro-blue/15 via-klyro-turquoise/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentDept.id}
          initial={
            isInitialMarketing
              ? { opacity: 0, scale: 0.85, y: 40 }
              : { opacity: 0, x: 25, scale: 0.95 }
          }
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -25, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 24,
            duration: 0.5,
          }}
          className="relative w-full flex items-center justify-center">
          {/* 1. Left Background Card (Floating Assistant) */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -8 }}
            animate={{ opacity: 0.85, x: -90, y: -20, rotate: -6 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.05, opacity: 1, zIndex: 30 }}
            className="absolute hidden sm:flex left-1/2 -translate-x-1/2 w-[220px] bg-white/90 backdrop-blur-md rounded-[20px] p-3 border border-klyro-mist shadow-lg flex-col gap-2 cursor-pointer z-0">
            <div className="h-28 w-full rounded-xl overflow-hidden bg-slate-100">
              <img
                src={currentDept.leftCard.avatar}
                alt={currentDept.leftCard.name}
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="bg-white rounded-xl p-2.5 shadow-sm border border-slate-100">
              <p className="text-[12px] font-bold text-klyro-dark truncate">
                {currentDept.leftCard.name}
              </p>
              <p className="text-[10px] text-klyro-turquoise font-semibold mt-0.5">
                {currentDept.leftCard.metric}
              </p>
            </div>
          </motion.div>

          {/* 2. Right Background Card (Floating Assistant) */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 8 }}
            animate={{ opacity: 0.85, x: 90, y: -15, rotate: 6 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, opacity: 1, zIndex: 30 }}
            className="absolute hidden sm:flex left-1/2 -translate-x-1/2 w-[220px] bg-white/90 backdrop-blur-md rounded-[20px] p-3 border border-klyro-mist shadow-lg flex-col gap-2 cursor-pointer z-0">
            <div className="h-28 w-full rounded-xl overflow-hidden bg-slate-100">
              <img
                src={currentDept.rightCard.avatar}
                alt={currentDept.rightCard.name}
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="bg-white rounded-xl p-2.5 shadow-sm border border-slate-100">
              <p className="text-[12px] font-bold text-klyro-dark truncate">
                {currentDept.rightCard.name}
              </p>
              <p className="text-[10px] text-klyro-blue font-semibold mt-0.5">
                {currentDept.rightCard.metric}
              </p>
            </div>
          </motion.div>

          {/* 3. Center Hero Card (Team Lead Focus) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full max-w-[340px] bg-white rounded-card border border-klyro-mist shadow-klyro-card p-4 z-10">
            {/* Lead Tag Bar */}
            <div className="flex items-center justify-between pb-3">
              <div>
                <h4 className="text-sm font-bold text-klyro-dark tracking-tight">
                  {currentDept.lead.name}
                </h4>
                <p className="text-[11px] text-klyro-slate font-medium">
                  {currentDept.lead.role}
                </p>
              </div>
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-klyro-turquoise border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                {currentDept.accentBadge}
              </span>
            </div>

            {/* Lead Portrait Photo */}
            <div className="relative h-[280px] w-full rounded-[18px] overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200">
              <img
                src={currentDept.lead.image}
                alt={currentDept.lead.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Action/Prompt Box at the Bottom */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.25,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="mt-3 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-klyro-mist/80 shadow-md space-y-2.5">
              <p className="text-xs text-klyro-dark font-medium leading-relaxed">
                "{currentDept.promptText}"
              </p>

              {/* Bottom toolbar */}
              <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                <div className="flex items-center gap-2 text-klyro-slate">
                  <button className="p-1 rounded-md hover:bg-slate-100 hover:text-klyro-blue transition-colors">
                    <LayoutGrid className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1 rounded-md hover:bg-slate-100 hover:text-klyro-blue transition-colors">
                    <Paperclip className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1 rounded-md hover:bg-slate-100 hover:text-klyro-blue transition-colors">
                    <AtSign className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button className="w-7 h-7 rounded-full bg-klyro-dark text-white flex items-center justify-center hover:bg-klyro-blue hover:scale-105 active:scale-95 transition-all shadow-sm">
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
