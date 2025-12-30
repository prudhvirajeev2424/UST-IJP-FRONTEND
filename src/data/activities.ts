export type Activity = {
  id: string;
  candidate: string;
  position: string;
  status: string;
  time: string;
};

export const activities: Activity[] = [
  { id: "1", candidate: "Eric Warne", position: "Developer I - A1", status: "Allocated", time: "12 hrs ago" },
  { id: "2", candidate: "James Albertson", position: "Product Manager", status: "Allocated", time: "Yesterday" },
  { id: "3", candidate: "James Albertson", position: "Product Manager", status: "Rejected", time: "3 days ago" },
  { id: "4", candidate: "James Albertson", position: "Product Designer", status: "Rejected", time: "3 days ago" },

];
