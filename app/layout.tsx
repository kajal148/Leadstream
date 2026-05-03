import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Get Your Instant Quote | Aqua Brother",
  description:
    "Aqua Brother - Auckland's trusted exterior cleaning service. Get an instant online quote for house washing, window cleaning, gutter cleaning, roof treatment, and more.",
  keywords:
    "aqua brother, water blasting, house washing, auckland, exterior cleaning, instant quote",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
