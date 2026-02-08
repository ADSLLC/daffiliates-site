import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dAffiliates - Affiliate Marketing for Shopify",
  description:
    "Run a powerful affiliate program on your Shopify store. Campaign-based discounts, automatic sales tracking, commission management, and self-service affiliate portals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
