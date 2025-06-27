"use client";

import { useSession } from "next-auth/react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import DashPreview from "./components/DashPreview";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <div className="min-h-screen  overflow-x-hidden">
      <Navbar />
      <div>
        <Hero />
        <DashPreview />
        <Features />
        <Footer />
      </div>
    </div>
  );
}
