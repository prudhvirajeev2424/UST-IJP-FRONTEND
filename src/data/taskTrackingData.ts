// src/data/taskTrackingData.ts

export interface Task {
  id: string;
  name: string;
  assignedBy: string;
  startDate: string;
  progress: number;
  description: string;
  comments: string;
  lastUpdated: string;
}

export const tasksData: Task[] = [
  {
    id: "1",
    name: "UI/UX Design Course",
    assignedBy: "Andrea Stephen",
    startDate: "2nd January, 2025",
    progress: 50,
    description:
      "Introduction to UI UX principles including wire framing, prototyping and design systems.",
    comments:
      "I have completed the first two modules, focusing on the third module while focusing on wireframing",
    lastUpdated: "January 2nd, 2025",
  },
  {
    id: "2",
    name: "Front end development with react",
    assignedBy: "Andrea Stephen",
    startDate: "2nd January, 2025",
    progress: 100,
    description:
      "React basics including components, props, state, and lifecycle methods.",
    comments: "All modules completed.",
    lastUpdated: "January 2nd, 2025",
  },
  {
    id: "3",
    name: "Data visualisation workshop",
    assignedBy: "Andrea Stephen",
    startDate: "2nd January, 2025",
    progress: 100,
    description:
      "Learning D3.js and charting libraries for complex data representation.",
    comments: "Workshop completed.",
    lastUpdated: "January 2nd, 2025",
  },
  {
    id: "4",
    name: "Product management essentials",
    assignedBy: "Andrea Stephen",
    startDate: "2nd January, 2025",
    progress: 100,
    description:
      "Understanding product lifecycles and agile project management.",
    comments: "Certification obtained.",
    lastUpdated: "January 2nd, 2025",
  },
  {
    id: "5",
    name: "Python Course",
    assignedBy: "Andrea Stephen",
    startDate: "2nd January, 2025",
    progress: 45,
    description:
      "Python logic, data structures, and back-end development basics.",
    comments: "Currently on the intermediate section.",
    lastUpdated: "January 2nd, 2025",
  },
  {
    id: "6",
    name: "Agile project management",
    assignedBy: "Andrea Stephen",
    startDate: "2nd January, 2025",
    progress: 0,
    description:
      "Mastering Scrum, Kanban, and Sprint planning for team leadership.",
    comments: "",
    lastUpdated: "",
  },
];