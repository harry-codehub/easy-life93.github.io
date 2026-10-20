"use client";

import { motion } from "framer-motion";

import ExperienceSlider from "@/components/ExperienceSlider";
import { fadeIn } from "@/variants";

const Experience = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center overflow-y-auto">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          Where I&apos;ve <span className="text-accent">worked.</span>
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <ExperienceSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
