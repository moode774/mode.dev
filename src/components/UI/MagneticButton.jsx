import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const MagneticButton = ({ children, icon: Icon }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ display: 'inline-block' }}
    >
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139,92,246,0.4)' }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: '1.2rem 2.8rem', borderRadius: '100px',
          background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
          border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff',
          fontSize: '1.1rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
          cursor: 'pointer', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)',
        }}
      >
        {Icon && <Icon size={22} />}
        {children}
      </motion.button>
    </motion.div>
  );
};

