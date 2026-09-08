import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOVAARA — Move. Arrive. Belong.",
  description: "A calmer way to plan an international move.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
