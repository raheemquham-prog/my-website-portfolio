export type LabPlatform = {
  name: string;
  href: string;
  description: string;
  focus: string[];
};

/**
 * Platforms used for structured practical practice.
 * Individual lab entries are added to `labEntries` as they are completed —
 * nothing is listed here until it has actually been done.
 */
export const labPlatforms: LabPlatform[] = [
  {
    name: "TryHackMe",
    href: "https://tryhackme.com/",
    description:
      "Guided rooms and learning paths covering networking fundamentals, web exploitation, and the mechanics behind common vulnerability classes.",
    focus: ["Guided rooms", "Learning paths", "Web exploitation fundamentals"],
  },
  {
    name: "PortSwigger Web Security Academy",
    href: "https://portswigger.net/web-security",
    description:
      "Free, hands-on labs built by the makers of Burp Suite — the most direct practice available for the vulnerability classes I test for.",
    focus: ["Hands-on labs", "Burp Suite practice", "Vulnerability classes"],
  },
];

export type LabEntry = {
  name: string;
  platform: string;
  category: string;
  objective: string;
  tools: string[];
  status: "completed" | "in-progress";
  writeUp?: string;
  profile?: string;
};

export const labEntries: LabEntry[] = [];

export const labCategories = [
  "Access control",
  "Authentication",
  "Injection",
  "API security",
  "Business logic",
  "Reconnaissance",
  "Client-side",
];
