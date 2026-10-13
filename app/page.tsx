import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Impact />
        <CaseStudies />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
