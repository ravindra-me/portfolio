export type Link = { label: string; href: string };

export type Metric = { value: string; label: string };

export type CaseStudy = {
  id: string;
  company: string;
  period: string;
  title: string;
  problem?: string;
  action: string;
  result: string;
  tags: string[];
};

export type Role = {
  period: string;
  title: string;
  company: string;
  summary: string;
};

export type SkillGroup = { name: string; items: string[] };

export const profile = {
  name: "Ravindra Singh",
  role: "Senior Frontend Engineer",
  location: "Bengaluru, India",
  headline: "I build fast, accessible web apps — and the design systems behind them.",
  intro:
    "Frontend engineer working in React, Next.js and TypeScript. I've shipped analytics dashboards for 500+ enterprise clients, a component library used by four product teams, and performance work that cut load times by 40%.",
  email: "ravindrarajpoot9628172@gmail.com",
  links: {
    linkedin: { label: "linkedin.com/in/ravindra-me", href: "https://www.linkedin.com/in/ravindra-me/" },
    github: { label: "github.com/ravindra-me", href: "https://github.com/ravindra-me" },
  },
  availability: "Open to Senior Frontend and frontend-heavy full stack roles.",
  workMode: "Bengaluru-based · open to remote, hybrid or office.",
};

export const metrics: Metric[] = [
  { value: "−40%", label: "Largest Contentful Paint on media-heavy dashboards" },
  { value: "4 teams", label: "building on the component library I architected" },
  { value: "500+", label: "enterprise clients on dashboards I migrated to React" },
  { value: "80%", label: "automated test coverage with Jest and React Testing Library" },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "performance",
    company: "BLKBOX.ai",
    period: "2024–2026",
    title: "Making media-heavy dashboards fast",
    problem:
      'Ad dashboards loaded large creative previews and data tables up front, and Core Web Vitals sat in "Needs Improvement."',
    action:
      "Moved data fetching to React Server Components, split heavy routes, lazy-loaded below-the-fold media and memoised expensive lists. Added a Lighthouse CI check on every pull request to catch regressions.",
    result:
      'LCP dropped 40% and the pages moved into the "Good" Core Web Vitals band. The CI check stopped three major regressions before release.',
    tags: ["Next.js", "React Server Components", "Lighthouse CI"],
  },
  {
    id: "design-system",
    company: "BLKBOX.ai",
    period: "2024–2026",
    title: "A component library four teams build on",
    problem:
      "Each product team styled its own buttons, forms and tables, so the UI drifted and the same components were rebuilt again and again.",
    action:
      "Architected a shared React + MUI v5 component library with TypeScript, documented in Storybook, inside a modular monorepo so teams could consume shared UI packages.",
    result:
      "Adopted by 4 product teams. Feature delivery sped up by about 25% and cross-team code duplication fell by 35%.",
    tags: ["React", "MUI v5", "Storybook", "Monorepo"],
  },
  {
    id: "oms",
    company: "BLKBOX.ai",
    period: "2024–2026",
    title: "Order management and creative marketplace UI",
    problem:
      "More than 10,000 ad creatives moved through production by hand, with little visibility into where each order stood.",
    action:
      "Built the frontend for an order management system with an integrated marketplace: order tracking, asset workflows, live status updates over WebSockets, and ML-driven asset recommendations surfaced in the creation flow.",
    result:
      "Asset lifecycle went from weeks to days, and live status updates cut related support tickets by 22%.",
    tags: ["React", "TypeScript", "WebSockets"],
  },
  {
    id: "analytics",
    company: "Sigmoid Analytics",
    period: "2021–2023",
    title: "Analytics dashboards for 500+ enterprise clients",
    problem: "Legacy dashboards struggled with complex, multi-dimensional datasets of 100,000+ rows.",
    action:
      "Led the migration to React and ECharts, refactored data fetching, moved part of the data layer from REST to GraphQL to stop over-fetching, and added multi-language support.",
    result:
      "Rendering 50% faster, large-dataset load times down 60%, over-fetching down 45%, and the product launched in 5 new markets.",
    tags: ["React", "Redux Toolkit", "ECharts", "GraphQL", "i18n"],
  },
  {
    id: "conversational",
    company: "Sigmoid Analytics",
    period: "2021–2023",
    title: "Conversational analytics interface",
    action:
      "Built a chat-style interface in Next.js that let users query their data in plain language instead of building reports by hand.",
    result: "Customer support efficiency improved by 40%.",
    tags: ["Next.js", "Conversational UI"],
  },
];

export const experience: Role[] = [
  {
    period: "Jun 2026 – Present",
    title: "Senior Software Engineer",
    company: "Ascendion",
    summary: "Internal tooling, moving legacy code to a modular architecture, and AI agent workflows.",
  },
  {
    period: "Jan 2024 – Jun 2026",
    title: "Senior Frontend Developer",
    company: "BLKBOX.ai",
    summary:
      "Performance, design system, order management and marketplace UI, accessibility (WCAG 2.1, Lighthouse accessibility 95+).",
  },
  {
    period: "Sep 2021 – Dec 2023",
    title: "Software Development Engineer",
    company: "Sigmoid Analytics",
    summary:
      "Enterprise analytics dashboards, budget planning tool, Storybook design system across 3 product lines.",
  },
  {
    period: "Aug 2020 – Aug 2021",
    title: "Software Development Intern",
    company: "AltCampus",
    summary:
      "Reusable React components and student progress tracking for an education platform with 1,000+ students.",
  },
];

export const skills: SkillGroup[] = [
  { name: "Core", items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML", "CSS"] },
  {
    name: "State and data",
    items: ["Redux Toolkit", "Zustand", "React Query", "SWR", "REST", "GraphQL", "WebSockets"],
  },
  {
    name: "UI and design systems",
    items: ["MUI v5", "Tailwind CSS", "Styled Components", "SASS", "Storybook", "Monorepos"],
  },
  {
    name: "Quality and performance",
    items: ["Jest", "React Testing Library", "Playwright", "Core Web Vitals", "Lighthouse", "Webpack", "Vite", "WCAG 2.1"],
  },
  { name: "Also comfortable with", items: ["Node.js", "Python (FastAPI)", "SQL", "MongoDB"] },
];
