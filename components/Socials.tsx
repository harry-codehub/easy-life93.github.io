import Link from "next/link";
import type { IconType } from "react-icons";
import { RiLinkedinLine, RiMailLine } from "react-icons/ri";

import { profile } from "@/lib/profile";

export const socialData: { name: string; link: string; Icon: IconType }[] = [
  {
    name: "Email",
    link: `mailto:${profile.email}`,
    Icon: RiMailLine,
  },
  {
    name: "LinkedIn",
    link: profile.linkedin,
    Icon: RiLinkedinLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target={social.link.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer noopener"
          className={`${
            social.name === "LinkedIn"
              ? "bg-accent rounded-full p-1.25 hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
