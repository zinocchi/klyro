export interface DepartmentData {
  id: string;
  label: string;
  lead: {
    name: string;
    role: string;
    image: string;
  };
  leftCard: {
    name: string;
    role: string;
    metric: string;
    avatar: string;
  };
  rightCard: {
    name: string;
    role: string;
    metric: string;
    avatar: string;
  };
  promptText: string;
  accentBadge: string;
}

export const DEPARTMENTS_DATA: Record<string, DepartmentData> = {
  marketing: {
    id: "marketing",
    label: "Marketing",
    lead: {
      name: "Marcus Vance",
      role: "Growth & Campaign Lead",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    },
    leftCard: {
      name: "Leo, Social Strategist",
      role: "Campaign Pipeline",
      metric: "14 ads launched",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    },
    rightCard: {
      name: "Maya, Content Creator",
      role: "Copy & Asset Review",
      metric: "32 assets approved",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    },
    promptText:
      "Deploy the Q4 product launch campaign and coordinate cross-channel deliverables.",
    accentBadge: "Campaign Ready",
  },
  it: {
    id: "it",
    label: "IT",
    lead: {
      name: "Emma Watson",
      role: "IT & Infrastructure Lead",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    },
    leftCard: {
      name: "Hugo, Ticket Triage",
      role: "Security & Bug Patrol",
      metric: "95 tickets classified",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    },
    rightCard: {
      name: "Kate, Incident Responder",
      role: "Server Reliability",
      metric: "45 incidents resolved",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    },
    promptText:
      "Triage today's tickets and handle any critical system incidents right away.",
    accentBadge: "99.9% Uptime",
  },
  operations: {
    id: "operations",
    label: "Operations",
    lead: {
      name: "David Chen",
      role: "Operations Director",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80",
    },
    leftCard: {
      name: "Tariq, Logistics Sync",
      role: "Supply Fulfillment",
      metric: "128 shipments tracked",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80",
    },
    rightCard: {
      name: "Elena, Vendor Audit",
      role: "Compliance Checker",
      metric: "18 contracts cleared",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80",
    },
    promptText:
      "Streamline warehouse fulfillment and automate cross-vendor procurement status.",
    accentBadge: "All Clear",
  },
  product: {
    id: "product",
    label: "Product",
    lead: {
      name: "Sarah Lin",
      role: "Head of Product",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
    },
    leftCard: {
      name: "Kai, Backlog Curator",
      role: "Story Points Tracker",
      metric: "42 user stories ready",
      avatar:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80",
    },
    rightCard: {
      name: "Aria, User Research",
      role: "Feature Feedback",
      metric: "65 feedback analyzed",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    },
    promptText:
      "Prioritize Sprint #44 backlog items and align design specs with engineering.",
    accentBadge: "Sprint On Track",
  },
  sales: {
    id: "sales",
    label: "Sales",
    lead: {
      name: "Alexander Roy",
      role: "VP of Enterprise Sales",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=80",
    },
    leftCard: {
      name: "Nate, Lead Discovery",
      role: "Outbound Pipeline",
      metric: "210 qualified leads",
      avatar:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=80",
    },
    rightCard: {
      name: "Chloe, Deal Closer",
      role: "Contract Negotiations",
      metric: "$420k pipeline closed",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    },
    promptText:
      "Forecast quarterly ARR closing deals and assign tier-1 enterprise accounts.",
    accentBadge: "124% Quota",
  },
  design: {
    id: "design",
    label: "Design",
    lead: {
      name: "Zoe Kravitz",
      role: "Design System Lead",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=80",
    },
    leftCard: {
      name: "Kenji, UI Architect",
      role: "Component Library",
      metric: "80 tokens synchronized",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    },
    rightCard: {
      name: "Sasha, Prototype QA",
      role: "Micro-interactions",
      metric: "12 flows approved",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    },
    promptText:
      "Publish Klyro Design System v2.0 and review mobile responsive prototypes.",
    accentBadge: "Pixel Perfect",
  },
};

// Data cadangan untuk mockup board
export const HERO_TAGS = [
  { id: "marketing", label: "Marketing", active: true },
  { id: "product", label: "Product", active: false },
  { id: "it", label: "IT", active: false },
  { id: "operations", label: "Operations", active: false },
  { id: "sales", label: "Sales", active: false },
  { id: "design", label: "Design", active: false },
];

export const MOCK_BOARD_TASKS = [
  {
    id: "task-1",
    title: "Q4 Roadmap Strategy",
    tag: "Strategy",
    tagColor: "bg-indigo-100 text-klyro-blue",
    status: "In Progress",
    statusColor: "bg-amber-500 text-white",
    assignee: "Sarah K.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "task-2",
    title: "Revamp Landing Page Assets",
    tag: "Design",
    tagColor: "bg-emerald-100 text-klyro-turquoise",
    status: "Done",
    statusColor: "bg-klyro-turquoise text-white font-semibold",
    assignee: "Alex M.",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "task-3",
    title: "Sync with Express Backend API",
    tag: "Dev",
    tagColor: "bg-blue-100 text-klyro-blue",
    status: "Working on it",
    statusColor: "bg-klyro-blue text-white",
    assignee: "David R.",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",
  },
];

export interface WorkflowItem {
  id: string;
  tabLabel: string;
  headline: string;
  highlightText: string;
  description: string;
  columns: {
    title: string;
    count: number;
    cards: {
      title: string;
      tag: string;
      tagBg: string;
      priority: string;
      priorityColor: string;
    }[];
  }[];
}

