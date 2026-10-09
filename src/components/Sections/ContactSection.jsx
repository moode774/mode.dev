import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, ArrowUpLeft } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const isMobile = useMediaQuery('(max-width: 900px)');
  const ArrowIcon = isAr ? ArrowUpLeft : ArrowUpRight;
  const year = new Date().getFullYear();

  return (
    <section id="contact" style={{
      position: 'relative', width: '100%',
      padding: isMobile ? '5rem 0 0' : '8rem 0 0',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      background: 'transparent', overflow: 'hidden',
    }}>
      <div style={{ width: isMobile ? '92%' : '88%', maxWidth: 900, position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontFamily: isAr ? 'var(--font-arabic-hand)' : 'var(--font-hand)', fontSize: '2.2rem', color: '#8b5cf6', transform: 'rotate(-2deg)', marginBottom: '0.4rem' }}>
            {isAr ? 'قل مرحباً' : 'say hello'}
          </div>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '0.55rem 1.4rem', borderRadius: 100,
            background: '#ffffff', border: '1px solid #ece7dd',
            boxShadow: '0 6px 18px rgba(0,0,0,0.05)', marginBottom: '1.8rem',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#12a15a', boxShadow: '0 0 12px rgba(18,161,90,0.6)' }} />
            <span style={{ color: '#6b6b70', fontSize: '0.85rem', fontWeight: 800 }}>
              {t('hero.available')}
            </span>
          </div>

          <h2 style={{
            fontSize: isMobile ? 'clamp(2.2rem, 8vw, 3rem)' : 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 900, lineHeight: 1.08, letterSpacing: isAr ? 0 : '-0.03em', margin: '0 auto 1.4rem',
            color: '#1d1d1f', maxWidth: 700,
          }}>
            {isAr ? 'لنصنع شيئاً استثنائياً معاً' : "Let's build something exceptional"}
            <span style={{ color: '#8b5cf6' }}>.</span>
          </h2>

          <p style={{
            fontSize: isMobile ? '1rem' : '1.15rem', color: '#6e6e73',
            lineHeight: 1.8, maxWidth: 560, margin: '0 auto 2.6rem', fontWeight: 500,
          }}>
            {isAr
              ? 'هل لديك مشروع أو فكرة في الذكاء الاصطناعي أو التطوير؟ تواصل معي وسأرد عليك في أقرب وقت.'
              : 'Have an AI or development project in mind? Reach out and I will get back to you as soon as possible.'}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', flexDirection: isMobile ? 'column' : 'row' }}>
            <motion.a
              href={`mailto:${t('contact.email')}`}
              whileHover={{ scale: 1.04, boxShadow: '0 16px 40px -10px rgba(124,58,237,0.45)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.7rem',
                padding: '1.05rem 2.4rem', borderRadius: 100,
                background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff', fontSize: '1.05rem', fontWeight: 800,
                textDecoration: 'none', boxShadow: '0 14px 34px -8px rgba(124,58,237,0.4)',
                width: isMobile ? '100%' : 'auto', justifyContent: 'center',
              }}
            >
              <Mail size={19} />
              {t('contact.email')}
              <ArrowIcon size={18} />
            </motion.a>

            <motion.a
              href={`tel:${t('contact.phone').replace(/\s/g, '')}`}
              whileHover={{ scale: 1.04, borderColor: 'rgba(139,92,246,0.5)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.7rem',
                padding: '1.05rem 2.2rem', borderRadius: 100,
                background: '#ffffff',
                border: '1px solid #ece7dd',
                color: '#1d1d1f', fontSize: '1.05rem', fontWeight: 700,
                textDecoration: 'none', boxShadow: '0 8px 22px rgba(0,0,0,0.06)',
                width: isMobile ? '100%' : 'auto', justifyContent: 'center',
                direction: 'ltr', transition: 'border-color 0.25s ease',
              }}
            >
              <Phone size={18} color="#8b5cf6" />
              {t('contact.phone')}
            </motion.a>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            marginTop: '2.2rem', color: '#6e6e73', fontSize: '0.92rem', fontWeight: 600,
          }}>
            <MapPin size={15} color="#8b5cf6" />
            {t('hero.location')}
          </div>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div style={{
        width: '100%', marginTop: isMobile ? '4rem' : '6rem',
        borderTop: '1px solid #ece7dd',
        padding: '1.6rem 1.5rem',
        display: 'flex', justifyContent: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          width: '100%', maxWidth: 1280,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '0.8rem',
          flexDirection: isMobile ? 'column' : 'row',
        }}>
          <span style={{ color: '#6e6e73', fontSize: '0.85rem', fontWeight: 600 }}>
            © {year} {t('hero.greeting')} — {isAr ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
          </span>
          <span style={{ color: '#9a9aa0', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)' }}>
            React · Vite · Framer Motion
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
