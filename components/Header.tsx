import Link from "next/link";

import Socials from "@/components/Socials";
import { profile } from "@/lib/profile";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-22.5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link
            prefetch
            href="/"
            className="text-[26px] leading-none tracking-wide"
          >
            <span className="font-light">{profile.firstName}</span>{" "}
            <span className="font-semibold">{profile.lastName}</span>
            <span className="text-accent font-semibold">.</span>
          </Link>

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
