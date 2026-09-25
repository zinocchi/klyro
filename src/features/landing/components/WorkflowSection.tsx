import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MoreVertical, Plus } from "lucide-react";
import { WORKFLOWS_DATA } from "../constants/landingData";

export const WorkflowSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>("engineering");
  const activeWorkflow =
    WORKFLOWS_DATA.find((w) => w.id === activeTabId) || WORKFLOWS_DATA[0];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        {/* Section Header: Centered Clean Display */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-klyro-dark">
            Get more done across{" "}
            <span className="text-monday-violet">every workflow</span>
          </h2>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex items-center justify-center mb-16">
          <div className="inline-flex p-1.5 gap-2 rounded-full bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-slate-100 overflow-x-auto max-w-full">
            {WORKFLOWS_DATA.map((wf) => {
              const isActive = activeTabId === wf.id;
              return (
                <button
                  key={wf.id}
                  onClick={() => setActiveTabId(wf.id)}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap active:scale-95 ${
                    isActive
                      ? "text-monday-violet"
                      : "text-klyro-slate hover:bg-slate-50 hover:text-klyro-dark"
                  }`}>
                  {/* Animasi sliding background buat tab yang aktif */}
                  {isActive && (
                    <motion.div
                      layoutId="cleanActiveTab"
                      className="absolute inset-0 bg-monday-lavender rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}

                  <span className="relative z-10">{wf.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Showcase Content - Tanpa box wrapper raksasa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Clean Copywriting & CTA */}
          <div className="lg:col-span-4 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWorkflow.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4">
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-klyro-dark leading-[1.2]">
                  {activeWorkflow.headline}{" "}
                  <span className="text-monday-violet">
                    {activeWorkflow.highlightText}
                  </span>
                </h3>

                <p className="text-base text-klyro-slate leading-relaxed">
                  {activeWorkflow.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="pt-2">
              <Link
                to="/register"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-monday-violet text-white text-base font-medium transition-all duration-200 active:scale-95 hover:bg-[#5252e5]">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Live Mini Kanban Board Preview (Tunggu Instruksi Lu) */}
          <div className="lg:col-span-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWorkflow.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 bg-klyro-canvas p-4 sm:p-5 rounded-2xl border border-klyro-mist shadow-sm">
                {/* Board bawaan Klyro lu sementara tetep gw biarin */}
                {activeWorkflow.columns.map((col, colIdx) => (
                  <div
                    key={colIdx}
                    className="bg-klyro-mist/30 rounded-xl p-3 border border-klyro-mist/60 flex flex-col justify-between min-h-[300px]">
                    <div>
                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-klyro-mist/50">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-klyro-dark">
                            {col.title}
                          </h4>
                          <span className="w-5 h-5 rounded-full bg-white text-klyro-slate border border-klyro-mist text-[10px] font-semibold flex items-center justify-center">
                            {col.count}
                          </span>
                        </div>
                        <MoreVertical className="w-3.5 h-3.5 text-klyro-slate/60 cursor-pointer" />
                      </div>

                      <div className="space-y-2.5">
                        {col.cards.map((card, cardIdx) => (
                          <div
                            key={cardIdx}
                            className="bg-white rounded-lg p-3 border border-klyro-mist/70 space-y-2">
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded ${card.tagBg}`}>
                              {card.tag}
                            </span>
                            <p className="text-xs font-semibold text-klyro-dark line-clamp-2 leading-snug">
                              {card.title}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button className="mt-3 w-full py-1.5 flex items-center justify-center gap-1 rounded-md border border-dashed border-klyro-mist text-[11px] font-medium text-klyro-slate hover:text-monday-violet transition-colors">
                      <Plus className="w-3 h-3" />
                      <span>Add card</span>
                    </button>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
