"use client";

import React from "react";
import WhatIsSenjaHeader from "./what-is-senja-header";

export default function WhatIsSenja() {
  return (
    <div className="relative h-full w-full bg-black text-[#e7b67c]">
      {/* Desktop Layout - Content Only */}
      <div className="hidden lg:flex h-full w-full">
        <div className="flex flex-col items-start justify-start pl-13 pr-12 pt-32 w-full">
          <WhatIsSenjaHeader />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="relative z-10 flex h-screen w-full flex-col justify-start gap-10 pt-20 pb-8 px-4 sm:px-6 lg:hidden">
        <div className="relative flex w-full flex-col items-start gap-10">
          <WhatIsSenjaHeader />
        </div>
      </div>
    </div>
  );
}
