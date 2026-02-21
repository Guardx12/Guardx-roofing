import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sussex Roofing Specialists | Trusted Roofers in West Sussex",
  description:
    "Premium roofing services across West Sussex. Repairs, replacements, flat roofs and chimney work — fast quotes and tidy workmanship.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
