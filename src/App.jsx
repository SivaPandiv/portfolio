import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';
import ClickEffect from './components/ClickEffect';
import RobotCursor from './components/RobotCursor';
import ScrollProgress from './components/ScrollProgress';

// Section fade wrapper
const SectionFade = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: '-80px' }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <>
      {/* Background layers */}
      <ParticleBackground />
      <CursorGlow />
      <ClickEffect />
      <RobotCursor />
      <ScrollProgress />

      {/* Page content with initial zoom-in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <Navbar />
        <main>
          {/* Hero does its own entry animation */}
          <Hero />

          <SectionFade><About /></SectionFade>
          <SectionFade><Projects /></SectionFade>
          <SectionFade><Certifications /></SectionFade>
          <SectionFade><Contact /></SectionFade>
        </main>
        <SectionFade><Footer /></SectionFade>
      </motion.div>
    </>
  );
}

export default App;
