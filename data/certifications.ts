export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  status: "completed" | "in-progress";
  detail: string;
};

export const certifications: Certification[] = [
  {
    name: "Ethical Hacking Certification",
    issuer: "TechCrush · American Council of Training and Development (ACTD), USA",
    date: "June 2026",
    status: "completed",
    detail:
      "Foundational ethical hacking programme covering reconnaissance, exploitation concepts, and the legal and professional boundaries of security testing.",
  },
  {
    name: "OPSWAT Cybersecurity Fundamentals Associate (OCFA)",
    issuer: "OPSWAT",
    status: "completed",
    detail:
      "Fundamentals of cybersecurity: threat landscape, secure architecture principles, and critical infrastructure protection concepts.",
  },
];
