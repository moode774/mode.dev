import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

/* --- SCRAPBOOK WIDGETS --- */

const TerminalWidget = ({ text1, text2, ...props }) => (
  <motion.div
    drag dragMomentum={false} whileHover={{ scale: 1.05, zIndex: 50 }}
    style={{
      width: 340, background: '#fff', borderRadius: '12px', boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
      border: '1px solid #eaeaea', overflow: 'hidden', cursor: 'grab', ...props.style
    }}
    {...props}
  >
    <div style={{ background: '#f5f5f5', padding: '10px 14px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #eaeaea', position: 'relative' }}>
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
      </div>
      <div style={{ position: 'absolute', width: '100%', textAlign: 'center', fontSize: '0.75rem', color: '#888', left: 0, pointerEvents: 'none', fontFamily: 'var(--font-mono)' }}>
        mohammed — zsh
      </div>
    </div>
    <div style={{ padding: '24px', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#444', lineHeight: 1.6 }}>
      <p style={{ margin: '0 0 12px 0' }}><span style={{ color: '#27c93f', fontWeight: 'bold' }}>~ $</span> whoami<br />{text1}</p>
      <p style={{ margin: 0 }}><span style={{ color: '#27c93f', fontWeight: 'bold' }}>~ $</span> ls interests/<br />{text2}</p>
    </div>
  </motion.div>
);

const IDBadgeWidget = ({ image, name, role, ...props }) => (
  <motion.div
    drag dragMomentum={false} whileHover={{ scale: 1.05, zIndex: 50 }}
    style={{
      width: 220, background: '#1c1c1e', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
      padding: '30px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative',
      cursor: 'grab', ...props.style
    }}
    {...props}
  >
    <div style={{ position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)', width: 45, height: 220, background: '#111', borderRadius: '4px' }} />
    <div style={{ width: 70, height: 14, borderRadius: 7, background: '#333', marginBottom: 25, zIndex: 1 }} />

    <div style={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden', border: '3px solid #8b5cf6', marginBottom: 18 }}>
      <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Profile" draggable={false} />
    </div>

    <h3 style={{ color: '#fff', fontSize: '1.15rem', margin: '0 0 6px 0', fontFamily: 'var(--font-mono)', fontWeight: 700, textAlign: 'center' }}>{name}</h3>
    <p style={{ color: '#a78bfa', fontSize: '0.75rem', textAlign: 'center', margin: 0, lineHeight: 1.5, fontFamily: 'var(--font-mono)' }}>{role}</p>
    <div style={{ display: 'flex', gap: 3, height: 26, marginTop: 16 }}>
      {[2, 5, 2, 7, 2, 3, 6, 2, 5, 2, 4, 2, 6, 3].map((w, i) => (
        <div key={i} style={{ width: w, background: '#555', height: '100%' }} />
      ))}
    </div>
  </motion.div>
);

const VinylWidget = ({ ...props }) => (
  <motion.div
    drag dragMomentum={false} whileHover={{ scale: 1.05, zIndex: 50 }}
    style={{
      width: 220, height: 260, background: '#fff', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'grab', ...props.style
    }}
    {...props}
  >
    <motion.div
      animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
      style={{
        width: 150, height: 150, borderRadius: '50%', background: '#111',
        border: '6px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: 'inset 0 0 25px rgba(255,255,255,0.25), 0 10px 20px rgba(0,0,0,0.15)'
      }}
    >
      <div style={{ width: 45, height: 45, borderRadius: '50%', background: '#8b5cf6', border: '2px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#111' }} />
      </div>
    </motion.div>

    <div style={{ marginTop: 'auto', textAlign: 'center' }}>
      <p style={{ fontSize: '0.6rem', color: '#888', letterSpacing: 2, margin: '0 0 6px 0', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>NOW PLAYING</p>
      <h4 style={{ fontSize: '1.1rem', margin: '0 0 4px 0', color: '#111', fontWeight: 800 }}>Vibe Coding</h4>
      <p style={{ fontSize: '0.75rem', color: '#666', margin: 0 }}>Learning by building</p>
    </div>
  </motion.div>
);

const TicketWidget = ({ ...props }) => (
  <motion.div
    drag dragMomentum={false} whileHover={{ scale: 1.05, zIndex: 50 }}
    style={{
      width: 360, height: 120, background: '#fff', borderRadius: '8px', boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
      display: 'flex', overflow: 'hidden', border: '1px solid #eaeaea', cursor: 'grab', ...props.style
    }}
    {...props}
  >
    <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <p style={{ fontSize: '0.65rem', letterSpacing: 1, color: '#888', margin: '0 0 6px 0', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>ADMIT ONE</p>
      <h3 style={{ fontSize: '1.4rem', margin: 0, color: '#111', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: 0.5 }}>CODE × AI</h3>
      <p style={{ fontSize: '0.75rem', color: '#666', margin: '8px 0 0 0', fontFamily: 'var(--font-mono)' }}>Est. 2020 → Present</p>
    </div>
    <div style={{ width: 2, borderLeft: '2px dashed #ccc', height: '100%' }} />
    <div style={{ width: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: 3, height: 60 }}>
        {[2, 5, 2, 7, 2, 3, 6, 2, 5, 2, 4].map((w, i) => <div key={i} style={{ width: w, background: '#111', height: '100%' }} />)}
      </div>
    </div>
  </motion.div>
);

const PolaroidsWidget = ({ images, caption, ...props }) => (
  <motion.div
    drag dragMomentum={false} whileHover={{ scale: 1.05, zIndex: 50 }}
    style={{ position: 'relative', width: 280, height: 380, cursor: 'grab', ...props.style }}
    {...props}
  >
    <div style={{ position: 'absolute', inset: 0, background: '#c8a98c', borderRadius: 6, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }} />
    {images.map((img, i) => (
      <div key={i} style={{
        position: 'absolute', width: 120, height: 145, background: '#fff', padding: '8px 8px 24px 8px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.12)', top: 20 + i * 45, left: 20 + (i % 2) * 70,
        transform: `rotate(${i % 2 === 0 ? -8 : 12}deg)`, zIndex: i + 2
      }}>
        <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#eee' }} draggable={false} alt="Code" />
      </div>
    ))}
    <div style={{ position: 'absolute', top: -10, left: '40%', width: 100, height: 30, background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)', transform: 'rotate(-5deg)', zIndex: 10, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }} />
    <div style={{ position: 'absolute', bottom: 30, right: 10, width: 80, height: 25, background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)', transform: 'rotate(15deg)', zIndex: 10, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }} />
    <div style={{ position: 'absolute', bottom: 35, right: 35, fontFamily: 'var(--font-hand)', fontSize: '1.6rem', color: '#333', transform: 'rotate(-8deg)', zIndex: 5 }}>
      {caption}
    </div>
  </motion.div>
);

const FolderWidget = ({ ...props }) => (
  <motion.div
    drag dragMomentum={false} whileHover={{ scale: 1.05, zIndex: 50 }}
    style={{
      width: 140, height: 100, position: 'relative', cursor: 'grab', ...props.style
    }}
    {...props}
  >
    <div style={{ position: 'absolute', top: 0, left: 0, width: 45, height: 25, background: '#8b5cf6', borderRadius: '8px 8px 0 0' }} />
    <div style={{ position: 'absolute', top: 20, left: 0, width: '100%', height: 80, background: '#a78bfa', borderRadius: '0 8px 8px 8px', boxShadow: '0 15px 25px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)' }} />
    <div style={{ position: 'absolute', top: 30, left: 0, width: '100%', height: 70, background: '#c4b5fd', borderRadius: '6px', transform: 'rotate(-3deg)', transformOrigin: 'bottom left', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
    <div style={{ position: 'absolute', bottom: 8, left: 0, width: '100%', textAlign: 'center', fontSize: '0.6rem', fontWeight: 700, color: '#4c1d95', fontFamily: 'var(--font-mono)', zIndex: 3 }}>~/projects</div>
  </motion.div>
);

const ArchWidget = ({ image, ...props }) => (
  <motion.div
    drag dragMomentum={false} whileHover={{ scale: 1.05, zIndex: 50 }}
    style={{
      width: 140, height: 180, background: '#fff', borderRadius: '70px 70px 4px 4px', padding: '12px 12px 24px 12px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid #eaeaea', cursor: 'grab', ...props.style
    }}
    {...props}
  >
    <div style={{ width: '100%', height: '100%', borderRadius: '60px 60px 0 0', overflow: 'hidden', background: '#f5f5f5' }}>
      <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} draggable={false} alt="Workspace" />
    </div>
  </motion.div>
);

const TornPaperWidget = ({ ...props }) => (
  <motion.div
    drag dragMomentum={false} whileHover={{ scale: 1.05, zIndex: 50 }}
    style={{
      width: 400, height: 150, background: '#fff', boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'grab',
      clipPath: 'polygon(0% 10%, 5% 5%, 10% 8%, 15% 2%, 20% 7%, 25% 4%, 30% 9%, 35% 3%, 40% 8%, 45% 5%, 50% 10%, 55% 4%, 60% 9%, 65% 5%, 70% 8%, 75% 2%, 80% 9%, 85% 4%, 90% 7%, 95% 3%, 100% 10%, 100% 90%, 95% 95%, 90% 92%, 85% 98%, 80% 91%, 75% 96%, 70% 93%, 65% 97%, 60% 92%, 55% 98%, 50% 94%, 45% 99%, 40% 95%, 35% 97%, 30% 92%, 25% 96%, 20% 91%, 15% 98%, 10% 93%, 5% 97%, 0% 90%)',
      ...props.style
    }}
    {...props}
  >
    <div style={{ display: 'flex', gap: 25, alignItems: 'center' }}>
      <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=150&q=80" style={{ width: 90, height: 100, objectFit: 'cover', borderRadius: 8, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} draggable={false} alt="Code" />
      <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=150&q=80" style={{ width: 70, height: 90, objectFit: 'cover', borderRadius: 8, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} draggable={false} alt="Code" />
    </div>
  </motion.div>
);

const MacroPadWidget = ({ ...props }) => (
  <motion.div
    drag dragMomentum={false} whileHover={{ scale: 1.05, zIndex: 50 }}
    style={{
      width: 110, height: 110, background: '#1c1c1e', borderRadius: '14px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', padding: '18px', cursor: 'grab', ...props.style
    }}
    {...props}
  >
    {[...Array(9)].map((_, i) => (
      <div key={i} style={{ background: i === 4 ? '#8b5cf6' : '#333', borderRadius: '6px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }} />
    ))}
  </motion.div>
);

/* ─────────────────────────────────────────
   PROFILE SECTION (SCRAPBOOK LAYOUT)
───────────────────────────────────────── */
const ProfileSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const isMobile = useMediaQuery('(max-width: 900px)');
  const containerRef = useRef(null);

  const absoluteStyle = (desktopStyle) => isMobile
    ? { position: 'relative', margin: '2.5rem auto', zIndex: 10 }
    : { position: 'absolute', ...desktopStyle };

  return (
    <section id="about" ref={containerRef} style={{
      backgroundColor: 'transparent',
      width: '100%',
      height: isMobile ? 'auto' : '100vh',
      minHeight: isMobile ? '100vh' : 'auto',
      padding: isMobile ? '6rem 1rem' : '0',
      overflow: 'hidden',
      display: isMobile ? 'flex' : 'block',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative'
    }}>
      {/* INNER CANVAS */}
      <div style={{
        position: isMobile ? 'relative' : 'absolute',
        top: isMobile ? 'auto' : '50%',
        left: isMobile ? 'auto' : '50%',
        transform: isMobile ? 'none' : 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: '1440px',
        height: isMobile ? '100%' : '100vh',
        maxHeight: isMobile ? 'none' : '900px',
        display: isMobile ? 'flex' : 'block',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* CENTER TEXT */}
        <div style={isMobile ? { textAlign: 'center', marginBottom: '3rem' } : { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 1, pointerEvents: 'none' }}>
          <h2 style={{
            fontFamily: isAr ? 'var(--font-arabic-hand)' : 'var(--font-hand)',
            fontSize: isAr ? 'clamp(3.4rem, 7vw, 6.5rem)' : 'clamp(4.5rem, 8vw, 8rem)',
            fontWeight: 700,
            margin: 0, color: '#111', lineHeight: 1,
          }}>
            {isAr ? 'محمد عبدالسلام' : 'Mohammed Abdul Salam'}
          </h2>
          <p style={{ fontSize: '0.95rem', letterSpacing: isAr ? '0.1em' : '0.3em', color: '#666', marginTop: 20, textTransform: 'uppercase', fontWeight: 600, fontFamily: isAr ? 'var(--font-arabic)' : 'var(--font-mono)' }}>
            {isAr ? 'أفكر أولاً، ثم أبني' : 'I THINK, THEN I BUILD'}
          </p>
        </div>

        {/* 1. Badge */}
        <IDBadgeWidget
          drag dragConstraints={containerRef}
          image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=300&q=80"
          name={isAr ? 'محمد عبدالسلام' : 'Mohammed A.S'}
          role={isAr ? 'أخصائي ذكاء اصطناعي' : 'AI Specialist · Dev'}
          style={absoluteStyle({ top: '-2%', left: '8%', transform: 'rotate(-6deg)' })}
        />

        {/* 2. Torn Paper */}
        <TornPaperWidget
          drag dragConstraints={containerRef}
          style={absoluteStyle({ top: '8%', left: '26%', transform: 'rotate(2deg)' })}
        />

        {/* 3. Ticket */}
        <TicketWidget
          drag dragConstraints={containerRef}
          style={absoluteStyle({ top: '12%', right: '10%', transform: 'rotate(6deg)' })}
        />

        {/* 4. Arch — dev workspace */}
        <ArchWidget
          drag dragConstraints={containerRef}
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80"
          style={absoluteStyle({ top: '45%', left: '22%', transform: 'rotate(-8deg)' })}
        />

        {/* 5. Macro Pad */}
        <MacroPadWidget
          drag dragConstraints={containerRef}
          style={absoluteStyle({ top: '48%', right: '35%', transform: 'rotate(12deg)' })}
        />

        {/* 6. Vinyl */}
        <VinylWidget
          drag dragConstraints={containerRef}
          style={absoluteStyle({ bottom: '8%', left: '5%', transform: 'rotate(-4deg)' })}
        />

        {/* 7. Folder */}
        <FolderWidget
          drag dragConstraints={containerRef}
          style={absoluteStyle({ bottom: '15%', left: '26%', transform: 'rotate(10deg)' })}
        />

        {/* 8. Terminal */}
        <TerminalWidget
          drag dragConstraints={containerRef}
          text1={isAr ? 'أبني أنظمة ذكية تحل مشكلات واقعية' : 'AI architect & product builder'}
          text2="AI / automation / web / LLMs"
          style={absoluteStyle({ bottom: '8%', left: '40%', transform: 'rotate(-2deg)' })}
        />

        {/* 9. Polaroids — code shots */}
        <PolaroidsWidget
          drag dragConstraints={containerRef}
          caption="ship it ✦"
          images={[
            'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80',
            'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=200&q=80',
            'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=200&q=80'
          ]}
          style={absoluteStyle({ bottom: '5%', right: '8%', transform: 'rotate(4deg)' })}
        />
      </div>
    </section>
  );
};

export default ProfileSection;
