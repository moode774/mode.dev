import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Briefcase } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const ExperienceSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const jobs = t('experience.jobs', { returnObjects: true });
  const isMobile = useMediaQuery('(max-width: 900px)');

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="experience" style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: isMobile ? '5rem' : '7rem', scrollMarginTop: '1rem' }}>
      <div style={{ width: isMobile ? '92%' : '88%', maxWidth: 1000, paddingBottom: isMobile ? '5rem' : '8rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: isMobile ? '2.2rem' : '3rem' }}
        >
          <div style={{ fontFamily: isAr ? 'var(--font-arabic-hand)' : 'var(--font-hand)', fontSize: '2rem', color: '#8b5cf6', transform: 'rotate(-2deg)', marginBottom: '0.4rem' }}>
            {isAr ? 'مسيرتي المهنية' : 'the journey'}
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '0.45rem 1.2rem', marginBottom: '1.2rem',
            background: 'rgba(139, 92, 246, 0.07)', border: '1px solid rgba(139, 92, 246, 0.15)',
            borderRadius: 100, fontSize: '0.8rem', fontWeight: 800, color: '#7c3aed',
            letterSpacing: isAr ? 0 : '0.14em', textTransform: isAr ? 'none' : 'uppercase',
          }}>
            <Briefcase size={14} />
            {isAr ? 'المسيرة المهنية' : 'Career Path'}
          </div>
          <h2 style={{ fontSize: isMobile ? '2rem' : 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 900, color: '#1d1d1f', margin: 0, letterSpacing: isAr ? 0 : '-0.03em' }}>
            {t('experience.title')}
          </h2>
          <div style={{ width: 64, height: 4, borderRadius: 4, background: 'linear-gradient(90deg, #8b5cf6, #4f46e5)', marginTop: '1.1rem' }} />
        </motion.div>

        {/* Jobs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1.2rem' : '2rem', position: 'relative' }}>
          {Array.isArray(jobs) && jobs.map((job, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={isMobile ? undefined : { y: -5, boxShadow: '0 16px 48px rgba(0,0,0,0.07), inset 0 0 0 1px rgba(139,92,246,0.18)' }}
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 2.6fr',
                gap: isMobile ? '1.2rem' : '2.4rem',
                alignItems: 'flex-start',
                background: '#ffffff',
                borderRadius: isMobile ? 20 : 26,
                padding: isMobile ? '1.6rem 1.4rem' : '2.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(0,0,0,0.05)',
                transition: 'box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Accent edge */}
              <div style={{
                position: 'absolute', top: 0, bottom: 0,
                [isAr ? 'right' : 'left']: 0, width: 4,
                background: 'linear-gradient(180deg, #8b5cf6, #4f46e5)',
                opacity: 0.85,
              }} />

              {/* Period / Location */}
              <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column', flexWrap: 'wrap', gap: '0.6rem', alignItems: isMobile ? 'center' : 'flex-start' }}>
                <span style={{
                  display: 'inline-block', padding: '0.4rem 1rem', borderRadius: 100,
                  background: 'rgba(139, 92, 246, 0.09)', color: '#7c3aed',
                  fontSize: '0.88rem', fontWeight: 800, whiteSpace: 'nowrap',
                }}>
                  {job.period}
                </span>
                <div style={{ fontSize: '0.88rem', color: '#6e6e73', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
                  <MapPin size={14} color="#8b5cf6" />
                  {job.location}
                </div>
              </div>

              {/* Role / Bullets */}
              <div>
                <h3 style={{ fontSize: isMobile ? '1.3rem' : '1.55rem', fontWeight: 800, color: '#1d1d1f', margin: 0, marginBottom: '0.35rem', letterSpacing: '-0.01em' }}>
                  {job.role}
                </h3>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#7c3aed', margin: 0, marginBottom: '1.3rem' }}>
                  {job.company}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', padding: 0, margin: 0 }}>
                  {job.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ position: 'relative', paddingInlineStart: '1.4rem', fontSize: isMobile ? '0.92rem' : '0.98rem', lineHeight: 1.7, color: '#4b5563' }}>
                      <span style={{
                        position: 'absolute', insetInlineStart: 0, top: '0.62em',
                        width: 6, height: 6, borderRadius: '50%',
                        background: '#8b5cf6', boxShadow: '0 0 0 3px rgba(139,92,246,0.15)',
                      }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
