import type { Route } from "./+types/home";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Project } from "../components/Project";
import { Location } from "../components/Location";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";

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
