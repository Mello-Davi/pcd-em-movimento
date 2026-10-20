import { Hero } from "./components/features/Hero";
import { About } from "./components/features/About";
import { Project } from "./components/features/Project";
import { Benefits } from "./components/features/Benefits";
import { Location } from "./components/features/Location";
import { Testimonials } from "./components/features/Testimonials";
import { Participate } from "./components/features/Participate";
import { Contact } from "./components/features/Contact";

export default function HomePage() {
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
