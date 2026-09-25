import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  GitBranch,
  Bell,
  MessageSquare,
  UserCheck,
  CalendarClock,
} from "lucide-react";

export const AutomationSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-klyro-canvas/30 border-t border-klyro-mist/40 overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 flex flex-col items-center">
        {/* Top Header */}
        <div className="text-center space-y-6 mb-16">
          <span className="text-sm font-semibold text-klyro-slate tracking-wide">
            Orchestrate workflows
          </span>
          <h2 className="text-[64px] md:text-[96px] font-bold tracking-tighter text-klyro-dark leading-[0.9]">
            Let work flow
          </h2>
          <div className="text-xl md:text-3xl font-medium text-klyro-dark flex flex-wrap items-center justify-center gap-x-3 gap-y-2 max-w-2xl mx-auto leading-tight">
            <span>Automate how work moves</span>
            <span>between</span>
            {/* Avatar Stack dummy */}
            <div className="flex items-center -space-x-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                className="w-9 h-9 rounded-full border-2 border-white relative z-30"
                alt="team"
              />
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
                className="w-9 h-9 rounded-full border-2 border-white relative z-20"
                alt="team"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                className="w-9 h-9 rounded-full border-2 border-white relative z-10"
                alt="team"
              />
            </div>
            <span>people</span>
            <span>and tools</span>
          </div>

          <div className="pt-6">
            <Link
              to="/register"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-pill bg-klyro-dark text-white text-[15px] font-semibold hover:bg-black transition-all duration-300">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>

        {/* Animated Flowchart Tree */}
        <div className="relative flex flex-col items-center w-full max-w-[700px]">
          {/* Node 1: Trigger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative bg-white border border-klyro-mist shadow-sm rounded-xl p-4 flex items-center gap-4 w-[320px] z-10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-klyro-turquoise rounded flex items-center justify-center shadow-sm">
              <Zap className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-klyro-mist flex items-center justify-center shrink-0">
              <div className="w-5 h-4 border-2 border-slate-300 rounded-sm border-t-4" />
            </div>
            <p className="text-[13px] font-semibold text-klyro-dark">
              When card is moved to <br />
              <span className="text-klyro-blue">"In Review"</span>
            </p>
          </motion.div>

          {/* Line Down */}
          <div className="w-px h-8 bg-klyro-mist" />

          {/* Node 2: Condition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ delay: 0.15 }}
            className="relative bg-white border border-klyro-blue/30 shadow-[0_4px_20px_-4px_rgba(79,70,229,0.15)] rounded-xl p-3.5 flex items-center gap-3 w-[280px] z-10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-klyro-blue rounded flex items-center justify-center shadow-sm">
              <GitBranch className="w-3.5 h-3.5 text-white" />
            </div>
            <p className="text-[13px] font-bold text-klyro-dark text-center w-full">
              Check card priority level
            </p>
          </motion.div>

          {/* Split Path (Yes / No) */}
          <div className="relative w-[340px] h-12 flex justify-between border-t-2 border-klyro-mist border-dashed mt-8">
            <div className="absolute -top-6 left-0 right-0 flex justify-center">
              <div className="w-0.5 h-8 bg-klyro-mist dashed" />
            </div>

            {/* Left Branch Line */}
            <div className="w-0.5 h-full bg-klyro-mist border-l-2 border-dashed border-klyro-mist relative">
              <span className="absolute -top-6 -left-3 bg-klyro-canvas px-2 text-[10px] font-bold text-klyro-slate">
                High
              </span>
            </div>

            {/* Right Branch Line */}
            <div className="w-0.5 h-full bg-klyro-mist border-r-2 border-dashed border-klyro-mist relative">
              <span className="absolute -top-6 -right-3 bg-klyro-canvas px-2 text-[10px] font-bold text-klyro-slate">
                Normal
              </span>
            </div>
          </div>

          {/* Split Content */}
          <div className="flex justify-between w-full max-w-[500px] gap-8">
            {/* Left Column (High Priority) */}
            <div className="flex flex-col items-center gap-6 w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white border border-klyro-mist shadow-sm rounded-xl p-3.5 flex items-center gap-3 w-full">
                <Bell className="w-4 h-4 text-rose-500" />
                <span className="text-[12px] font-semibold text-klyro-dark">
                  Notify escalation team
                </span>
              </motion.div>

              <div className="w-px h-6 bg-klyro-mist border-l-2 border-dashed border-klyro-mist -my-3" />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="bg-white border border-klyro-mist shadow-sm rounded-xl p-3.5 flex items-center gap-3 w-full">
                <MessageSquare className="w-4 h-4 text-klyro-blue" />
                <span className="text-[12px] font-semibold text-klyro-dark">
                  Alert in #urgent-bugs
                </span>
              </motion.div>
            </div>

            {/* Right Column (Normal Priority) */}
            <div className="flex flex-col items-center gap-6 w-full">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white border border-klyro-mist shadow-sm rounded-xl p-3.5 flex items-center gap-3 w-full">
                <UserCheck className="w-4 h-4 text-klyro-turquoise" />
                <span className="text-[12px] font-semibold text-klyro-dark">
                  Assign to QA Lead
                </span>
              </motion.div>

              <div className="w-px h-6 bg-klyro-mist border-l-2 border-dashed border-klyro-mist -my-3" />

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="bg-white border border-klyro-mist shadow-sm rounded-xl p-3.5 flex items-center gap-3 w-full">
                <CalendarClock className="w-4 h-4 text-amber-500" />
                <span className="text-[12px] font-semibold text-klyro-dark">
                  Set due date: +2 Days
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
