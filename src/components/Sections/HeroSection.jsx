import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronDown, MapPin, Terminal, Sparkles } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const isMobile = useMediaQuery('(max-width: 900px)');
  const stats = t('hero.stats', { returnObjects: true });
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const socialBtn = {
    width: isMobile ? 46 : 50,
    height: isMobile ? 46 : 50,
    borderRadius: '14px',
    background: '#fff',
    border: '1px solid #ece7dd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1d1d1f',
    boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
    textDecoration: 'none',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  };

  return (
    <section id="home" style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Subtle Background Curves */}
      <div style={{ position: 'absolute', top: '10%', left: '25%', width: 500, height: 500, border: '1px solid rgba(108, 92, 231, 0.12)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '25%', right: '20%', width: 700, height: 700, border: '1px solid rgba(108, 92, 231, 0.07)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />

      {/* Giant Background Text */}
      <div style={{ position: 'absolute', top: isMobile ? '38%' : '45%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', textAlign: 'center', zIndex: 0, pointerEvents: 'none' }}>
        <h1 style={{ fontSize: isMobile ? 'clamp(5rem, 22vw, 9rem)' : 'clamp(8rem, 20vw, 24rem)', fontWeight: 800, color: 'rgba(0, 0, 0, 0.03)', letterSpacing: '-0.03em', lineHeight: 0.8, margin: 0, userSelect: 'none', fontFamily: 'var(--font-sans)' }}>
          Portfolio
        </h1>
      </div>

      {/* Vertical CODE Typography — desktop only */}
      {!isMobile && (
        <div style={{
          position: 'absolute', top: '50%', transform: 'translateY(-50%)',
          right: isAr ? 'auto' : '3vw', left: isAr ? '3vw' : 'auto',
          zIndex: 2, pointerEvents: 'none',
        }}>
          <motion.div
            key={`vision-${i18n.language}`}
            initial={{ opacity: 0, x: isAr ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ display: 'flex', flexDirection: isAr ? 'row-reverse' : 'row', alignItems: 'center', gap: '2.5rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} style={{ width: 12, height: 12, background: i % 2 === 0 ? '#8b5cf6' : '#c9c2f0' }} />
              ))}
            </div>
            <div style={{
              position: 'relative',
              fontSize: 'clamp(6.3rem, 10.6vw, 13rem)',
              fontWeight: 900, lineHeight: 0.8, fontFamily: 'Arial, sans-serif',
              letterSpacing: '-0.02em', writingMode: 'vertical-rl', textOrientation: 'mixed', textTransform: 'uppercase',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: isAr ? '3vw' : '-3vw',
                WebkitTextStroke: '2px rgba(0, 0, 0, 0.06)', color: 'transparent', zIndex: 0, whiteSpace: 'nowrap',
              }}>
                CODE
              </div>
              <div style={{ position: 'relative', color: '#1d1d1f', zIndex: 1, whiteSpace: 'nowrap' }}>
                CODE
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Background Image Layer */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', zIndex: 1, pointerEvents: 'none' }}>
        <img
          src="/hoodie.png"
          alt="Mohammed Abdul Salam"
          style={{
            height: isMobile ? '54vh' : '90vh',
            maxWidth: '100vw',
            objectFit: 'contain',
            objectPosition: 'bottom center',
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.12))',
          }}
        />
      </div>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2, flex: 1,
        display: 'flex', justifyContent: 'space-between', alignItems: 'stretch',
        width: isMobile ? '100%' : '92%',
        margin: '0 auto',
        paddingTop: isMobile ? '7rem' : '80px',
        paddingInline: isMobile ? '1.4rem' : 0,
        pointerEvents: 'none',
      }}>
        <motion.div
          key={`main-${i18n.language}`}
          initial={{ opacity: 0, x: isAr ? 30 : -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            flex: isMobile ? '1 1 auto' : '0 0 36%',
            display: 'flex', flexDirection: 'column',
            justifyContent: isMobile ? 'flex-start' : 'center',
            alignItems: 'flex-start', textAlign: 'start',
            zIndex: 2, paddingBottom: isMobile ? 0 : '5vh',
            pointerEvents: 'auto',
            maxWidth: isMobile ? '100%' : 'none',
          }}
        >
          {/* Terminal-style badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 9,
            padding: '0.55rem 1.2rem',
            background: '#ffffff',
            border: '1px solid #ece7dd',
            borderRadius: 12,
            boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.68rem, 0.85vw, 0.85rem)',
            fontWeight: 600,
            color: '#6c5ce7', marginBottom: '1.5rem',
          }}>
            <Terminal size={14} />
            <span style={{ color: '#27c93f' }}>~$</span> whoami — {isAr ? 'أخصائي ذكاء اصطناعي' : 'ai_specialist'}
          </div>

          {/* Name */}
          <h2 style={{
            fontSize: isMobile ? 'clamp(2.6rem, 10vw, 3.6rem)' : 'clamp(3.2rem, 5vw, 6.4rem)',
            fontWeight: 700,
            fontFamily: isAr ? 'var(--font-arabic-hand)' : 'var(--font-hand)',
            lineHeight: 1.05, letterSpacing: 0,
            color: '#1d1d1f', margin: 0,
          }}>
            {isAr ? (
              <>
                محمد
                <br />
                <span style={{ background: 'linear-gradient(135deg, #1d1d1f 0%, #6c5ce7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'var(--font-arabic-hand)' }}>
                  عبدالسلام
                </span>
                <span style={{ color: '#8b5cf6' }}>.</span>
              </>
            ) : (
              <>
                Mohammed
                <br />
                <span style={{ background: 'linear-gradient(135deg, #1d1d1f 0%, #6c5ce7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Abdul Salam
                </span>
                <span style={{ color: '#8b5cf6' }}>.</span>
              </>
            )}
          </h2>

          {/* Role + availability */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.7rem', marginTop: '1.2rem' }}>
            <span style={{ fontSize: 'clamp(1rem, 1.2vw, 1.3rem)', fontWeight: 800, color: '#3d3d42' }}>
              {t('hero.role')}
            </span>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '0.35rem 0.9rem', borderRadius: 100,
              background: 'rgba(18, 161, 90, 0.08)', border: '1px solid rgba(18, 161, 90, 0.2)',
              color: '#0e8a4c', fontSize: '0.78rem', fontWeight: 700,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#12a15a', boxShadow: '0 0 8px rgba(18,161,90,0.6)' }} />
              {t('hero.available')}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: '0.6rem', color: '#6e6e73', fontSize: '0.9rem', fontWeight: 600 }}>
            <MapPin size={15} color="#8b5cf6" />
            {t('hero.location')}
          </div>

          {/* Handwritten signature accent (EN only — Caveat has no Arabic glyphs) */}
          {!isAr && (
            <div style={{ fontFamily: 'var(--font-hand)', fontSize: '1.7rem', color: '#8b5cf6', marginTop: '0.9rem', transform: 'rotate(-2deg)' }}>
              think. build. ship.
            </div>
          )}

          {/* Description + CTA */}
          <div style={{ marginTop: '1.4rem', maxWidth: 440 }}>
            <p style={{ fontSize: 'clamp(0.98rem, 1.1vw, 1.2rem)', fontWeight: 500, color: '#6e6e73', lineHeight: 1.7, margin: '0 0 2rem 0' }}>
              {t('about.description')}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
              <a
                href={`mailto:${t('contact.email')}`}
                style={{
                  padding: '0.9rem 2rem', borderRadius: 14,
                  background: '#1d1d1f', color: '#fff', fontWeight: 700, fontSize: '1rem',
                  textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.16)', transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px) rotate(-1deg)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {t('contact.button')}
                <ArrowIcon size={18} />
              </a>

              <div style={{ display: 'flex', gap: '0.7rem' }}>
                <a href="#" style={socialBtn} aria-label="LinkedIn">
                  <span style={{ fontWeight: 800, fontSize: '1.05rem' }}>in</span>
                </a>
                <a href="#" style={socialBtn} aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a href="#" style={socialBtn} aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" style={socialBtn} aria-label="Code">
                  <Sparkles size={18} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Stats */}
          {!isMobile && stats && (
            <div style={{ display: 'flex', gap: '2.2rem', marginTop: '2.6rem', flexWrap: 'wrap' }}>
              {[stats.years, stats.platforms, stats.industries].filter(Boolean).map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: '#8b5cf6', flexShrink: 0, transform: 'rotate(45deg)' }} />
                  <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#4b4b52' }}>{s}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {!isMobile && <div style={{ flex: '0 0 30%', pointerEvents: 'none' }} />}
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: isMobile ? '1.2rem' : '2rem',
          left: '50%', transform: 'translateX(-50%)',
          zIndex: 3, cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid #ece7dd',
          borderRadius: 100, padding: '0.55rem 1.2rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        }}
        aria-label="Scroll down"
      >
        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#4b4b52', letterSpacing: isAr ? 0 : '0.12em', fontFamily: isAr ? 'var(--font-arabic)' : 'var(--font-mono)' }}>
          {isAr ? 'مرر للأسفل' : 'SCROLL'}
        </span>
        <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} style={{ display: 'flex' }}>
          <ChevronDown size={16} color="#7c3aed" />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default HeroSection;
