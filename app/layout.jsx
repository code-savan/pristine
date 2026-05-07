import "./globals.css";
import "./fonts.css";
import { Toaster } from "sonner";

export const metadata = {
  title: "Pristine Tech | Built to the Highest Standard",
  description: "Pristine Tech delivers high-quality, future-forward digital solutions — built with precision, purpose, and performance in mind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
