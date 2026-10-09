import { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowUpRight, Code2, Cpu, Monitor, Smartphone, Mail, Phone, FileText, ScanText, PenLine, FileStack, Check } from 'lucide-react';
import { capabilities } from '../portfolio';

const ease = [0.16, 1, 0.3, 1];
function In({ children, className = '', delay = 0, as = 'div' }) {
 const C = Motion[as];
 return <C className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.9, delay, ease }}>{children}</C>;
}
function Head({ kicker, title, sub, center }) {
 return <In className={'x-head' + (center ? ' center' : '')}><span className="x-kicker">{kicker}</span><h2>{title}</h2>{sub && <p>{sub}</p>}</In>;
}

/* ---------- about graphic ---------- */
function AboutArt({ ar }) {
 const nodes = [
  { x: 210, y: 70, l: ar ? 'الويب' : 'Web', I: Code2 },
  { x: 350, y: 210, l: ar ? 'ويندوز' : 'Windows', I: Monitor },
  { x: 210, y: 350, l: ar ? 'الجوال' : 'Mobile', I: Smartphone },
  { x: 70, y: 210, l: ar ? 'الذكاء' : 'AI', I: Cpu },
 ];
 return <div className="ab-stage" dir="ltr">
  <svg viewBox="0 0 420 420" aria-hidden="true">
   <defs><linearGradient id="abL" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="var(--rc-accent)" stopOpacity=".9"/><stop offset="1" stopColor="var(--rc-accent)" stopOpacity=".1"/></linearGradient></defs>
   <circle cx="210" cy="210" r="140" className="ab-ring"/>
   <circle cx="210" cy="210" r="190" className="ab-ring faint"/>
   <circle cx="210" cy="210" r="90" className="ab-ring dash"/>
   {nodes.map((n, k) => <g key={k}><line x1="210" y1="210" x2={n.x} y2={n.y} className="ab-line"/><line x1="210" y1="210" x2={n.x} y2={n.y} className="ab-pulse" style={{ animationDelay: k * 0.7 + 's' }}/></g>)}
   <g className="ab-orbit"><circle cx="210" cy="20" r="4"/><circle cx="400" cy="210" r="3"/></g>
  </svg>
  <div className="ab-core"><span>m<b>.</b></span></div>
  {nodes.map((n, k) => { const I = n.I; return <div key={k} className="ab-node" style={{ left: n.x / 4.2 + '%', top: n.y / 4.2 + '%', animationDelay: k * 0.15 + 's' }}><I size={18} strokeWidth={1.7}/><small>{n.l}</small></div>; })}
 </div>;
}

/* ---------- live demos ---------- */
const PAIRS = [['hgsghl ugd;l', 'السلام عليكم'], ['l,u] hgd,l', 'موعد اليوم'], ['اثممخ', 'Hello']];
function RaddDemo({ ar }) {
 const [i, setI] = useState(0), [fixed, setFixed] = useState(false);
 useEffect(() => {
  const a = setTimeout(() => setFixed(true), 1400);
  const b = setTimeout(() => { setFixed(false); setI(v => (v + 1) % PAIRS.length); }, 3600);
  return () => { clearTimeout(a); clearTimeout(b); };
 }, [i]);
 const [wrong, right] = PAIRS[i];
 return <div className="d-radd">
  <div className="d-field"><span className={fixed ? 'out' : ''} dir="auto">{wrong}</span><span className={'ok' + (fixed ? ' in' : '')} dir="auto">{right}</span><i className="caret"/></div>
  <div className="d-keys"><kbd className={fixed ? 'hit' : ''}>Ctrl</kbd><b>+</b><kbd className={fixed ? 'hit' : ''}>K</kbd><span className={'d-done' + (fixed ? ' in' : '')}><Check size={14}/>{ar ? 'تم التصحيح' : 'Fixed'}</span></div>
 </div>;
}
function NasaqDemo() {
 const tools = [[FileText, 'PDF'], [ScanText, 'OCR'], [FileStack, 'Merge'], [PenLine, 'Sign'], [FileText, 'DOCX'], [ScanText, 'Extract']];
 return <div className="d-nasaq">{tools.map(([I, l], k) => <span key={l} style={{ animationDelay: k * 0.35 + 's' }}><I size={18} strokeWidth={1.6}/>{l}</span>)}<em>38</em></div>;
}
function PhoneDemo({ title, lines }) {
 return <div className="d-phone"><div className="d-notch"/><strong>{title}</strong>{lines.map((w, k) => <i key={k} style={{ width: w + '%', animationDelay: k * 0.2 + 's' }}/>)}<div className="d-tiles"><span/><span/><span/><span/></div></div>;
}
function ChartDemo() {
 return <div className="d-chart">{[30, 52, 41, 68, 57, 82, 64, 95].map((h, k) => <i key={k} style={{ height: h + '%', animationDelay: k * 0.08 + 's' }}/>)}</div>;
}

