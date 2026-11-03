export type InternshipStatus = "completed" | "ongoing" | "upcoming";

export type Internship = {
  slug: string;
  company: string;
  role: string;
  status: InternshipStatus;
  start: string;
  duration: string;
  focus: string[];
  summary: string;
  relevance: number;
};

/**
 * Statuses reflect the position as of November 2026.
 * Update `status` (and the related `nowStatus` copy in components) as engagements end.
 */
export const internships: Internship[] = [
  {
    slug: "iqrasec-academy",
    company: "IqraSec Academy",
    role: "Intern — Web Application Penetration Testing, Scripting & Automation",
    status: "ongoing",
    start: "15 October 2026",
    duration: "One month",
    summary:
      "Structured, task-driven internship centred on assessing web applications: mapping an application, testing for common vulnerability classes, and automating the repetitive parts of an assessment in Python and Bash.",
    focus: [
      "Web application and vulnerability assessment",
      "Burp Suite",
      "Reconnaissance",
      "Vulnerability testing",
      "Python and Bash scripting",
      "Practical assignments and lab projects",
    ],
    relevance: 1,
  },
  {
    slug: "datheon",
    company: "Datheon",
    role: "Intern — Application Security & API Pentesting, Python Programming",
    status: "ongoing",
    start: "15 October 2026",
    duration: "Four weeks, self-paced",
    summary:
      "Self-paced internship covering application and API security work alongside Python development, with deliverables tracked in GitHub repositories and documented in modular write-ups.",
    focus: [
      "Application security",
      "API penetration testing",
      "Python development",
      "GitHub-based repository management",
      "Modular documentation",
      "Software development practices",
    ],
    relevance: 2,
  },
  {
    slug: "techbiz-security",
    company: "TechBiz Security",
    role: "Intern — SOC Analyst",
    status: "upcoming",
    start: "10 November 2026",
    duration: "Six weeks",
    summary:
      "Security operations internship focused on monitoring, log review, and triage — the defensive counterpart to application testing work.",
    focus: [
      "SOC analysis",
      "Log monitoring",
      "Threat intelligence",
      "Security monitoring and triage",
    ],
    relevance: 3,
  },
  {
    slug: "clockwise-capital",
    company: "Clockwise Capital",
    role: "Intern — Cybersecurity",
    status: "ongoing",
    start: "15 October 2026",
    duration: "Three months",
    summary:
      "Broad cybersecurity internship run as project-based teamwork, including participation in team activities across the wider security programme.",
    focus: [
      "General cybersecurity",
      "Project-based teamwork",
      "Team Orbit activities",
    ],
    relevance: 4,
  },
];

export const statusLabel: Record<InternshipStatus, string> = {
  completed: "Completed",
  ongoing: "In progress",
  upcoming: "Upcoming",
};
