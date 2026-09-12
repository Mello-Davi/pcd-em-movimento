import type { Route } from "./+types/home";
import { Hero } from "../components/features/Hero";
import { About } from "../components/features/About";
import { Project } from "../components/features/Project";
import { Location } from "../components/features/Location";
import { Testimonials } from "../components/features/Testimonials";
import { Contact } from "../components/features/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PCD em Movimento" },
    { name: "description", content: "Movimento que transforma vidas através da canoa havaiana." },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Location />
      <Testimonials />
      <Contact />
    </>
  );
}
