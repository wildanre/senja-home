import { motion } from "motion/react";

export const WhyHeader = () => {
  return (
    <div className="text-center mb-16 space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold"
      >
        <span className="text-white">lorem</span>
        <br />
        <span className="text-white">lorem ipsum</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto space-y-4"
      >
        <p className="text-gray-300 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veniam ducimus qui veritatis quos dolores eligendi officia commodi rem a voluptas placeat perferendis tempore, quo asperiores et nam suscipit minus!
        </p>
        <p className="text-gray-300 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veniam ducimus qui veritatis quos dolores eligendi officia commodi rem a voluptas placeat perferendis tempore, quo asperiores et nam suscipit minus!
        </p>
      </motion.div>
    </div>
  );
};
