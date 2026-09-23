import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-monday-snow flex flex-col selection:bg-monday-lavender selection:text-monday-violet">
        <h1 className="sr-only">Landing Page</h1>
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* 2. Hero Section with Interactive Board */}
      <main className="flex-1">
        <HeroSection />

        <div className="py-20 text-center border-t border-monday-fog/30 bg-monday-cloud/20 text-monday-iron text-sm">
          Section berikutnya (Workflow Tabs, Context Showcase, Feature Grid,
          dll.) siap dipasang setelah review Hero.
        </div>
      </main>
    </div>
  );
};
