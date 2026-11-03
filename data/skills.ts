export type SkillGroup = {
  title: string;
  note: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Web Application Security",
    note: "Where I focus my practice.",
    items: [
      "Web application penetration testing",
      "Vulnerability testing",
      "Reconnaissance & enumeration",
      "API security testing",
    ],
  },
  {
    title: "Security Tooling",
    note: "Tools I work with in labs and assessments.",
    items: ["Burp Suite", "Nmap", "Scapy", "Metasploit", "Python (requests, socket)"],
  },
  {
    title: "Programming & Scripting",
    note: "Writing the small tools an assessment needs.",
    items: ["Python", "Bash", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Development",
    note: "Context for how the applications I test are built.",
    items: ["React", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "REST APIs"],
  },
];
