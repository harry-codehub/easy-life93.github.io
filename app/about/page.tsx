"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import { FaDatabase, FaJava, FaJs, FaPython } from "react-icons/fa";
import type { IconType } from "react-icons";
import { SiC, SiCplusplus, SiR } from "react-icons/si";

import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import { experience, profile } from "@/lib/profile";
import { fadeIn } from "@/variants";

type AboutInfoItem = {
  title: string;
  stage?: string;
  description?: string;
  icons?: IconType[];
};

type AboutDataItem = {
  title: string;
  info: AboutInfoItem[];
};

const aboutData: AboutDataItem[] = [
  {
    title: "skills",
    info: [
      {
        title: "Programming",
        description: "Python · C++ · C · Java · JavaScript · SQL · MATLAB · R",
        icons: [FaPython, SiCplusplus, SiC, FaJava, FaJs, FaDatabase, SiR],
      },
      {
        title: "AI & Consulting",
        description:
          "AI Evaluation · Prompt Testing · Model Testing · Data Quality · Rubric Design · Regression Testing · Human-in-the-Loop Review · AI Workflow Improvement",
      },
      {
        title: "Engineering",
        description:
          "Systems Engineering · Test Engineering · Test Automation · Requirements Analysis · Verification & Validation · Defect Reporting",
      },
    ],
  },
  {
    title: "experience",
    info: experience.map((item) => ({
      title: `${item.role} - ${item.company}`,
      stage: item.period,
    })),
  },
  {
    title: "platforms",
    info: [
      {
        title: "Architectures",
        description:
          "Client-Server · Distributed Systems · Real-Time Systems · Multi-Processor · Array Processors · Analog/Digital Hybrid",
      },
      {
        title: "Systems",
        description: "VAX · PDP · PC · Sun · Tektronix",
      },
      {
        title: "Domains",
        description:
          "Medical Devices · Defense/Aerospace · Simulation · Expert Systems · Computer-Aided Instruction",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "BS, Electrical Engineering - Federal City College, Washington, DC",
        stage: "1970 - 1974",
      },
    ],
  },
];

const stats: { end: number; suffix?: string; label: string }[] = [
  { end: 50, suffix: "+", label: "Years of experience." },
  { end: 35, label: "Year mission-critical tenure." },
  { end: 8, label: "Programming languages." },
  { end: 5, label: "Engineering domains." },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-auto xl:overflow-visible">
      <Circles />

      {profile.avatar && (
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute bottom-0 -left-92.5"
        >
          <Avatar />
        </motion.div>
      )}

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Decades of <span className="text-accent">rigor</span>, applied
            to AI.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-125 mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I began my career in 1975 as a systems test engineer, keeping
            mission-critical testing running for 35 years and later automating
            it. Since then I&apos;ve engineered medical devices, built test
            automation and consulted on software. Since 2024 I&apos;ve brought
            that same long-view, systems-level rigor to evaluating generative
            AI.
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {stats.map((stat, statI) => (
                <div
                  key={statI}
                  className={`relative flex-1 ${
                    statI < stats.length - 1 &&
                    "after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
                  }`}
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp
                      start={0}
                      end={stat.end}
                      suffix={stat.suffix}
                      duration={5}
                    />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-25">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-120"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-3 xl:gap-y-5 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col gap-y-1 items-center xl:items-start text-center xl:text-left text-white/60"
              >
                <div className="flex flex-col md:flex-row gap-x-2 items-center">
                  <div className="text-white/90">{item.title}</div>
                  {item.stage && (
                    <>
                      <div className="hidden md:flex">-</div>
                      <div className="font-light">{item.stage}</div>
                    </>
                  )}
                </div>

                {item.description && (
                  <div className="text-sm font-light max-w-xl">
                    {item.description}
                  </div>
                )}

                {item.icons && (
                  <div className="flex gap-x-4 mt-1">
                    {item.icons.map((Icon, iconI) => (
                      <div key={iconI} className="text-2xl text-white">
                        <Icon />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
