import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { HERO_TAGS } from "../constants/landingData";
import { BoardMockup } from "./BoardMockup";

export const HeroSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState("marketing");

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-monday-cloud/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-6 space-y-8">
            {/* Display Headline: Poppins Weight 300 dengan Negative Tracking */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-[-0.04em] text-monday-ink leading-[1.12]">
                Your team’s work,{" "}
                <span className="font-normal bg-gradient-to-r from-[#fe81e4] to-[#fda900] bg-clip-text text-transparent">
                  flowing smoothly
                </span>{" "}
                in one board.
              </h1>

              <p className="text-lg text-monday-slate font-normal max-w-lg leading-relaxed">
                The visual Kanban workspace where modern teams plan sprints,
                track card progress, and deliver high-impact results together.
              </p>
            </div>

            {/* Workflow Category Pill Selector (Mirip Gambar 1 & 2) */}
            <div className="flex flex-wrap gap-2 pt-1">
              {HERO_TAGS.map((tag) => {
                const isActive = selectedTag === tag.id;
                return (
                  <button
                    key={tag.id}
                    onClick={() => setSelectedTag(tag.id)}
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-monday-periwinkle text-monday-violet ring-1 ring-monday-violet/30 shadow-sm"
                        : "bg-white text-monday-slate border border-monday-pebble hover:border-monday-mist hover:text-monday-ink"
                    }`}>
                    {isActive && (
                      <Check className="w-3 h-3 text-monday-violet" />
                    )}
                    <span>{tag.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Primary Pill Button CTA */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-pill bg-monday-violet text-white text-base font-medium shadow-monday-glow hover:bg-[#5252ea] hover:translate-y-[-2px] transition-all duration-300">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-pill border border-monday-slate/40 text-monday-ink text-base font-medium hover:border-monday-ink hover:bg-white/50 transition-all duration-300">
                  <span>View Live Demo</span>
                </Link>
              </div>

              {/* Sub-label guarantee */}
              <p className="text-xs text-monday-iron flex items-center gap-2">
                <span>✦ No credit card required</span>
                <span>•</span>
                <span>Unlimited boards on free tier</span>
              </p>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Board Mockup */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <BoardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
