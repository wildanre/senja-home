import Dither from "@/components/ui/ditcher";
import AnimatedText from "@/components/ui/animated-text";
import AnimatedButton from "@/components/ui/animated-button";
import AnimatedTextVariants from "@/components/ui/animated-text-variants";
import TypingAnimation from "@/components/ui/typing-animation";

export default function HeroNew() {
  return (
    <section className="relative snap-start snap-always min-h-screen overflow-hidden bg-black text-[#e7b67c]">
      <div className="absolute inset-y-0 right-0 z-0 hidden h-full w-full lg:block lg:w-1/2">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 z-0 bg-black" />
          <div className="relative z-10 h-full w-full">
            <Dither
              waveColor={[0.87, 0.5, 0.2]}
              waveAmplitude={0.3}
              waveFrequency={3}
              waveSpeed={0.05}
              colorNum={4}
              pixelSize={1.2}
              mouseRadius={0.1}
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
        <div className="absolute inset-y-0 left-[-0.5rem] border-l border-dashed border-[#8a5a33]/70" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-start gap-10 px-6 pt-24 pb-12 lg:flex-row lg:items-start lg:gap-20 lg:px-12 lg:pr-24 lg:pt-28 lg:pointer-events-none xl:pr-32">
        <div className="relative flex w-full flex-col items-start gap-10 -ml-6 lg:pointer-events-auto lg:w-1/2 lg:max-w-lg lg:justify-start">
          <div className="space-y-6 lg:relative lg:min-h-[18rem] lg:-left-30">
            <div className="mb-10 hidden lg:absolute lg:-top-28 lg:-left-5 lg:block">
              <div className="w-15">
                <img
                  src="/senja1.gif"
                  alt="Senja abstract illustration"
                  className="w-full rounded-3xl"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mb-6 hidden lg:absolute lg:-top-24 lg:-right-25 lg:block">
              <span className="font-elegant text-2xl font-semibold italic text-[#e7b67c]">
                Senja
              </span>
            </div>
            <AnimatedText
              text="The lending designed for permissionless liquidity"
              className="font-hero text-4xl font-normal leading-tight text-[#e7b67c] sm:text-5xl lg:absolute lg:left-0 lg:top-36 lg:-translate-y-16 lg:text-6xl"
              delay={0.3}
              stagger={0.08}
              duration={0.6}
            />
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:mt-25 lg:relative lg:-left-30">
            <AnimatedButton
              className="rounded-full border border-dashed border-[#e7b67c]/40 px-6 py-3 text-sm font-medium text-[#e7b67c] transition hover:bg-[#e7b67c]/90 hover:text-[#120a06] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e7b67c]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120a06] lg:pointer-events-auto"
              delay={0.8}
              duration={0.6}
            >
              <AnimatedTextVariants
                text="Join Waitlist"
                animationType="fadeUp"
                delay={0}
                stagger={0.08}
                duration={0.6}
                as="span"
              />
            </AnimatedButton>
          </div>
        </div>
        <div className="absolute bottom-6 -left-6 z-10 w-[calc(100%-1rem)] max-w-xs text-sm text-[#f2cba1]/80 sm:max-w-md sm:text-base lg:pointer-events-auto lg:bottom-5 lg:-left-25 lg:w-[min(24rem,40vw)] lg:max-w-none lg:px-0">
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#e7b67c]/80">
            <TypingAnimation
              text="incubated by Kaia Chain"
              delay={1.0}
              speed={0.06}
              showCursor={false}
              as="span"
            />
          </div>
          <AnimatedTextVariants
            text="Permissionless by design, Senja unites cross-chain lending, borrowing, and collateral trading without boundaries."
            animationType="fadeUp"
            delay={1.2}
            stagger={0.04}
            duration={0.5}
            as="p"
            className="text-sm text-[#f2cba1]/80 sm:text-base"
          />
        </div>
        <div className="relative z-10 mt-12 h-[360px] w-full overflow-hidden rounded-3xl border border-[#e7b67c]/15 bg-black shadow-[0_0_120px_rgba(231,182,124,0.15)] lg:hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/60 to-black/80 mix-blend-screen" />
          <Dither
            waveColor={[0.9, 0.5, 0.2]}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
            colorNum={4}
            pixelSize={1.2}
            mouseRadius={0.3}
          />
        </div>
      </div>
    </section>
  );
}

