import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const SECTIONS = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const isMobile = useMediaQuery('(max-width: 900px)');
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-38% 0px -55% 0px', threshold: 0 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleLanguage = () => {
    const newLang = isAr ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    localStorage.setItem('appLang', newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const goTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const labels = {
    home: isAr ? 'الرئيسية' : 'Home',
    about: t('nav.about'),
    experience: t('nav.experience'),
    projects: t('nav.projects'),
    skills: t('nav.skills'),
    contact: isAr ? 'تواصل' : 'Contact',
  };

  const linkStyle = (id) => ({
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    color: active === id ? '#1d1d1f' : '#6e6e73',
    fontWeight: active === id ? 800 : 600,
    fontSize: '0.9rem',
    fontFamily: isAr ? 'var(--font-arabic)' : 'var(--font-sans)',
    padding: isMobile ? '0.85rem 1.4rem' : '0.5rem 1.15rem',
    borderRadius: '100px',
    background: active === id ? 'rgba(255,255,255,0.95)' : 'transparent',
    boxShadow: active === id ? '0 2px 10px rgba(0,0,0,0.06)' : 'none',
    transition: 'all 0.3s ease',
    textAlign: isAr ? 'right' : 'left',
    width: isMobile ? '100%' : 'auto',
    display: 'block',
  });

  return (
    <div style={{ position: 'fixed', top: isMobile ? '1rem' : '1.6rem', left: 0, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 100, pointerEvents: 'none', padding: '0 1rem' }}>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.45rem 0.6rem',
          background: scrolled ? 'rgba(255, 255, 255, 0.72)' : 'rgba(255, 255, 255, 0.45)',
          backdropFilter: 'blur(24px) saturate(200%)',
          WebkitBackdropFilter: 'blur(24px) saturate(200%)',
          border: '1px solid rgba(255, 255, 255, 0.65)',
          borderRadius: '100px',
          boxShadow: scrolled
            ? '0 16px 40px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.4)'
            : '0 20px 40px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.4)',
          pointerEvents: 'auto',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
          width: isMobile ? '100%' : 'auto',
          maxWidth: isMobile ? 480 : 'none',
          justifyContent: isMobile ? 'space-between' : 'center',
        }}
      >
        {isMobile && (
          <button
            onClick={() => goTo('home')}
            style={{
              border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
              color: '#fff', fontWeight: 900, fontSize: '0.85rem', width: 38, height: 38,
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}
            aria-label="Home"
          >
            {isAr ? 'م' : 'M'}
          </button>
        )}

        {!isMobile && (
          <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
            {SECTIONS.map((id) => (
              <button key={id} onClick={() => goTo(id)} style={linkStyle(id)}>
                {labels[id]}
              </button>
            ))}
          </div>
        )}

        {!isMobile && <div style={{ width: '1px', height: '24px', background: 'rgba(0,0,0,0.1)' }} />}

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <button
            onClick={toggleLanguage}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.5rem 0.95rem', borderRadius: '100px',
              background: 'transparent', border: 'none', cursor: 'pointer',
              fontSize: '0.85rem', fontWeight: 800, color: '#1d1d1f',
              fontFamily: 'var(--font-sans)', transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            {isAr ? 'EN' : 'AR'} <Globe size={16} color="#8b5cf6" />
          </button>

          {isMobile && (
            <button
              onClick={() => setOpen(!open)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 38, height: 38, borderRadius: '50%',
                background: open ? '#1d1d1f' : 'rgba(0,0,0,0.05)',
                border: 'none', cursor: 'pointer', transition: 'background 0.25s ease',
              }}
              aria-label="Menu"
            >
              {open ? <X size={18} color="#fff" /> : <Menu size={18} color="#1d1d1f" />}
            </button>
          )}
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobile && open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              marginTop: '0.6rem',
              width: '100%',
              maxWidth: 480,
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(24px) saturate(200%)',
              WebkitBackdropFilter: 'blur(24px) saturate(200%)',
              border: '1px solid rgba(255, 255, 255, 0.65)',
              borderRadius: '24px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.14)',
              padding: '0.6rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.2rem',
              pointerEvents: 'auto',
            }}
          >
            {SECTIONS.map((id) => (
              <button key={id} onClick={() => goTo(id)} style={linkStyle(id)}>
                {labels[id]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