const STACK = ['React', 'TypeScript', 'Rust', 'Tauri', 'Node.js', 'Python', 'React Native', 'Expo', 'Firebase', 'Supabase', 'Electron', 'Vite', 'Tailwind', 'OpenAI'];

export default function Home({ ar }) {
 const t = (a, e) => ar ? a : e;
 return <>
  {/* stack marquee */}
  <section className="x-marquee" aria-label={t('التقنيات', 'Tech stack')}>
   <p>{t('أبني بأدوات حديثة وموثوقة', 'Built with modern, reliable tools')}</p>
   <div className="x-track" dir="ltr"><div>{[0, 1].map(k => <span key={k} aria-hidden={k === 1}>{STACK.map(s => <b key={s}>{s}</b>)}</span>)}</div></div>
  </section>

  {/* bento products */}
  <section className="x-sec" id="products"><div className="container">
   <Head kicker={t('المنتجات', 'Products')} title={<>{t('أفكار تحوّلت', 'Ideas that became')} <span>{t('إلى منتجات تُستخدم.', 'products people use.')}</span></>} sub={t('كل منتج يحل مشكلة حقيقية، ويُبنى بنفس العناية من الواجهة إلى النظام.', 'Each product solves a real problem, built with the same care from interface to system.')}/>
   <div className="x-bento">
    <In className="x-card span-2"><a href="#/downloads"><div className="x-card-copy"><span className="x-tag">Windows · Tauri + Rust</span><h3>{t('رَدّ', 'radd')}</h3><p>{t('كتبت بالتخطيط الغلط؟ اختصار واحد يعيد النص للغة الصحيحة.', 'Typed in the wrong layout? One shortcut restores the right language.')}</p></div><RaddDemo ar={ar}/><ArrowUpRight className="x-go" size={18}/></a></In>
    <In className="x-card" delay={0.08}><a href="#/work"><div className="x-card-copy"><span className="x-tag">Windows · OCR</span><h3>{t('نَسَق', 'Nasaq')}</h3><p>{t('38 أداة للمستندات في مساحة واحدة.', '38 document tools, one workspace.')}</p></div><NasaqDemo/><ArrowUpRight className="x-go" size={18}/></a></In>
    <In className="x-card"><a href="#/work"><div className="x-card-copy"><span className="x-tag">Mobile · React Native</span><h3>{t('متجر', 'Marketplace')}</h3><p>{t('العميل والتاجر والمندوب في منظومة واحدة.', 'Customers, merchants and couriers in one system.')}</p></div><PhoneDemo title={t('متجر', 'Store')} lines={[70, 45]}/><ArrowUpRight className="x-go" size={18}/></a></In>
    <In className="x-card" delay={0.08}><a href="#/work"><div className="x-card-copy"><span className="x-tag">Web · Python</span><h3>Forest Edge Pro</h3><p>{t('نظام أعمال ببيانات متزامنة لحظيًا.', 'A business system with real-time data.')}</p></div><ChartDemo/><ArrowUpRight className="x-go" size={18}/></a></In>
    <In className="x-card" delay={0.16}><a href="#/downloads"><div className="x-card-copy"><span className="x-tag">Android · Google Play</span><h3>{t('الكلمة الأخيرة', 'The Last Word')}</h3><span className="x-note">{t('أول مشروع لي من 2022 — كنت لسا أتعلّم، فارحموه 😅', 'My very first project (2022) — I was still learning, go easy on it 😅')}</span><p>{t('لعبة كلمات عربية لمحبي التحدي.', 'An Arabic word game for challenge lovers.')}</p></div><div className="d-word" dir="rtl">{['ك', 'ل', 'م', 'ة'].map((c, k) => <span key={c} style={{ animationDelay: k * 0.15 + 's' }}>{c}</span>)}</div><ArrowUpRight className="x-go" size={18}/></a></In>
   </div>
   <In className="x-more"><a href="#/work">{t('كل الأعمال', 'All work')}<ArrowUpRight size={16}/></a><a href="#/downloads">{t('مركز التحميل', 'Download center')}<ArrowUpRight size={16}/></a></In>
  </div></section>

  {/* capabilities grid */}
  <section className="x-sec" id="expertise"><div className="container">
   <Head kicker={t('القدرات', 'Capabilities')} title={<>{t('منصة واحدة؟', 'One platform?')} <span>{t('أربع منصات.', 'Four.')}</span></>} sub={t('أختار التقنية لخدمة المنتج، وأربط الواجهة والمنطق والبيانات كتجربة واحدة.', 'Technology in service of the product — interface, logic and data as one experience.')}/>
   <div className="x-grid">{capabilities.map((c, i) => { const I = [Code2, Monitor, Smartphone, Cpu][i] || Code2; return <In key={c.title} className="x-cell" delay={i * 0.06}><I size={22} strokeWidth={1.6}/><h3>{ar ? c.arTitle : c.title}</h3><p>{ar ? c.arDescription : c.description}</p><div className="x-chips">{c.stack.map(s => <span key={s}>{s}</span>)}</div></In>; })}</div>
  </div></section>

  {/* process */}
  <section className="x-sec" id="process"><div className="container">
   <Head kicker={t('طريقة العمل', 'Process')} title={<>{t('من الفكرة', 'From idea')} <span>{t('إلى الإطلاق.', 'to launch.')}</span></>}/>
   <ol className="x-steps">{[[t('أفهم', 'Discover'), t('المشكلة، المستخدم، والهدف.', 'The problem, the person, the purpose.')], [t('أصمّم', 'Design'), t('تجربة واضحة وهوية متّسقة.', 'A clear experience and consistent identity.')], [t('أبني', 'Build'), t('واجهة وخدمات وبيانات مترابطة.', 'Connected interfaces, services and data.')], [t('أطلق وأحسّن', 'Ship & refine'), t('اختبار، إطلاق، وتحسين مستمر.', 'Test, launch, and keep improving.')]].map(([h, p], i) => <In as="li" key={h} delay={i * 0.1}><span>{String(i + 1).padStart(2, '0')}</span><h3>{h}</h3><p>{p}</p></In>)}</ol>
  </div></section>

  {/* about */}
  <section className="x-sec" id="about"><div className="container">
   <div className="ab">
    <In className="ab-copy">
     <span className="x-kicker">{t('عنّي', 'About')}</span>
     <h2 className="ab-quote">{t('أبدأ من احتياج حقيقي،', 'I start with a real need,')} <span>{t('وأحوّله إلى منتج يسهّل الحياة.', 'and turn it into a product that makes life easier.')}</span></h2>
     <p>{t('محمد عبدالسلام، مطوّر Full-Stack أعمل على الويب والجوال وويندوز، وأطوّر أعمالًا تحت اسم Forest Edge. أهتم بدعم العربية، واتساق الواجهات، ومعالجة البيانات، وأوظّف الذكاء الاصطناعي والأتمتة حين تضيف قيمة عملية.', 'Mohammed Abdul Salam — a full-stack developer for web, mobile and Windows, building under Forest Edge. I care about Arabic support, consistent interfaces and data, and use AI and automation where they add real value.')}</p>
     <ul className="ab-points">{[t('تجارب عربية أولًا، وثنائية اللغة', 'Arabic-first, bilingual experiences'), t('واجهة ومنطق وبيانات كنظام واحد', 'Interface, logic and data as one system'), t('ذكاء اصطناعي حيث يضيف قيمة فعلية', 'AI only where it adds real value')].map(x => <li key={x}><Check size={15}/>{x}</li>)}</ul>
     <div className="x-sign"><span dir="ltr">m<b>.</b></span><div><strong>{t('محمد عبدالسلام', 'Mohammed Abdul Salam')}</strong><small>MODE · FOREST EDGE</small></div></div>
    </In>
    <In className="ab-art" delay={0.12}><AboutArt ar={ar}/></In>
   </div>
  </div></section>

  {/* CTA */}
  <section className="x-cta" id="contact"><div className="x-cta-glow" aria-hidden="true"/><div className="container">
   <In><h2>{t('عندك فكرة؟', 'Have an idea?')}<br/><span>{t('خلّنا نبنيها.', "Let's build it.")}</span></h2><p>{t('أرد عادة خلال يوم واحد.', 'I usually reply within a day.')}</p><div className="x-cta-btns"><a className="rc-btn" href="mailto:mnzar7162@gmail.com"><Mail size={17}/>mnzar7162@gmail.com</a><a className="rc-btn ghost" href="tel:+966533969116" dir="ltr"><Phone size={16}/>+966 53 396 9116</a></div></In>
  </div></section>
 </>;
}

export function Footer({ ar }) {
 const t = (a, e) => ar ? a : e;
 return <footer className="x-foot"><div className="container">
  <div className="x-foot-top">
   <div><a className="x-foot-brand" href="#home" dir="ltr">m<b>.</b></a><p>{t('منتجات رقمية مصمّمة بإتقان.', 'Digital products, built with intent.')}</p></div>
   <nav><strong>{t('الموقع', 'Site')}</strong><a href="#home">{t('الرئيسية', 'Home')}</a><a href="#/work">{t('الأعمال', 'Work')}</a><a href="#/downloads">{t('التحميلات', 'Downloads')}</a></nav>
   <nav><strong>{t('تواصل', 'Contact')}</strong><a href="mailto:mnzar7162@gmail.com">Email</a><a href="https://github.com/moode774" target="_blank" rel="noreferrer">GitHub</a></nav>
  </div>
  <div className="x-foot-bot"><span>© 2026 {t('محمد عبدالسلام', 'Mohammed Abdul Salam')}</span><span>{t('الرياض، السعودية', 'Riyadh, Saudi Arabia')}</span></div>
 </div></footer>;
}
