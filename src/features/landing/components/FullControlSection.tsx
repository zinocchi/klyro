import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Lock,
  CheckCircle,
  Clock,
  Database,
  ShieldCheck,
} from "lucide-react";

const CONTROL_FEATURES = [
  {
    icon: Activity,
    title: "Activity history",
    description:
      "Track every card movement, comment, and assignment across your organization with a real-time audit log.",
  },
  {
    icon: Lock,
    title: "Role-based access",
    description:
      "Define exactly who can view, edit, or manage specific boards. Assign Owner, Member, or Guest roles easily.",
  },
  {
    icon: CheckCircle,
    title: "Approval workflows",
    description:
      "Set up mandatory review stages. Require specific team members to validate work before cards hit the Done column.",
  },
  {
    icon: Clock,
    title: "Time tracking",
    description:
      "Monitor time spent per task and track team velocity across sprints to prevent burnout and manage bandwidth.",
  },
  {
    icon: Database,
    title: "Data ownership",
    description:
      "You retain full ownership of the content, files, and project structures you build. Export your data anytime.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise security",
    description:
      "Your project data is encrypted at rest and in transit. We strictly protect your workspace privacy.",
  },
];

// Animasi container untuk stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Jarak waktu muncul tiap item
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const FullControlSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-klyro-mist/40">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Giant Headline Top */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[80px] md:text-[120px] lg:text-[160px] font-bold tracking-tighter text-klyro-dark leading-[0.85]">
            Full <br /> control
          </motion.h2>
        </div>

        {/* 3x2 Grid Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {CONTROL_FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="space-y-4">
                <div className="text-klyro-blue">
                  <Icon className="w-6 h-6 stroke-[2.5]" />
            </div>
                <div>
                  <h4 className="text-[17px] font-bold text-klyro-dark mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-[15px] text-klyro-slate leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
