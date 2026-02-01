import "./globals.css";

export const metadata = {
  title: "Wezesha Binti – Kigoma Hub (Demo)",
  description: "SIDO Incubation & SME Tracking System (Demo)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
