import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <h2 className="text-4xl md:text-[56px] font-bold tracking-tight text-klyro-dark leading-[1.1]">
            Our teams <br /> achieve more
          </h2>
          <button className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-klyro-mist text-klyro-dark text-sm font-semibold hover:border-klyro-dark transition-colors">
            <span>Read all stories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Big Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Dark Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-klyro-dark rounded-[32px] overflow-hidden flex flex-col md:flex-row relative group">
            <div className="p-8 md:p-10 flex-1 flex flex-col justify-between z-10">
              <div>
                <span className="text-6xl text-klyro-turquoise font-serif leading-none block mb-4">
                  “
                </span>
                <p className="text-xl md:text-2xl text-white font-medium leading-snug mb-8">
                  We replaced a messy mix of spreadsheets and chat apps with
                  Klyro. It cut our sprint planning time in half.
                </p>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Alex Boulder</p>
                <p className="text-klyro-slate text-sm">
                  Director of Engineering, TechFlow
                </p>
              </div>
            </div>
            {/* Image Right Side */}
            <div className="md:w-[45%] h-[250px] md:h-auto relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&fit=crop"
                alt="Engineering Team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-klyro-dark via-klyro-dark/40 to-transparent md:block hidden" />
            </div>
          </motion.div>

          {/* Card 2: Pastel Metric Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 bg-[#f5f3ff] rounded-[32px] overflow-hidden flex flex-col relative group">
            <div className="p-8 md:p-10 flex-1 z-10 flex flex-col justify-between">
              <div className="inline-flex bg-white px-3 py-1 rounded-md text-xs font-bold text-indigo-900 shadow-sm w-fit mb-6">
                Agency & Creative
              </div>
              <div>
                <h3 className="text-5xl md:text-[64px] font-bold text-klyro-dark tracking-tighter mb-2">
                  40%
                </h3>
                <p className="text-klyro-dark font-medium text-lg leading-snug max-w-[200px] mb-6">
                  Faster campaign delivery and asset approvals.
                </p>
                <button className="flex items-center gap-2 text-klyro-blue text-sm font-bold hover:gap-3 transition-all">
                  <span>Read the case study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            {/* Image Overlay Bottom */}
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 md:h-[60%] overflow-hidden rounded-tl-[32px]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&fit=crop"
                alt="Creative Agency"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>

        {/* Navigation Arrows (Dummy) */}
        <div className="flex justify-end gap-3 mt-8">
          <button className="w-12 h-12 rounded-full border border-klyro-mist flex items-center justify-center text-klyro-slate hover:bg-slate-50 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full border border-klyro-dark text-klyro-dark flex items-center justify-center hover:bg-klyro-canvas transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
