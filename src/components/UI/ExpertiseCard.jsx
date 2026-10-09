import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ExpertiseCard = ({ icon: Icon, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      style={{
        background: isHovered ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(30px)',
        border: '1px solid',
        borderColor: isHovered ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.8)',
        borderRadius: '32px',
        padding: '2.5rem',
        boxShadow: isHovered 
          ? '0 20px 40px -10px rgba(139,92,246,0.1), inset 0 1px 0 rgba(255,255,255,1)'
          : '0 10px 30px -10px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div style={{
        position: 'absolute', top: -30, right: -30, width: 120, height: 120,
        background: isHovered ? 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)' : 'transparent',
        borderRadius: '50%',
        transition: 'all 0.5s ease',
      }} />

      <div style={{
        width: 64, height: 64, borderRadius: 20,
        background: isHovered ? 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05))' : 'rgba(243,244,246,0.8)',
        border: '1px solid',
        borderColor: isHovered ? 'rgba(139,92,246,0.2)' : 'rgba(0,0,0,0.03)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: isHovered ? '0 8px 20px rgba(139,92,246,0.12)' : 'none',
        transition: 'all 0.4s ease'
      }}>
        <Icon size={28} color={isHovered ? "#7c3aed" : "#6b7280"} strokeWidth={1.8} style={{ transition: 'color 0.3s ease' }} />
      </div>

      <div>
        <h4 style={{ margin: '0 0 0.75rem 0', fontSize: '1.25rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em' }}>
          {title}
        </h4>
        <p style={{ margin: 0, color: '#6b7280', fontSize: '1rem', lineHeight: 1.7, fontWeight: 500 }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};
