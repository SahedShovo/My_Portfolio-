import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Education from "@/components/sections/education";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import IntroVideo from "@/components/sections/intro-video";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntroVideo />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
