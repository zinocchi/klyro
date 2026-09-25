import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  CheckSquare,
  PieChart,
} from "lucide-react";

import { FaGithub, FaSlack, FaFigma } from "react-icons/fa6";
export const ContextSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        {/* Top Header Split Layout (Sesuai Gambar 4) */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-20">
          {/* Left: Huge Display Headline */}
          <h2 className="text-6xl md:text-[84px] font-bold tracking-tighter text-klyro-dark leading-[0.95]">
            Work in <br /> context
          </h2>

          {/* Right: Copywriting & CTA */}
          <div className="max-w-md pt-2 space-y-6">
            <p className="text-lg text-klyro-slate font-medium leading-relaxed">
              <strong className="text-klyro-dark font-bold">
                Tasks are only as good as their context.{" "}
              </strong>
              Keep your team's files, conversations, and integrations attached
              directly to your cards — ensuring work is being carried out
              confidently and accurately.
            </p>
            <Link
              to="/register"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-pill bg-klyro-dark text-white text-[15px] font-semibold hover:bg-black hover:shadow-lg transition-all duration-300">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Floating Canvas Area */}
        <div className="relative w-full h-[500px] sm:h-[600px] bg-slate-50/50 rounded-[40px] border border-klyro-mist/50 flex items-center justify-center overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-klyro-canvas rounded-full shadow-inner opacity-50 pointer-events-none" />

          {/* Floating Card 1: Integrations */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: 0,
            }}
            className="absolute top-10 left-4 sm:left-16 bg-white p-5 rounded-3xl border border-klyro-mist shadow-xl w-[260px] cursor-pointer hover:border-klyro-blue/30 transition-colors">
            <h4 className="text-sm font-bold text-klyro-dark mb-4">
              Integrations
            </h4>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-[#4A154B]/10 flex items-center justify-center text-[#4A154B]">
                <FaSlack className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
                <FaGithub className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500">
                <FaFigma className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-klyro-canvas border border-klyro-mist flex items-center justify-center text-klyro-slate text-xs font-bold">
                +26
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2: Docs & Subtasks */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-12 left-12 sm:left-1/3 bg-white p-5 rounded-3xl border border-klyro-mist shadow-xl w-[300px] cursor-pointer hover:border-klyro-blue/30 transition-colors z-20">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-4 h-4 text-klyro-slate" />
              <h4 className="text-sm font-bold text-klyro-dark">
                Docs & Specs
              </h4>
            </div>

            <div className="bg-slate-50 rounded-xl p-3 border border-klyro-mist/60 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                    alt="avatar"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-klyro-dark">
                    Q4 Marketing: next steps
                  </p>
                  <p className="text-[10px] text-klyro-slate mt-0.5">
                    Graham: Can you add the assets?
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex items-center gap-2 text-[11px] font-medium text-klyro-dark">
                  <CheckSquare className="w-3.5 h-3.5 text-klyro-slate" />
                  <span>Optimize campaign performance</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-medium text-klyro-dark line-through opacity-60">
                  <CheckSquare className="w-3.5 h-3.5 text-klyro-blue fill-klyro-blue/20" />
                  <span>Rebrand efforts</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 3: Dashboards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5.5,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute top-16 right-4 sm:right-16 bg-white p-5 rounded-3xl border border-klyro-mist shadow-xl w-[280px] cursor-pointer hover:border-klyro-blue/30 transition-colors z-10">
            <h4 className="text-sm font-bold text-klyro-dark mb-4">
              Dashboards
            </h4>

            <div className="bg-slate-50 rounded-xl p-4 border border-klyro-mist/60">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <p className="text-[10px] font-semibold text-klyro-slate mb-1">
                    Velocity
                  </p>
                  <p className="text-2xl font-bold text-klyro-dark tracking-tight">
                    42 pts
                  </p>
                </div>
                <PieChart className="w-8 h-8 text-klyro-turquoise" />
              </div>

              {/* Dummy Mini Bar Chart */}
              <div className="flex items-end gap-2 h-12 pt-2 border-t border-slate-200 mt-2">
                <div className="w-1/4 bg-klyro-blue rounded-t-sm h-[40%]" />
                <div className="w-1/4 bg-klyro-blue rounded-t-sm h-[70%]" />
                <div className="w-1/4 bg-klyro-turquoise rounded-t-sm h-[100%]" />
                <div className="w-1/4 bg-slate-300 rounded-t-sm h-[60%]" />
              </div>
            </div>
          </motion.div>

          {/* Floating Card 4: Data Records (Bottom Right) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute -bottom-8 right-10 sm:right-32 bg-white p-5 rounded-t-3xl border border-klyro-mist shadow-xl w-[240px]">
            <h4 className="text-sm font-bold text-klyro-dark mb-3">
              Data records
            </h4>
            <div className="space-y-2">
              <div className="h-2.5 w-full bg-slate-100 rounded-full" />
              <div className="h-2.5 w-3/4 bg-slate-100 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
