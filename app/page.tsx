import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Accomplishments from "./components/Accomplishments";
import VideoSection from "./components/VideoSection";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Accomplishments />
        <VideoSection />
        <Contact />
      </main>
    </>
  );
}
