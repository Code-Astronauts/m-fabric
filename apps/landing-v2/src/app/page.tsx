import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { History } from "@/components/History";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Partnership } from "@/components/Partnership";
import { Audience } from "@/components/Audience";
import { Approach } from "@/components/Approach";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <History />
      <About />
      <Projects />
      <Partnership />
      <Audience />
      <Approach />
      <WhatWeDo />
      <Contacts />
      <Footer />
    </main>
  );
}
