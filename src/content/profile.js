// Single source of truth for site copy. Edit this file to update the site.

export const person = {
  name: "Noel Ugwoke",
  tagline: "Backend engineer for AI products that have to work.",
  kicker: "AI systems consulting",
  location: "Calgary, AB",
  email: "1leonnoel1@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/noelugwoke/",
    github: "https://github.com/leonnuxy",
    blog: "https://leonnuxy.github.io/blog/",
    resume: `${import.meta.env.BASE_URL}resume.pdf`,
  },
};

export const now = {
  status: "Now",
  text: "Working on a GraphRAG pipeline that can pick up where it left off after a worker crashes.",
};

export const bio =
  "I build the ingestion, APIs and cloud services behind them, especially the parts that get messy after the demo.";

export const heroSignals = [
  {
    label: "Consulting focus",
    value: "Finding practical uses for AI",
  },
  {
    label: "Known for",
    value: "Clear thinking and reliable systems",
  },
];

export const heroProof = [
  {
    value: "3",
    label: "clouds worked across: AWS, Azure and GCP",
  },
  {
    value: "500+",
    label: "daily bookings handled in production",
  },
  {
    value: "15+",
    label: "business decisions informed by data work",
  },
  {
    value: "99.9%",
    label: "uptime on backend systems I maintained",
  },
];

export const capabilities = [
  {
    title: "Applied AI Systems",
    problem: "Before picking a model, I figure out what decision or task should get better.",
    evidence: [
      {
        label: "Start with the work",
        text: "I take a loose AI idea and turn it into something we can test against a real workflow.",
      },
      {
        label: "Let people make the call",
        text: "The model suggests and a person confirms, so a guess never gets treated as a fact.",
      },
      {
        label: "Plan for failure",
        text: "Crashes, duplicate records and bad input get designed for before anything reaches production.",
      },
    ],
  },
  {
    title: "Data foundations for AI",
    problem: "If the data path is unreliable, the AI layer will be too. I fix that part first.",
    evidence: [
      {
        label: "Make jobs restartable",
        text: "Long ingestion runs should resume where they stopped instead of processing everything again.",
      },
      {
        label: "Keep the checks",
        text: "A faster pipeline is not worth much if the integrity checks quietly disappear.",
      },
      {
        label: "Connect it to a decision",
        text: "Dashboards and models should end in something a team can act on, not just something to look at.",
      },
    ],
  },
  {
    title: "Cloud integrations",
    problem: "I connect tools that were not designed to work together and make the handoff less painful.",
    evidence: [
      {
        label: "Limit access by design",
        text: "Connectors should expose metadata and queries, not broad access to the warehouse behind them.",
      },
      {
        label: "Automate the repeat work",
        text: "At Qindred, I automated Azure data workflows and reduced manual processing time by about 25%.",
      },
      {
        label: "Use what fits",
        text: "I choose around the team and the existing system rather than forcing everything onto my preferred stack.",
      },
    ],
  },
  {
    title: "Backend systems & APIs",
    problem: "I build services for the ordinary Tuesday after launch. Launch day is the easy part.",
    evidence: [
      {
        label: "Handle real traffic",
        text: "Booking and workflow APIs that stay up under daily load, not just in a demo.",
      },
      {
        label: "Make problems visible",
        text: "At Qindred, I set up shared logging and dashboards so we could see what broke and get to the cause faster.",
      },
      {
        label: "Improve the release path",
        text: "Automated deployments with Jenkins, Docker and Kubernetes so a release stops being an event.",
      },
    ],
  },
];

export const caseStudies = [
  {
    title: "Helping LLMs reason across connected knowledge",
    visual: "ingestion",
    eyebrow: "AI infrastructure",
    metric: "10M",
    metricLabel: "documents stress-tested",
    tags: ["GraphRAG", "Data integrity", "Resilience"],
    callout:
      "GraphRAG helps LLMs use relationships across documents, not just isolated text matches. I built a GraphRAG pipeline that turns document collections into connected knowledge for LLM applications. Restartable processing made large ingestion jobs resilient, while testing at 10 million documents revealed an identity model limitation that needed redesign.",
  },
  {
    title: "Governed semantic access to Snowflake",
    visual: "connector",
    eyebrow: "Cloud integration",
    metric: "~12%",
    metricLabel: "less manual setup",
    tags: ["Snowflake", "Looker Studio", "Governance"],
    callout:
      "Analysts wanted Snowflake data in Looker Studio without asking an engineer for every query or getting broad warehouse access. I built the metadata, schema and query layers behind that flow. Earlier validation cut manual setup by about 12% and integration failures by roughly 5%.",
  },
  {
    title: "AI-assisted family tree construction",
    visual: "relationships",
    eyebrow: "Applied AI",
    metric: "~40%",
    metricLabel: "less manual setup",
    tags: ["GPT-4", "Claude", "Human in the loop"],
    callout:
      "Building a family tree from scattered records takes a lot of manual work, and the source data is often unclear. I used GPT-4 and Claude to suggest relationships, but left the final call with the person building the tree. Setup effort dropped by about 40%.",
  },
  {
    title: "Automating regulatory application workflows",
    visual: "workflow",
    eyebrow: "Workflow automation",
    metric: "30%",
    metricLabel: "more throughput",
    tags: ["APIs", "Compliance", "Data pipelines"],
    callout:
      "APEGA needed to process applications faster, but the audit trail was not negotiable. I automated parts of the workflow through APIs and reworked the supporting pipelines. Throughput improved by 30%, and the existing integrity checks stayed in place.",
  },
];

