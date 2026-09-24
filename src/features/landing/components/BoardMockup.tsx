import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MoreHorizontal, MousePointer2, Plus, Sparkles } from "lucide-react";
import { MOCK_BOARD_TASKS } from "../constants/landingData";

export const BoardMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-[620px] mx-auto">
      
      {/* Web3 Ambient Pastel Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-monday-sky/50 via-monday-lavender/50 to-monday-mint/40 rounded-[32px] blur-2xl -z-10 opacity-70" />

      {/* Main Board Container */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="bg-monday-snow border border-monday-mist rounded-card p-6 shadow-monday-xl"
      >
        {/* Board Header */}
        <div className="flex items-center justify-between pb-5 border-b border-monday-fog/40">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-monday-violet" />
              <h3 className="text-lg font-semibold text-monday-ink">Sprint #42 — Launch Prep</h3>
            </div>
            <p className="text-xs text-monday-slate mt-0.5">3 lists · 12 cards active</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-md hover:bg-monday-cloud text-monday-slate transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Task Rows List */}
        <div className="mt-5 space-y-3">
          {MOCK_BOARD_TASKS.map((task) => (
            <motion.div
              key={task.id}
              whileHover={{ scale: 1.015, x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center justify-between p-3.5 rounded-xl border border-monday-mist/60 bg-monday-snow hover:border-monday-violet/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-monday-fog" />
                <div>
                  <h4 className="text-sm font-medium text-monday-ink">{task.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-[11px] px-2 py-0.5 rounded-[4px] font-medium ${task.tagColor}`}>
                      {task.tag}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Status Pill */}
                <span className={`text-xs px-3 py-1 rounded-[6px] font-medium ${task.statusColor}`}>
                  {task.status}
                </span>

                {/* Avatar */}
                <img
                  src={task.avatar}
                  alt={task.assignee}
                  className="w-7 h-7 rounded-full object-cover ring-2 ring-white"
                />
              </div>
            </motion.div>
          ))}

          {/* Add New Card Dummy */}
          <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-dashed border-monday-fog/80 text-monday-slate text-xs font-medium hover:text-monday-ink hover:border-monday-violet cursor-pointer transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add new task...</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Web3 Popover: "Generated 34 assets" ala Gambar 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
        transition={{
          y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 },
          opacity: { duration: 0.6 },
        }}
        className="absolute -bottom-6 -right-6 bg-white border border-monday-mist rounded-2xl p-3.5 shadow-xl flex items-center gap-3.5 backdrop-blur-lg"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-monday-mint to-monday-sky flex items-center justify-center text-monday-forest">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <p className="text-xs font-semibold text-monday-ink">Task Completed</p>
          </div>
          <p className="text-[11px] text-monday-slate">Moved to Done by Alex</p>
        </div>
        <span className="ml-2 text-xs font-semibold px-2.5 py-1 rounded-[6px] bg-monday-mint text-monday-forest">
          Done
        </span>
      </motion.div>

      {/* Animated Floating Cursor */}
      <motion.div
        animate={{
          x: [20, 180, 20],
          y: [120, 60, 120],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 pointer-events-none z-20 flex items-center gap-1"
      >
        <MousePointer2 className="w-6 h-6 fill-monday-violet text-white drop-shadow-md" />
        <span className="text-[10px] font-semibold bg-monday-violet text-white px-2 py-0.5 rounded-full shadow-sm">
          Sarah
        </span>
      </motion.div>

    </div>
  );
};