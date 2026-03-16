import Image from "next/image";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Partnership } from "@/components/Partnership";
import { Audience } from "@/components/Audience";
import { Approach } from "@/components/Approach";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Contacts } from "@/components/Contacts";

export default function Home() {
  return (
    <>
      {/* Header is outside any overflow-x-hidden parent — required for sticky to work */}
      <Header />

      {/* Page sections — overflow-x-hidden clips bleeding illustrations */}
      <main className="min-h-screen overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Partnership />
        <Audience />
        <Approach />
        <WhatWeDo />
        <Contacts />
      </main>
    </>
  );
}
