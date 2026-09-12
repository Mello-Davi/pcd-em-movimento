import type { Route } from "./+types/home";
import { Hero } from "../components/features/Hero";
import { About } from "../components/features/About";
import { Project } from "../components/features/Project";
import { Benefits } from "../components/features/Benefits";
import { Location } from "../components/features/Location";
import { Testimonials } from "../components/features/Testimonials";
import { Participate } from "../components/features/Participate";
import { Contact } from "../components/features/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PCD em Movimento | Canoa Havaiana Adaptada" },
    { name: "description", content: "Promovendo inclusão, autonomia e qualidade de vida para pessoas com deficiência através da canoa havaiana." },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Benefits />
      <Location />
      <Testimonials />
      <Participate />
      <Contact />
    </>
  );
}
