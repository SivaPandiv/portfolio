import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function InteractiveAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      style={{
        width: '100%',
        height: '400px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5,
        marginTop: '2rem'
      }}
    >
      {/* 
        This Spline scene features a 3D workspace. 
        You can replace this URL with your own Spline scene 
        of a character typing at a laptop with 'Look At' mouse tracking enabled! 
      */}
      <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      
      {/* Floating UI Elements for the tech vibe */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          background: 'rgba(56, 189, 248, 0.1)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          backdropFilter: 'blur(10px)',
          color: '#38bdf8',
          fontFamily: 'monospace',
          fontSize: '0.8rem',
          pointerEvents: 'none'
        }}
      >
        tracking: active
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          background: 'rgba(52, 211, 153, 0.1)',
          border: '1px solid rgba(52, 211, 153, 0.3)',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          backdropFilter: 'blur(10px)',
          color: '#34d399',
          fontFamily: 'monospace',
          fontSize: '0.8rem',
          pointerEvents: 'none'
        }}
      >
        status: compiling...
      </motion.div>
    </motion.div>
  );
}
