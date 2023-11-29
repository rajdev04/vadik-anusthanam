import "./globals.css";

export const metadata = {
  title: "VaidikAnushthanam",
  description: "VaidikAnushthanam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
