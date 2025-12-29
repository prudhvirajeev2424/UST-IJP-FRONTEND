import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // clsx expects variadic args; spread the inputs array
  return twMerge(clsx(...inputs));
}