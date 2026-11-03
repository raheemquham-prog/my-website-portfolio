export type Project = {
  slug: string;
  title: string;
  category: string;
  type: string;
  summary: string;
  overview: string;
  contribution: string[];
  approach: { heading: string; body: string }[];
  outcomes: string[];
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  environment?: string;
  disclosure?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "python-security-testing",
    title: "Python Security-Testing Development",
    category: "Personal Security Project",
    type: "Security tooling",
    summary:
      "A set of Python scripts written to explore how network communication and reconnaissance actually work at the protocol level, and to build reusable pieces for controlled security testing.",
    overview:
      "The goal was to stop treating security tooling as a black box. Each script targets one small piece of the reconnaissance and testing workflow — discovering a host, inspecting a response, sending a crafted request — so that the underlying behaviour is understood before it is used in an assessment.",
    contribution: [
      "Wrote the scripts end to end, from interface discovery to output formatting.",
      "Used raw sockets and Scapy where packet-level control was the point, and HTTP libraries where it was not.",
      "Kept execution scoped to hosts and lab systems I am authorised to test.",
    ],
    approach: [
      {
        heading: "Start from the protocol",
        body: "Work began at the packet and request layer: building and reading traffic directly rather than wrapping an existing tool, so that each field and handshake had to be accounted for.",
      },
      {
        heading: "Reconnaissance before testing",
        body: "Separate modules handle host discovery, service and banner identification, and HTTP response inspection — the information-gathering stage that should precede any test.",
      },
      {
        heading: "Scripts as small, composable tools",
        body: "Each script has one responsibility and takes its target as an argument, so pieces can be combined into a larger workflow instead of being one monolithic program.",
      },
      {
        heading: "Controlled execution",
        body: "Testing was confined to lab environments and systems within scope; the project is a learning vehicle for technique, not a tool for use against arbitrary targets.",
      },
    ],
    outcomes: [
      "A working understanding of TCP/IP behaviour, request construction, and response analysis.",
      "Practical familiarity with Scapy and raw sockets that transfers directly into reconnaissance work.",
      "A habit of reading a protocol specification before reaching for a tool.",
    ],
    technologies: ["Python", "Socket", "Scapy", "Requests"],
    featured: true,
  },
  {
    slug: "usb-social-engineering-simulation",
    title: "Controlled USB Social-Engineering Simulation",
    category: "Personal Lab Project",
    type: "Offensive security lab",
    summary:
      "An authorised simulation built inside an isolated Windows 11 virtual machine to study how a physical social-engineering attack chain works — and what makes it detectable.",
    overview:
      "Social engineering is usually described as a people problem, but the technical half of the chain is where it succeeds or fails. This lab reconstructed that half inside a fully isolated environment, so that each stage could be observed, documented, and reasoned about without any risk to a real system.",
    contribution: [
      "Designed the lab: an isolated Windows 11 virtual machine with no access to production systems or real user data.",
      "Built the Python-based components used to observe the attack chain and record findings.",
      "Wrote up the methodology and the defensive observations that came out of it.",
    ],
    approach: [
      {
        heading: "Isolation first",
        body: "The entire exercise ran in a disposable Windows 11 virtual machine with no bridge to a live network, so that every result was contained and repeatable.",
      },
      {
        heading: "Attack-chain mechanics",
        body: "The simulation followed a physical delivery stage through to execution, with each step treated as something to observe rather than something to optimise.",
      },
      {
        heading: "Telemetry into a test webhook",
        body: "Execution events were reported to a webhook endpoint that existed purely for this test environment, giving a timeline of what happened and when.",
      },
      {
        heading: "Documentation as the deliverable",
        body: "Findings were written up as a defensive analysis: what a detection opportunity looks like at each stage, and where endpoint and user-awareness controls would have interrupted the chain.",
      },
    ],
    outcomes: [
      "A stage-by-stage understanding of how physical social engineering chains progress.",
      "Concrete detection and hardening observations for Windows endpoint environments.",
      "Practice in documenting offensive technique responsibly and defensively.",
    ],
    technologies: ["Python", "Windows 11 VM", "Webhook telemetry", "Isolated lab"],
    environment: "Isolated Windows 11 virtual machine — no live systems, no real user data.",
    disclosure:
      "This was an authorised, controlled educational lab. Payloads, telemetry endpoints and execution details are deliberately not published; the write-up covers concepts, methodology and defensive outcomes only.",
    featured: true,
  },
  {
    slug: "client-full-stack-application",
    title: "Client Full-Stack Web Application",
    category: "Client Project",
    type: "Full-stack development",
    summary:
      "A deployed full-stack application for a client, built with React and Node.js, with location display and direct customer communication wired into the frontend.",
    overview:
      "A real client build delivered end to end: requirements, frontend, backend, third-party integrations, and deployment. It is included here as supporting evidence — the practical experience of building web applications that informs how I assess their security.",
    contribution: [
      "Built the React frontend and the Express API behind it.",
      "Modelled and stored content in MongoDB.",
      "Integrated Google Maps for location display and WhatsApp for customer contact.",
      "Deployed and maintained the live application.",
    ],
    approach: [
      {
        heading: "Requirements to interface",
        body: "Work started with what the client needed a visitor to be able to do — find the business, understand the offering, make contact — and the interface was shaped around those actions.",
      },
      {
        heading: "API-backed content",
        body: "Content is served from an Express API over MongoDB rather than hard-coded into pages, so the client's information can change without a redeploy.",
      },
      {
        heading: "Integrations that remove friction",
        body: "Google Maps places the business geographically; WhatsApp opens a conversation in one tap. Both are chosen because they shorten the distance between a visitor and the client.",
      },
      {
        heading: "Deploy early",
        body: "The application was deployed to a live environment during development, so real-device and real-network behaviour informed the build.",
      },
    ],
    outcomes: [
      "A live, client-facing application in production use.",
      "First-hand understanding of how web applications are assembled — and therefore where they break.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Maps API",
      "WhatsApp integration",
    ],
    liveUrl: "https://block-industry-six.vercel.app/",
    featured: true,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
