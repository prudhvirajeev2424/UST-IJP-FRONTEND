/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      card: "hsl(var(--card))",
      "card-foreground": "hsl(var(--card-foreground))",
      popover: "hsl(var(--popover))",
      "popover-foreground": "hsl(var(--popover-foreground))",
      primary: "hsl(var(--primary))",
      "primary-foreground": "hsl(var(--primary-foreground))",
      secondary: "hsl(var(--secondary))",
      "secondary-foreground": "hsl(var(--secondary-foreground))",
      success: {
        DEFAULT: "#01B27C",
        foreground: "hsl(var(--success-foreground))",
      },
      warning: {
        DEFAULT: "#FFBF00",
        foreground: "hsl(var(--warning-foreground))",
      },
      danger: {
        DEFAULT: "#FC6A59",
        foreground: "hsl(var(--danger-foreground))",
      },
      muted: "hsl(var(--muted))",
      "muted-foreground": "hsl(var(--muted-foreground))",
      accent: "hsl(var(--accent))",
      "accent-foreground": "hsl(var(--accent-foreground))",
      destructive: "hsl(var(--destructive))",
      "destructive-foreground": "hsl(var(--destructive-foreground))",
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      overlay: "hsl(var(--overlay))",
      // custom status
      "status-allocated": "hsl(var(--status-allocated))",
      "status-shortlisted": "hsl(var(--status-shortlisted))",
      "status-rejected": "hsl(var(--status-rejected))",
      // chart
      "chart-accepted": "hsl(var(--chart-accepted))",
      "chart-shortlisted": "hsl(var(--chart-shortlisted))",
      "chart-rejected": "hsl(var(--chart-rejected))",
    },
    borderRadius: {
      DEFAULT: "var(--radius)",
    },
  },
};
export const plugins = [];
