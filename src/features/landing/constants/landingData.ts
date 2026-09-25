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
