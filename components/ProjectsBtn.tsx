import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        prefetch
        href="/work"
        className="relative w-46.25 h-46.25 flex justify-center items-center bg-circle-star bg-cover bg-center bg-no-repeat group"
      >
        <svg
          viewBox="0 0 160 160"
          className="animate-spin-slow w-full h-full max-w-35.25 max-h-37 pointer-events-none select-none"
          aria-hidden
        >
          <defs>
            <path
              id="projects-btn-circle"
              d="M80 80 m-62 0 a62 62 0 1 1 124 0 a62 62 0 1 1 -124 0"
            />
          </defs>
          <text fill="#fff" fontSize="13" fontWeight="500">
            <textPath
              href="#projects-btn-circle"
              textLength="385"
              lengthAdjust="spacing"
            >
              VIEW MY WORK • VIEW MY WORK •
            </textPath>
          </text>
        </svg>
        <span className="sr-only">View my work</span>
        <HiArrowRight
          className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
