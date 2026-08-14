import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const NOISE_TEXTURE =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='160' height='160' filter='url(%23n)' opacity='0.55'/></svg>";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink font-body text-white">
      {/* subtle film grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[80] opacity-[0.045] mix-blend-overlay"
        style={{ backgroundImage: `url("${NOISE_TEXTURE}")` }}
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
