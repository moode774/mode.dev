import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Brain, Wand2, Workflow, Code2, Award } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const CATEGORY_ICONS = {
  llms: Brain,
  ai_tools: Wand2,
  automation: Workflow,
  web_dev: Code2,
  competencies: Award,
};

const SkillsSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const categories = t('skills.categories', { returnObjects: true });
  const items = t('skills.items', { returnObjects: true });
  const isMobile = useMediaQuery('(max-width: 900px)');

  return (
    <section id="skills" style={{
      position: 'relative', width: '100%',
      padding: isMobile ? '5rem 0' : '8rem 0',
      display: 'flex', justifyContent: 'center',
      background: 'transparent', overflow: 'hidden',
    }}>
      <div style={{ width: isMobile ? '92%' : '88%', maxWidth: 1280, position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: isMobile ? '3rem' : '4.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ fontFamily: isAr ? 'var(--font-arabic-hand)' : 'var(--font-hand)', fontSize: '2rem', color: '#8b5cf6', transform: 'rotate(-2deg)', marginBottom: '0.4rem' }}>
              {isAr ? 'عدّة الشغل' : 'my toolbox'}
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '0.55rem 1.4rem', borderRadius: 100,
              background: '#ffffff', border: '1px solid #ece7dd',
              boxShadow: '0 6px 18px rgba(0,0,0,0.05)', marginBottom: '1.6rem',
            }}>
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ width: 8, height: 8, borderRadius: '50%', background: '#8b5cf6', boxShadow: '0 0 12px rgba(139,92,246,0.6)' }}
              />
              <span style={{ color: '#6b6b70', fontSize: '0.85rem', fontWeight: 800, letterSpacing: isAr ? 0 : '0.15em', textTransform: isAr ? 'none' : 'uppercase', fontFamily: isAr ? 'var(--font-arabic)' : 'var(--font-mono)' }}>
                {isAr ? 'قدراتي' : 'Capabilities'}
              </span>
            </div>

            <h2 style={{
              fontSize: isMobile ? 'clamp(2rem, 7vw, 2.8rem)' : 'clamp(2.6rem, 5vw, 4.2rem)',
              fontWeight: 900, lineHeight: 1.1, letterSpacing: isAr ? 0 : '-0.03em', margin: 0, maxWidth: 800,
              color: '#1d1d1f',
            }}>
              {t('skills.title')}
              <span style={{ color: '#8b5cf6' }}>.</span>
            </h2>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: isMobile ? '1.2rem' : '1.8rem',
        }}>
          {Object.keys(categories).map((key, idx) => {
            const Icon = CATEGORY_ICONS[key] || Award;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                style={{
                  background: '#ffffff',
                  border: '1px solid #ece7dd',
                  borderRadius: 24,
                  padding: isMobile ? '1.6rem 1.4rem' : '2rem',
                  boxShadow: '0 12px 32px -12px rgba(0,0,0,0.07)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                  background: 'linear-gradient(90deg, #8b5cf6, #c4b5fd)',
                  opacity: 0.85,
                }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.4rem' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 14, flexShrink: 0,
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.14), rgba(79,70,229,0.06))',
                    border: '1px solid rgba(139,92,246,0.22)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} color="#7c3aed" strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#1d1d1f', margin: 0 }}>
                    {categories[key]}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                  {items[key]?.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.12 + sIdx * 0.04 }}
                      style={{
                        padding: '0.45rem 1rem', borderRadius: 100,
                        background: '#faf8f3',
                        border: '1px solid #ece7dd',
                        color: '#5b5b62', fontSize: '0.86rem', fontWeight: 700,
                        fontFamily: 'var(--font-mono)',
                        cursor: 'default', transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
                        e.currentTarget.style.color = '#7c3aed';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#faf8f3';
                        e.currentTarget.style.borderColor = '#ece7dd';
                        e.currentTarget.style.color = '#5b5b62';
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
