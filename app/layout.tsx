import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RootProvider from "./providers/RootProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EventTiz",
  description: "Make events and share happy movements.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${space_grotesk.className}`}>
        <RootProvider>
          <ToastContainer />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
