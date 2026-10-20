import Image from "next/image";

import { profile } from "@/lib/profile";

// Monogram with an oscilloscope-style trace, shown until a portrait is set in lib/profile.ts.
const Monogram = () => {
  const gridLines = Array.from({ length: 13 }, (_, i) => 128 + i * 40);

  return (
    <svg
      viewBox="0 0 737 678"
      className="translate-z-0 w-full h-full"
      role="img"
      aria-label={`${profile.name} monogram`}
    >
      <defs>
        <radialGradient id="avatar-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#f13024" stopOpacity="0.35" />
          <stop offset="1" stopColor="#f13024" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="avatar-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f13024" />
          <stop offset="1" stopColor="#4a22bd" />
        </linearGradient>
        <clipPath id="avatar-clip">
          <circle cx="368" cy="360" r="236" />
        </clipPath>
      </defs>

      <circle cx="368" cy="360" r="330" fill="url(#avatar-glow)" />
      <circle
        cx="368"
        cy="360"
        r="285"
        stroke="#fff"
        strokeOpacity="0.15"
        strokeWidth="2"
        strokeDasharray="4 14"
        fill="none"
      />
      <circle cx="368" cy="360" r="240" fill="#131424" fillOpacity="0.75" />

      <g clipPath="url(#avatar-clip)" stroke="#fff" strokeOpacity="0.06">
        {gridLines.map((pos) => (
          <g key={pos}>
            <line x1={pos} y1="100" x2={pos} y2="620" />
            <line x1="100" y1={pos - 8} x2="640" y2={pos - 8} />
          </g>
        ))}
      </g>

      <path
        d="M128 480 H262 L280 450 L298 510 L320 410 L344 545 L364 466 L380 480 H608"
        stroke="#f13024"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        clipPath="url(#avatar-clip)"
      />

      <circle
        cx="368"
        cy="360"
        r="240"
        stroke="url(#avatar-ring)"
        strokeWidth="6"
        fill="none"
      />

      <text
        x="368"
        y="340"
        textAnchor="middle"
        fill="#fff"
        fontSize="140"
        fontWeight="600"
        letterSpacing="6"
      >
        {profile.initials}
      </text>
      <text
        x="368"
        y="390"
        textAnchor="middle"
        fill="#fff"
        fillOpacity="0.5"
        fontSize="18"
        letterSpacing="6"
      >
        SYSTEMS · TEST · AI
      </text>
    </svg>
  );
};

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      {profile.avatar ? (
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={737}
          height={678}
          className="translate-z-0 w-full h-full"
        />
      ) : (
        <Monogram />
      )}
    </div>
  );
};

export default Avatar;
