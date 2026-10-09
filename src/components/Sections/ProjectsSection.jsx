import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { MagneticButton } from '../UI/MagneticButton';
import { AdvancedProjectCard } from '../UI/AdvancedProjectCard';

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const projectsList = t('projects.list', { returnObjects: true });
  const isMobile = useMediaQuery('(max-width: 900px)');

  return (
    <section id="projects" style={{
      position: 'relative', width: '100%',
      padding: isMobile ? '5rem 0' : '8rem 0',
      display: 'flex', justifyContent: 'center',
      background: 'transparent', overflow: 'hidden',
    }}>
      <div style={{ width: isMobile ? '92%' : '88%', maxWidth: 1280, position: 'relative', zIndex: 1 }}>

        {/* HEADER */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: isMobile ? '3.5rem' : '5rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ fontFamily: isAr ? 'var(--font-arabic-hand)' : 'var(--font-hand)', fontSize: '2rem', color: '#8b5cf6', transform: 'rotate(-2deg)', marginBottom: '0.4rem' }}>
              {isAr ? 'أعمال مختارة' : 'selected work'}
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, padding: '0.55rem 1.4rem',
              borderRadius: 100, background: '#ffffff', border: '1px solid #ece7dd',
              boxShadow: '0 6px 18px rgba(0,0,0,0.05)', marginBottom: '1.6rem',
            }}>
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ width: 8, height: 8, borderRadius: '50%', background: '#8b5cf6', boxShadow: '0 0 12px rgba(139,92,246,0.6)' }}
              />
              <span style={{ color: '#6b6b70', fontSize: '0.85rem', fontWeight: 800, letterSpacing: isAr ? 0 : '0.15em', textTransform: isAr ? 'none' : 'uppercase', fontFamily: isAr ? 'var(--font-arabic)' : 'var(--font-mono)' }}>
                {isAr ? 'أعمالي' : 'Portfolio'}
              </span>
            </div>

            <h2 style={{
              fontSize: isMobile ? 'clamp(2.2rem, 7vw, 3rem)' : 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 900, color: '#1d1d1f',
              lineHeight: 1.05, letterSpacing: isAr ? 0 : '-0.03em', margin: 0, maxWidth: 900,
            }}>
              {t('projects.title')}
              <span style={{ color: '#8b5cf6' }}>.</span>
            </h2>
          </motion.div>
        </div>

        {/* PROJECTS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))', gap: isMobile ? '1.4rem' : '2.2rem' }}>
          {Array.isArray(projectsList) && projectsList.map((project, idx) => (
            <AdvancedProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>

        {/* MAGNETIC BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: isMobile ? '3.5rem' : '5rem' }}
        >
          <MagneticButton isAr={isAr}>
            {isAr ? 'عرض المزيد على Github' : 'View more on Github'}
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
