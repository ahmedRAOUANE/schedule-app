import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Schedual App",
  description: "track your tasks",
  icons: {
    icon: "/public/ScheduleIcon.svg",
    apple: "/public/ScheduleIcon.svg",
  }
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) { return children }
