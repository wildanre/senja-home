"use client";

import WhatIsSenjaHeader from "./what-is-senja-header";
import ProblemSection from "./problem-section";
import SolutionSection from "./solution-section";

export default function WhatIsSenja() {
  return (
    <section id="what-is-senja" className="py-20 px-4">
      <div className="max-w-5xl mt-10 lg:mt-20 mx-auto">
        <WhatIsSenjaHeader />
        <ProblemSection />
        <SolutionSection />
      </div>
    </section>
  );
}