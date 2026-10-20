"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { experience } from "@/lib/profile";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ExperienceSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-125 md:h-100"
    >
      {experience.map((job, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 gap-y-6 h-full px-12 md:px-16">
            <div className="w-full max-w-75 flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center gap-y-1">
                <div className="text-sm uppercase tracking-widest text-accent">
                  {job.period}
                </div>

                <div className="text-lg xl:text-xl">{job.role}</div>

                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {job.company}
                </div>

                <div className="text-[12px] text-white/40">{job.location}</div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center before:w-px xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-50 relative xl:pl-20">
              <ul className="flex flex-col gap-y-2 text-left text-sm xl:text-base font-light text-white/60">
                {job.highlights.map((highlight, highlightI) => (
                  <li key={highlightI} className="flex gap-x-3">
                    <span
                      className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                      aria-hidden
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ExperienceSlider;
