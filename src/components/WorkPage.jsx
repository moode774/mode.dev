import { useEffect, useState } from 'react';
import { motion as Motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { projects, iconOf } from '../portfolio';

const tint = { radd: '#e5484d', nasaq: '#ff6a2b', market: '#6366f1', forest: '#a3e635', biosync: '#86efac', lifeos: '#facc15', lastword: '#f472b6', erp: '#f472b6' };
const ease = [0.16, 1, 0.3, 1];

function Visual({ p }) {
 const move = e => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5).toFixed(3)); e.currentTarget.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5).toFixed(3)); };
 const leave = e => { e.currentTarget.style.setProperty('--mx', 0); e.currentTarget.style.setProperty('--my', 0); };
 return <div className="wk-visual" onMouseMove={move} onMouseLeave={leave} aria-hidden="true">
  <div className="wk-grid"/><div className="wk-glow"/>
  <div className="wk-rings"><i/><i/><i/></div><div className="wk-ripple"><i/><i/><i/></div>
  <img className="wk-icon" src={iconOf(p.id)} alt=""/>
  <span className="wk-caption">{p.caption}</span>
 </div>;
}

const CLOUD = [['radd', 8, 22, 1.1], ['nasaq', 86, 18, 1], ['market', 16, 70, .8], ['lifeos', 80, 66, .85], ['forest', 4, 46, .6], ['biosync', 93, 44, .65], ['lastword', 28, 8, .55], ['erp', 70, 6, .55]];
function Words({ text, delay = 0, className }) {
 return <span className={className}>{text.split(' ').map((w, i) => <Motion.span key={i} className="wk-w" initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: .9, delay: delay + i * .07, ease }}>{w} </Motion.span>)}</span>;
}

export default function WorkPage({ ar, onSelect }) {
 const t = (a, e) => ar ? a : e;
 const [filter, setFilter] = useState('all');
 useEffect(() => { window.scrollTo(0, 0); }, []);
 const filters = [['all', t('الكل', 'All')], ['desktop', t('ويندوز', 'Desktop')], ['web', t('الويب', 'Web')], ['mobile', t('الجوال', 'Mobile')]];
 const list = projects.filter(p => filter === 'all' || p.category === filter);
 return <section className="wk">
  <div className="wk-hero" onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--hx', ((e.clientX - r.left) / r.width - .5).toFixed(3)); e.currentTarget.style.setProperty('--hy', ((e.clientY - r.top) / r.height - .5).toFixed(3)); }}>
   <div className="rc-beams wk-beams" aria-hidden="true"><i/><i/><i/></div>
   <div className="wk-cloud" aria-hidden="true">{CLOUD.map(([id, x, y, d], k) => <Motion.img key={id} src={iconOf(id)} alt="" style={{ left: x + '%', top: y + '%', '--d': d, width: 40 + d * 34 }} initial={{ opacity: 0, scale: .4 }} animate={{ opacity: .35 + d * .5, scale: 1 }} transition={{ type: 'spring', stiffness: 120, damping: 14, delay: .3 + k * .08 }}/>)}</div>
   <div className="container">
   <Motion.span className="x-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease }}>{t('الأعمال', 'Work')}</Motion.span>
   <h1><Words text={t('منتجات حقيقية،', 'Real products,')} delay={.05}/> <Words className="wk-dim" text={t('بُنيت بعناية.', 'built with care.')} delay={.25}/></h1>
   <Motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .12, ease }}>{t('تطبيقات وأنظمة للويب والجوال وويندوز — لكل منتج قصة، ولكل تفصيلة سبب.', 'Apps and systems for web, mobile and Windows — every product has a story, every detail a reason.')}</Motion.p>
   <LayoutGroup><Motion.div className="wk-seg" role="tablist" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>
    {filters.map(([v, l]) => <button key={v} role="tab" aria-selected={filter === v} className={filter === v ? 'on' : ''} onClick={() => setFilter(v)}>
     {filter === v && <Motion.i layoutId="wk-pill" className="wk-pill" transition={{ type: 'spring', stiffness: 400, damping: 34 }}/>}
     <span>{l}</span><small>{v === 'all' ? projects.length : projects.filter(p => p.category === v).length}</small>
    </button>)}
   </Motion.div></LayoutGroup>
  </div></div>

  <div className="container wk-list">
   <AnimatePresence mode="popLayout">{list.map((p, i) => <Motion.article layout key={p.id} className={'wk-card' + (i === 0 && filter === 'all' ? ' wide' : '')} style={{ '--t': tint[p.id] || 'var(--rc-accent)' }}
    initial={{ opacity: 0, y: 60, clipPath: 'inset(10% 6% 10% 6% round 24px)' }} whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0% round 24px)' }} viewport={{ once: true, margin: '-60px' }} exit={{ opacity: 0, scale: .94, filter: 'blur(6px)' }} transition={{ duration: 1.1, delay: (i % 2) * .1, ease }} onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--sx', e.clientX - r.left + 'px'); e.currentTarget.style.setProperty('--sy', e.clientY - r.top + 'px'); }}>
    <button className="wk-hit" onClick={() => onSelect(p)} aria-label={t('تفاصيل ' + p.arName, 'Details for ' + p.name)}>
     <Visual p={p}/>
     <div className="wk-body">
      <div className="wk-top"><img src={iconOf(p.id)} alt="" width="40" height="40"/><div><h2>{ar ? p.arName : p.name}</h2><span>{p.label}</span></div><span className="wk-plus"><Plus size={18}/></span></div>
      {p.id === 'lastword' && <span className="x-note">{t('أول مشروع لي من 2022 — كنت لسا أتعلّم، فارحموه 😅', 'My very first project (2022) — I was still learning, go easy on it 😅')}</span>}
      <p>{ar ? p.arDescription : p.description}</p>
      <div className="wk-chips">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
     </div>
    </button>
    {p.url && <a className="wk-open" href={p.url} target="_blank" rel="noreferrer">{t('افتح', 'Open')}<ArrowUpRight size={15}/></a>}
   </Motion.article>)}</AnimatePresence>
  </div>

  <div className="container"><a className="wk-gh" href="https://github.com/moode774?tab=repositories" target="_blank" rel="noreferrer"><span>{t('المزيد على GitHub', 'More on GitHub')}</span><small>github.com/moode774</small><ArrowUpRight size={20}/></a></div>
 </section>;
}
