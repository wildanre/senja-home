"use client"

import React, { forwardRef, useRef } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animate/animated-beam"

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; src?: string; alt?: string }
>(({ className, children, src, alt }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 items-center justify-center rounded-full border-2 border-gray-200 bg-white p-2.5 shadow-lg",
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || "Logo"}
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      ) : (
        children
      )}
    </div>
  )
})

Circle.displayName = "Circle"

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)

  // Prevent hydration issues by ensuring refs are ready
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        style={{
          width: '100%',
          height: '400px'
        }}
      />
    )
  }

  return (
    <div
      className="relative flex items-center justify-center w-full h-full"
      style={{
        minHeight: '450px',
        padding: '50px 30px',
        overflow: 'visible'
      }}
      ref={containerRef}
    >
      <div
        className="flex flex-col items-stretch justify-between gap-12 w-full max-w-xl"
        style={{
          minHeight: '320px'
        }}
      >
        <div className="flex flex-row items-center justify-between px-4">
          <Circle ref={div1Ref} src="/partners/kaia-logo.svg" alt="Kaia" />
          <Circle ref={div5Ref} src="/supports/ethereum.svg" alt="Ethereum" />
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} src="/supports/base.svg" alt="Base" />
          <Circle ref={div4Ref} className="size-20 " src="/senja-logo.png" alt="Senja" />
          <Circle ref={div6Ref} src="/supports/arbitrum.svg" alt="Arbitrum" />
        </div>
        <div className="flex flex-row items-center justify-between px-4">
          <Circle ref={div3Ref} src="/supports/unichain.svg" alt="Unichain" />
          <Circle ref={div7Ref} src="/supports/hyperevm.svg" alt="HyperEVM" />
        </div>
      </div>

      {/* SEQUENCE 1: Kaia → Senja → All Right Chains */}
      {/* Kaia to Senja */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-50}
        endYOffset={-8}
        delay={0}
        duration={2}
        gradientStartColor="#3B82F6"
        gradientStopColor="#06B6D4"
        pathOpacity={0.2}
      />
      {/* Senja to Ethereum (after Kaia arrives) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div5Ref}
        curvature={-50}
        endYOffset={-8}
        delay={2}
        duration={1.5}
        gradientStartColor="#06B6D4"
        gradientStopColor="#627EEA"
        pathOpacity={0.2}
      />
      {/* Senja to Arbitrum (after Kaia arrives) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        curvature={0}
        delay={2.3}
        duration={1.5}
        gradientStartColor="#06B6D4"
        gradientStopColor="#28A0F0"
        pathOpacity={0.2}
      />
      {/* Senja to HyperEVM (after Kaia arrives) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div7Ref}
        curvature={50}
        endYOffset={8}
        delay={2.6}
        duration={1.5}
        gradientStartColor="#06B6D4"
        gradientStopColor="#EF4444"
        pathOpacity={0.2}
      />

      {/* SEQUENCE 2: Base → Senja → All Right Chains */}
      {/* Base to Senja */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        curvature={0}
        delay={5}
        duration={2}
        gradientStartColor="#0052FF"
        gradientStopColor="#06B6D4"
        pathOpacity={0.2}
      />
      {/* Senja to Ethereum (after Base arrives) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div5Ref}
        curvature={-50}
        endYOffset={-8}
        delay={6.5}
        duration={1.5}
        gradientStartColor="#06B6D4"
        gradientStopColor="#627EEA"
        pathOpacity={0.2}
      />
      {/* Senja to Arbitrum (after Base arrives) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        curvature={0}
        delay={6.8}
        duration={1.5}
        gradientStartColor="#06B6D4"
        gradientStopColor="#28A0F0"
        pathOpacity={0.2}
      />
      {/* Senja to HyperEVM (after Base arrives) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div7Ref}
        curvature={50}
        endYOffset={8}
        delay={7.1}
        duration={1.5}
        gradientStartColor="#06B6D4"
        gradientStopColor="#EF4444"
        pathOpacity={0.2}
      />

      {/* SEQUENCE 3: Unichain → Senja → All Right Chains */}
      {/* Unichain to Senja */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={50}
        endYOffset={8}
        delay={3}
        duration={2}
        gradientStartColor="#FF007A"
        gradientStopColor="#06B6D4"
        pathOpacity={0.2}
      />
      {/* Senja to Ethereum (after Unichain arrives) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div5Ref}
        curvature={-50}
        endYOffset={-8}
        delay={11}
        duration={1.5}
        gradientStartColor="#06B6D4"
        gradientStopColor="#627EEA"
        pathOpacity={0.2}
      />
      {/* Senja to Arbitrum (after Unichain arrives) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        curvature={0}
        delay={11.3}
        duration={1.5}
        gradientStartColor="#06B6D4"
        gradientStopColor="#28A0F0"
        pathOpacity={0.2}
      />
      {/* Senja to HyperEVM (after Unichain arrives) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div7Ref}
        curvature={50}
        endYOffset={8}
        delay={11.6}
        duration={1.5}
        gradientStartColor="#06B6D4"
        gradientStopColor="#EF4444"
        pathOpacity={0.2}
      />
    </div>
  )
}
