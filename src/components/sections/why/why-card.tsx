import { motion } from "motion/react";
import Image from "next/image";
import { WhyFeature } from "./why-data";

interface WhyCardProps {
  feature: WhyFeature;
  index: number;
}

export const WhyCard = ({ feature, index }: WhyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-gradient-to-br from-[#E7B67C]/10 to-transparent 
                 border border-[#E7B67C]/20 rounded-2xl p-8 
                 hover:border-[#E7B67C]/40 transition-all duration-300
                 hover:shadow-lg hover:shadow-[#E7B67C]/10"
    >
      {/* Number Badge */}
      <div className="absolute top-6 left-6 w-10 h-10 rounded-full
                      bg-[#E7B67C]/10 border border-[#E7B67C]/30
                      flex items-center justify-center">
        <span
          className="text-[#E7B67C] font-semibold text-lg"
          style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
        >
          {feature.id}
        </span>
      </div>

      {/* Content */}
      <div className="mt-16 space-y-4">
        <h3
          className="font-hero text-2xl font-normal text-[#E7B67C]
                       group-hover:text-[#E7B67C]/90 transition-colors"
        >
          {feature.title}
        </h3>
        <p
          className="text-[#E7B67C]/70 leading-relaxed text-sm md:text-base"
          style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
        >
          {feature.description}
        </p>
      </div>

      {/* Icon at bottom */}
      <div className="mt-8 flex justify-center opacity-50 
                      group-hover:opacity-70 transition-opacity">
        <Image
          src={feature.icon}
          alt={feature.title}
          width={200}
          height={200}
          className="w-full max-w-[200px] h-auto"
        />
      </div>
    </motion.div>
  );
};
