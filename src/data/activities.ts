export type Activity = {
  id: string;
  candidate: string;
  position: string;
  status: string;
  time: string;
};

export const activities: Activity[] = [
  { id: "1", candidate: "Zamira Peterson", position: "Developer III - B3", status: "Allocated", time: "Now" },
  { id: "2", candidate: "Andrea Peterson", position: "Developer III - B3", status: "Allocated", time: "1m" },
  { id: "3", candidate: "John Mathews", position: "Developer II - B2", status: "Allocated", time: "2d" },
  { id: "4", candidate: "Sophia Williams", position: "Developer I - B1", status: "Rejected", time: "3d" },
];