export const WORKFLOWS_DATA: WorkflowItem[] = [
  {
    id: "engineering",
    tabLabel: "Engineering",
    headline: "Sprint backlogs, bug triage, and releases.",
    highlightText: "Delivered.",
    description:
      "Empower developer squads with flexible Kanban columns, GitHub commit tracking, and instant bottleneck discovery.",
    columns: [
      {
        title: "Sprint Backlog",
        count: 4,
        cards: [
          {
            title: "Optimize DB Queries",
            tag: "Backend",
            tagBg: "bg-indigo-50 text-klyro-blue",
            priority: "High",
            priorityColor: "text-amber-600 bg-amber-50",
          },
          {
            title: "Setup Redis PubSub",
            tag: "Infra",
            tagBg: "bg-slate-100 text-slate-700",
            priority: "Medium",
            priorityColor: "text-blue-600 bg-blue-50",
          },
        ],
      },
      {
        title: "In Review",
        count: 2,
        cards: [
          {
            title: "JWT Auth Interceptor",
            tag: "Security",
            tagBg: "bg-emerald-50 text-klyro-turquoise",
            priority: "Urgent",
            priorityColor: "text-rose-600 bg-rose-50",
          },
        ],
      },
      {
        title: "Shipped",
        count: 18,
        cards: [
          {
            title: "Prisma v6 Migration",
            tag: "Database",
            tagBg: "bg-purple-50 text-purple-700",
            priority: "Done",
            priorityColor: "text-emerald-600 bg-emerald-50",
          },
        ],
      },
    ],
  },
  {
    id: "product",
    tabLabel: "Product & Design",
    headline: "User stories, wireframes, and design systems.",
    highlightText: "Aligned.",
    description:
      "Bridge designers and PMs seamlessly. Turn customer feedback into clickable specs and prioritized roadmaps.",
    columns: [
      {
        title: "Ideation",
        count: 3,
        cards: [
          {
            title: "Kanban Drag Micro-copy",
            tag: "UX Research",
            tagBg: "bg-amber-50 text-amber-700",
            priority: "High",
            priorityColor: "text-amber-600 bg-amber-50",
          },
        ],
      },
      {
        title: "Design Specs",
        count: 5,
        cards: [
          {
            title: "Figma Dark Mode Tokens",
            tag: "Design System",
            tagBg: "bg-purple-50 text-purple-700",
            priority: "In Progress",
            priorityColor: "text-blue-600 bg-blue-50",
          },
          {
            title: "Board Card Density Switch",
            tag: "UI",
            tagBg: "bg-indigo-50 text-klyro-blue",
            priority: "Normal",
            priorityColor: "text-slate-600 bg-slate-100",
          },
        ],
      },
      {
        title: "Approved",
        count: 12,
        cards: [
          {
            title: "Interactive Hero V2",
            tag: "Prototype",
            tagBg: "bg-emerald-50 text-klyro-turquoise",
            priority: "Done",
            priorityColor: "text-emerald-600 bg-emerald-50",
          },
        ],
      },
    ],
  },
  {
    id: "marketing",
    tabLabel: "Marketing",
    headline: "Product launches, content calendars, and ads.",
    highlightText: "Synchronized.",
    description:
      "Track campaigns across channels. Move articles from drafting, legal review, to live publishing without missing deadlines.",
    columns: [
      {
        title: "Content Ideas",
        count: 6,
        cards: [
          {
            title: "How Modern PMs Use Kanban",
            tag: "Blog",
            tagBg: "bg-sky-50 text-sky-700",
            priority: "Medium",
            priorityColor: "text-blue-600 bg-blue-50",
          },
        ],
      },
      {
        title: "In Production",
        count: 3,
        cards: [
          {
            title: "Twitter Launch Thread",
            tag: "Social",
            tagBg: "bg-blue-50 text-blue-600",
            priority: "Urgent",
            priorityColor: "text-rose-600 bg-rose-50",
          },
          {
            title: "Product Hunt Video Teaser",
            tag: "Video",
            tagBg: "bg-emerald-50 text-klyro-turquoise",
            priority: "High",
            priorityColor: "text-amber-600 bg-amber-50",
          },
        ],
      },
      {
        title: "Published",
        count: 24,
        cards: [
          {
            title: "Product Hunt Launch Day",
            tag: "Campaign",
            tagBg: "bg-indigo-50 text-klyro-blue",
            priority: "Done",
            priorityColor: "text-emerald-600 bg-emerald-50",
          },
        ],
      },
    ],
  },
  {
    id: "operations",
    tabLabel: "Operations & HR",
    headline: "Employee onboarding, audits, and logistics.",
    highlightText: "Standardized.",
    description:
      "Automate repeatable team processes. Give everyone full transparency on company-wide OKRs and resource requests.",
    columns: [
      {
        title: "Incoming Requests",
        count: 2,
        cards: [
          {
            title: "MacBook Pro M3 Procurement",
            tag: "Hardware",
            tagBg: "bg-slate-100 text-slate-700",
            priority: "Normal",
            priorityColor: "text-slate-600 bg-slate-100",
          },
        ],
      },
      {
        title: "Processing",
        count: 4,
        cards: [
          {
            title: "Senior Backend Onboarding",
            tag: "People",
            tagBg: "bg-emerald-50 text-klyro-turquoise",
            priority: "High",
            priorityColor: "text-amber-600 bg-amber-50",
          },
        ],
      },
      {
        title: "Completed",
        count: 41,
        cards: [
          {
            title: "Q3 SOC2 Security Audit",
            tag: "Compliance",
            tagBg: "bg-purple-50 text-purple-700",
            priority: "Done",
            priorityColor: "text-emerald-600 bg-emerald-50",
          },
        ],
      },
    ],
  },
];
