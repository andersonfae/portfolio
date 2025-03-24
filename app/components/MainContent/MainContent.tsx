"use client";
import React from "react";
import { TechnicalNavbar } from "../TechnicalNavbar/TechnicalNavbar";
import { TechnicalExpertiseSection } from "../TechnicalExpertiseSection/TechnicalExpertiseSection";
import { RecentWorksSection } from "../RecentWorksSection/RecentWorksSection";
import { ExperienceSection } from "../ExperienceSection/ExperienceSection";
import { TestimonialsSection } from "../TestimonialsSection/TestimonialsSection";
import { HireMeSection } from "../HireMeSection/HireMeSection";

export function MainContent() {
  return (
    <section className="bg-neutral-900 text-white min-h-screen px-[30px] py-[60px]">
      <div className="flex">
        <TechnicalNavbar />

        <div className="flex-1 space-y-16">
          <TechnicalExpertiseSection />
          <RecentWorksSection />
          <ExperienceSection />
          <TestimonialsSection />
          <HireMeSection />
        </div>
      </div>
    </section>
  );
}