export const experience = [
  {
    title: "Senior Backend Engineer, Contractor",
    employer: "Qindred",
    period: "Feb 2025 to Nov 2025",
    start: "2025-02-01",
    end: "2025-12-01",
    summary: "I built the backend for an AI assisted family tree product. GPT-4 and Claude suggested relationships for people to confirm, which cut setup effort by about 40%.",
    tools: ["Python", "GPT-4", "Claude", "Azure", "REST APIs"],
  },
  {
    title: "Software Developer",
    employer: "APEGA",
    period: "Dec 2022 to Dec 2024",
    start: "2022-12-01",
    end: "2025-01-01",
    summary: "I turned policy heavy application steps into API workflows the team could maintain. Processing moved 30% faster, and every decision still had the audit trail it needed.",
    tools: ["C#", ".NET", "React", "TypeScript", "Azure"],
  },
  {
    title: "Developer",
    employer: "Spartan Controls",
    period: "Jul 2021 to Nov 2022",
    start: "2021-07-01",
    end: "2022-12-01",
    summary: "I rebuilt the React interfaces operations teams used for IoT data and looked after the .NET services underneath them. Better release automation cut deployment time by 15%.",
    tools: ["React", ".NET", "AWS", "Jenkins", "Docker"],
  },
  {
    title: "Cloud Developer / Data Analyst",
    employer: "Parkland Fuel Corporation",
    period: "May 2020 to Jan 2021",
    start: "2020-05-01",
    end: "2021-02-01",
    summary: "I pulled customer data out of five disconnected sources and made it useful through Python, SQL and forecasting. The work informed more than 15 commercial decisions.",
    tools: ["Python", "SQL", "Tableau", "Power BI"],
  },
  {
    title: "Web Applications Developer",
    employer: "Alberta Health Services",
    period: "Feb 2019 to Apr 2020",
    start: "2019-02-01",
    end: "2020-05-01",
    summary: "I built a public booking app with React, TypeScript and a serverless AWS backend. It handled more than 500 appointments a day and stayed at 99.9% uptime.",
    tools: ["React", "TypeScript", "AWS", "Node.js"],
  },
];

export const howIWork = [
  {
    title: "Diagnose",
    text: "I do not start by recommending a model. First I need to know what someone is trying to improve and what happens if the system gets it wrong.",
  },
  {
    title: "Clarity",
    text: "Models guess. People using them should know when the answer is shaky and when they need to step in.",
  },
  {
    title: "Discipline",
    text: "I build in retries, logs and clear handling for bad input. That is what keeps a useful prototype running after launch.",
  },
];

export const about = {
  education: {
    degree: "B.Sc. in Computer Science",
    school: "University of Calgary",
    logo: `${import.meta.env.BASE_URL}logos/uofc.png`,
  },
  certifications: [
    {
      name: "Solutions Architect, Associate",
      issuer: "AWS Certified",
      logo: `${import.meta.env.BASE_URL}logos/aws.png`,
    },
    {
      name: "Cloud Developer",
      issuer: "Google Cloud Certified",
      logo: `${import.meta.env.BASE_URL}logos/gcp.png`,
    },
    { issuer: "IBM", logo: `${import.meta.env.BASE_URL}logos/ibm.svg` },
    { issuer: "Claude", logo: `${import.meta.env.BASE_URL}logos/claude.svg` },
  ],
  interests: [
    { label: "Tennis", icon: "tennis" },
    { label: "Soccer", icon: "soccer" },
    { label: "Chess", icon: "chess" },
    { label: "Gaming", icon: "gaming" },
    { label: "Fitness", icon: "fitness" },
  ],
  sideProjects: [
    {
      title: "AI Resume Optimizer",
      stack: ["python", "mysql", "ollama", "mistral"].map((n) => ({
        name: n,
        logo: `${import.meta.env.BASE_URL}logos/${n}.svg`,
      })),
      link: "https://resumeoptimizerv1.streamlit.app/optimize",
    },
  ],
};
