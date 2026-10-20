"use client";

import type { IconType } from "react-icons";
import {
  HiOutlineArrowPath,
  HiOutlineBeaker,
  HiOutlineClipboardDocumentCheck,
  HiOutlineCommandLine,
  HiOutlineHeart,
  HiOutlineServerStack,
  HiOutlineShieldCheck,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

type Highlight = {
  Icon: IconType;
  title: string;
  org: string;
  period: string;
  description: string;
};

const workSlides: { highlights: Highlight[] }[] = [
  {
    highlights: [
      {
        Icon: HiOutlineBeaker,
        title: "Prompt Test Suites",
        org: "AI Consulting",
        period: "2024 - Now",
        description:
          "Suites probing accuracy, consistency, instruction-following, safety and edge-case behavior.",
      },
      {
        Icon: HiOutlineClipboardDocumentCheck,
        title: "Rubric-Based Evaluation",
        org: "AI Consulting",
        period: "2024 - Now",
        description:
          "Scoring outputs against rubrics and reference answers; logging hallucinations, bias and reasoning errors.",
      },
      {
        Icon: HiOutlineArrowPath,
        title: "Model Regression Tracking",
        org: "AI Consulting",
        period: "2024 - Now",
        description:
          "Regression checks across AI tools and model versions, tracking how outputs change over time.",
      },
      {
        Icon: HiOutlineCommandLine,
        title: "Evaluation Automation",
        org: "AI Consulting",
        period: "2024 - Now",
        description:
          "Repeatable checklists and lightweight Python and SQL scripts that streamline testing and data review.",
      },
    ],
  },
  {
    highlights: [
      {
        Icon: HiOutlineShieldCheck,
        title: "Automated Sanity Check",
        org: "YOFiMeter",
        period: "2014 - 2015",
        description:
          "Build sanity check, progressively extended to cover more system capabilities across weekly releases.",
      },
      {
        Icon: HiOutlineHeart,
        title: "Medical Device Engineering",
        org: "Anakena Solutions",
        period: "2011 - 2013",
        description:
          "Requirements, system design and verification for regulated medical device development.",
      },
      {
        Icon: HiOutlineServerStack,
        title: "PDP to PC Test Migration",
        org: "USDA (REA)",
        period: "1975 - 2010",
        description:
          "Led the transition of Litton testing platforms from PDP computers to PC-based systems.",
      },
      {
        Icon: HiOutlineWrenchScrewdriver,
        title: "Test Process Automation",
        org: "USDA (REA)",
        period: "1975 - 2010",
        description:
          "Automated the testing process, reducing manual effort and improving repeatability.",
      },
    ],
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-80 sm:h-120"
    >
      {workSlides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[calc(100%-40px)]">
            {slide.highlights.map((item, itemI) => (
              <div
                className="relative rounded-lg overflow-hidden group bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] border border-white/10 p-4 xl:p-6 flex flex-col justify-between transition-all duration-300"
                key={itemI}
              >
                <div
                  className="absolute inset-0 bg-linear-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-20 transition-all duration-700 pointer-events-none"
                  aria-hidden
                />

                <div className="relative flex items-start justify-between gap-x-2">
                  <item.Icon
                    className="text-3xl xl:text-4xl text-accent shrink-0"
                    aria-hidden
                  />
                  <div className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-white/40 text-right">
                    {item.period}
                  </div>
                </div>

                <div className="relative">
                  <div className="text-sm sm:text-base xl:text-lg leading-tight mb-1">
                    {item.title}
                  </div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/50">
                    {item.org}
                  </div>
                  <p className="hidden sm:block text-sm leading-normal mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
