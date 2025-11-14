"use client";

import React from "react";
import { ScaleIn } from "@/components/ui/motion";
import WhatIsSenjaHeader from "./what-is-senja-header";
import Partner from "../partner";
import Supports from "../supports";
import Particles from "@/components/ui/particles";

export default function WhatIsSenja() {

  return (
    <section id="what-is-senja" className="min-h-screen py-20 px-4 relative">
      <div className="absolute top-0 left-0 bottom-0 right-1/2 bg-black hidden lg:block -z-10" />
      <div className="absolute top-0 left-1/2 bottom-0 right-0 bg-[#020100] hidden lg:block -z-10" />
      
      {/* Particles Background for Right Side */}
      <div className="absolute top-0 left-1/2 bottom-0 right-0 hidden lg:block -z-10 overflow-hidden">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>
      
      <div className="mt-10 lg:mt-20 mx-auto max-w-9xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:justify-between px-10">
          <div className="w-full lg:w-1/2 ">
          <div className="lg:pr-46 text-justify ">
            <WhatIsSenjaHeader />
          </div>
            <div className="lg:mt-70">
            <Partner />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center relative">
            <ScaleIn
              initialScale={0.85}
              duration={0.8}
              delay={0.3}
              amount={0.3}
              className="flex justify-center w-full"
            >
              <div className="relative h-[400px] lg:h-[600px] w-full overflow-visible flex items-center justify-center">
                <Supports />
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </section>
  );
}
