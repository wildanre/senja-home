"use client";

export default function Footer() {
  return (
    <footer className="relative py-16 md:py-20 overflow-hidden min-h-[600px] w-full flex justify-center">
      <div className="relative w-full">
        {/* Large SENJA Background Text with Fade Effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
          <div
            className="text-[10rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] 2xl:text-[28rem] font-black leading-none select-none whitespace-nowrap"
            style={{
              color: "rgba(200, 200, 200, 0.15)",
              letterSpacing: "0.2em",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)",
            }}
          >
            SENJA
          </div>
        </div>

        {/* Background gradient accent */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" />
        </div>
      </div>
    </footer>
  );
}
