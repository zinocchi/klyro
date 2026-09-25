import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { WorkflowSection } from "../components/WorkflowSection";
import { ContextSection } from "../components/ContextSection";
import { FullControlSection } from "../components/FullControlSection";
import { AutomationSection } from "../components/AutomationSection";
import { TestimonialSection } from "../components/TestimonialSection";
import { FooterSection } from "../components/FooterSection";

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-indigo-100 selection:text-klyro-blue">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Interactive */}
        <HeroSection />

        {/* 3. Category Workflows */}
        <WorkflowSection />

        {/* 4. Floating Context Features */}
        <ContextSection />

        {/* 5. 6 Pillars of Control */}
        <FullControlSection />

        {/* 6. Visual Automations Tree */}
        <AutomationSection />

        {/* 7. Customer Stories */}
        <TestimonialSection />

        {/* 8. Big CTA & Footer Links */}
        <FooterSection />
      </main>
    </div>
  );
};
