// Central place for personal details shared across pages.
// Update this file to change the name, contact links and work history site-wide.

export const profile = {
  name: "Harold Johnson",
  firstName: "Harold",
  lastName: "Johnson",
  initials: "HJ",
  role: "Software / Systems / Test Engineer · AI Consultant",
  location: "La Plata, Maryland, US",
  email: "harold.johnson0918@gmail.com",
  linkedin: "https://www.linkedin.com/in/harold-johnson-8293a3305",
  // To show a portrait instead of the "HJ" monogram, add a transparent PNG
  // (about 737x678) to /public and set its path here, e.g. "/avatar.png".
  avatar: null as string | null,
  summary:
    "Software, systems and test engineer with decades of experience across medical devices, defense/aerospace, simulation and test automation — now applying that engineering discipline to AI model evaluation, prompt testing and data quality.",
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "AI Consultant",
    company: "Self-Employed",
    period: "Aug 2024 - Present",
    location: "La Plata, MD",
    highlights: [
      "Design and run prompt test suites that assess accuracy, consistency, instruction-following, safety and edge-case behavior.",
      "Evaluate model outputs against rubrics and reference answers, documenting hallucinations, bias, omissions and reasoning errors.",
      "Run regression checks across AI tools and model versions, tracking how outputs change over time.",
      "Build repeatable evaluation checklists and lightweight Python and SQL automation for prompt testing and data review.",
    ],
  },
  {
    role: "Software Engineering Consultant",
    company: "Self-Employed",
    period: "Sep 2015 - Present",
    location: "La Plata, MD",
    highlights: [
      "Develop and maintain client software in Python, C++ and Java.",
      "Build and optimize SQL databases and queries; write MATLAB and R scripts for engineering analysis and simulation.",
      "Advise clients on client-server and distributed system architectures.",
      "Apply structured testing and automation practices to improve software quality and reliability.",
    ],
  },
  {
    role: "Software Test Engineer",
    company: "YOFiMeter (Division of GadLight)",
    period: "Apr 2014 - Jan 2015",
    location: "La Jolla, CA",
    highlights: [
      "Worked in a small development team shipping builds weekly or twice weekly.",
      "Developed an automated sanity check, progressively extended to cover more system capabilities.",
      "Supported a second software pass integrating the device, web support and associate communication devices.",
      "Partnered with developers to identify and report defects early in the build cycle.",
    ],
  },
  {
    role: "Systems Engineer",
    company: "Anakena Solutions",
    period: "Nov 2011 - Jan 2013",
    location: "Tarzana, CA",
    highlights: [
      "Performed systems engineering for the development of medical devices.",
      "Supported requirements definition, system design and verification for regulated device development.",
      "Coordinated with cross-functional teams to keep design and testing aligned with medical device standards.",
    ],
  },
  {
    role: "Systems Test Engineer",
    company: "US Department of Agriculture (REA)",
    period: "Nov 1975 - Dec 2010",
    location: "Woodland Hills, CA",
    highlights: [
      "Supported existing testing capabilities while developing replacement approaches for next-generation platforms.",
      "Led the transition of Litton testing platforms from PDP computers to PC-based systems.",
      "Automated the testing process over the final decade, reducing manual effort and improving repeatability.",
      "Maintained continuity of mission-critical testing throughout a 35-year tenure.",
    ],
  },
];
