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
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Partnership />
      <Audience />
      <Approach />
      <WhatWeDo />
      <Contacts />
    </main>
  );
}
