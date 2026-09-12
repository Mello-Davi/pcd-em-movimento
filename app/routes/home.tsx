import type { Route } from "./+types/home";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Project } from "../components/Project";

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
    </>
  );
}
