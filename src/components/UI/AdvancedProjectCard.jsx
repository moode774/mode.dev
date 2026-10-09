import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { ArrowUpRight, TerminalSquare } from 'lucide-react';

export const AdvancedProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const xPct = useMotionValue(0);
  const yPct = useMotionValue(0);
  const xSpring = useSpring(xPct, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(yPct, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    xPct.set((e.clientX - rect.left) / rect.width - 0.5);
    yPct.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    xPct.set(0);
    yPct.set(0);
  };

  const tags = index % 2 === 0 ? ['React', 'Node.js', 'Framer'] : ['Next.js', 'TypeScript', 'Tailwind'];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsHovered(false);
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1500, display: 'flex', height: '100%' }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          position: 'relative',
          width: '100%',
          background: '#ffffff',
          borderRadius: '26px',
          border: '1px solid #ece7dd',
          padding: '2.2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '360px',
          overflow: 'hidden',
          boxShadow: isHovered
            ? '0 30px 60px -18px rgba(80, 60, 160, 0.22), 0 4px 14px rgba(0,0,0,0.05)'
            : '0 10px 30px -12px rgba(0,0,0,0.08)',
          transition: 'box-shadow 0.4s ease',
        }}
      >
        {/* Ticket-stub top edge */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 5,
          background: isHovered
            ? 'linear-gradient(90deg, #8b5cf6, #4f46e5)'
            : 'linear-gradient(90deg, #e6e0f8, #efecf9)',
          transition: 'background 0.4s ease',
        }} />

        {/* INNER FLASHLIGHT */}
        <motion.div
          style={{
            background: useMotionTemplate`
              radial-gradient(
                550px circle at ${mouseX}px ${mouseY}px,
                rgba(139, 92, 246, 0.1),
                transparent 80%
              )
            `,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            position: 'absolute', inset: 0, pointerEvents: 'none',
          }}
        />

        {/* TOP ICONS */}
        <div style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.4rem' }}>
            <motion.div
              style={{
                width: 58, height: 58, borderRadius: 18,
                background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(79,70,229,0.06))',
                border: '1px solid rgba(139,92,246,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
              whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
              transition={{ duration: 0.5 }}
            >
              <TerminalSquare size={26} color="#7c3aed" strokeWidth={1.8} />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.12, rotate: 45 }}
              style={{
                width: 44, height: 44, borderRadius: '50%',
                background: isHovered ? '#8b5cf6' : '#f6f3ec',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', border: `1px solid ${isHovered ? '#8b5cf6' : '#ece7dd'}`,
                transition: 'background 0.3s, border-color 0.3s',
              }}
            >
              <ArrowUpRight size={20} color={isHovered ? '#ffffff' : '#1d1d1f'} strokeWidth={2} />
            </motion.div>
          </div>

          <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#1d1d1f', marginBottom: '0.9rem', margin: 0, letterSpacing: '-0.02em', transform: 'translateZ(35px)' }}>
            {project.name}
          </h3>
          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#6e6e73', margin: 0, fontWeight: 500, transform: 'translateZ(25px)' }}>
            {project.description}
          </p>
        </div>

        {/* TECH STACK TAGS */}
        <div style={{ display: 'flex', gap: '0.55rem', marginTop: '2.2rem', transform: 'translateZ(40px)', flexWrap: 'wrap' }}>
          {tags.map((tag, i) => (
            <span
              key={i}
              style={{
                padding: '0.38rem 0.95rem', borderRadius: '100px',
                background: 'rgba(139, 92, 246, 0.08)', border: '1px solid rgba(139, 92, 246, 0.18)',
                color: '#7c3aed', fontSize: '0.82rem', fontWeight: 700,
                fontFamily: 'var(--font-mono)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
