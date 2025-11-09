"use client";

import WhatIsSenjaHeader from "./WhatIsSenjaHeader";
import ProblemSection from "./ProblemSection";
import SolutionSection from "./SolutionSection";

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