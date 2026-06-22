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

const SectionFade = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: '-80px' }}
    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <>
      {/* Global aurora background blobs */}
      <div className="aurora-blob aurora-1" />
      <div className="aurora-blob aurora-2" />
      <div className="aurora-blob aurora-3" />

      {/* Grid overlay */}
      <div className="bg-grid" />

      {/* Interactive layers */}
      <ParticleBackground />
      <CursorGlow />
      <ClickEffect />
      <RobotCursor />
      <ScrollProgress />

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Navbar />
        <main>
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
