export const HERO_TAGS = [
  { id: "marketing", label: "Marketing", active: true },
  { id: "product", label: "Product", active: false },
  { id: "engineering", label: "Engineering", active: false },
  { id: "operations", label: "Operations", active: false },
  { id: "design", label: "Design", active: false },
  { id: "hr", label: "HR", active: false },
];

export const MOCK_BOARD_TASKS = [
  {
    id: "task-1",
    title: "Q4 Roadmap Strategy",
    tag: "Strategy",
    tagColor: "bg-monday-lavender text-monday-ink",
    status: "In Progress",
    statusColor: "bg-monday-apricot text-white",
    assignee: "Sarah K.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "task-2",
    title: "Revamp Landing Page Assets",
    tag: "Design",
    tagColor: "bg-monday-sky text-monday-ink",
    status: "Done",
    statusColor: "bg-monday-mint text-monday-forest font-semibold",
    assignee: "Alex M.",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "task-3",
    title: "Sync with Express Backend API",
    tag: "Dev",
    tagColor: "bg-monday-periwinkle text-monday-violet",
    status: "Working on it",
    statusColor: "bg-monday-cornflower text-white",
    assignee: "David R.",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",
  },
];
