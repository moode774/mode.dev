import { useMemo, useState } from 'react';
import { ArrowUpRight, Search, CornerDownLeft } from 'lucide-react';
import { projects, iconOf } from '../portfolio';

const typeLabel = (c, ar) => ({ desktop: ar ? 'تطبيق ويندوز' : 'Windows app', web: ar ? 'منصة ويب' : 'Web platform', mobile: ar ? 'تطبيق جوال' : 'Mobile app' }[c]);

function Palette({ ar }) {
 const [q, setQ] = useState('');
 const [active, setActive] = useState(0);
 const list = useMemo(() => {
  const s = q.trim().toLowerCase();
  return projects.filter(p => !s || (p.name + ' ' + p.arName + ' ' + p.stack.join(' ')).toLowerCase().includes(s)).slice(0, 6);
 }, [q]);
 const open = () => { location.hash = '#/work'; };
 const onKey = e => {
  if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, list.length - 1)); }
  if (e.key === 'ArrowUp') { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); }
  if (e.key === 'Enter' && list[active]) open();
 };
 return <div className="rc-window">
  <div className="rc-search"><Search size={18}/><input value={q} onChange={e => { setQ(e.target.value); setActive(0); }} onKeyDown={onKey} placeholder={ar ? 'ابحث في أعمالي…' : 'Search my work…'} aria-label={ar ? 'ابحث في الأعمال' : 'Search work'}/><kbd>⌘ K</kbd></div>
  <div className="rc-group">{ar ? 'المنتجات' : 'Products'}</div>
  <ul className="rc-list">{list.map((p, i) => <li key={p.id} className={i === active ? 'on' : ''} onMouseEnter={() => setActive(i)} onClick={open}>
   <img className="rc-ico" src={iconOf(p.id)} alt="" width="28" height="28"/>
   <strong>{ar ? p.arName : p.name}</strong><small>{p.stack.slice(0, 2).join(' · ')}</small>
   <em>{typeLabel(p.category, ar)}</em>
  </li>)}{!list.length && <li className="rc-empty">{ar ? 'لا نتائج' : 'No results'}</li>}</ul>
  <div className="rc-foot"><span className="rc-brand" dir="ltr">m<b>.</b></span><span>{ar ? 'فتح' : 'Open'} <kbd><CornerDownLeft size={12}/></kbd></span><span>{ar ? 'تنقّل' : 'Navigate'} <kbd>↑</kbd><kbd>↓</kbd></span></div>
 </div>;
}

export default function Hero({ ar }) {
 const t = (a, e) => ar ? a : e;
 return <section id="home" className="rc">
  <div className="rc-beams" aria-hidden="true"><i/><i/><i/></div>
  <div className="container rc-inner">
   <span className="rc-eyebrow"><i/>{t('محمد عبدالسلام · مطوّر Full-Stack', 'Mohammed Abdul Salam · Full-Stack Developer')}</span>
   <h1 className="rc-title">{t('منتجات رقمية', 'Digital products,')}<br/><span>{t('مصمّمة بإتقان.', 'built with intent.')}</span></h1>
   <p className="rc-lead">{t('أصمّم وأبني تطبيقات للويب والجوال وويندوز — من الفكرة إلى الإطلاق، بتجربة واضحة ونظام متين.', 'I design and build apps for web, mobile and Windows — from idea to launch, with clear experiences and solid systems.')}</p>
   <div className="rc-actions"><a className="rc-btn" href="#/work">{t('استعرض أعمالي', 'View my work')}<ArrowUpRight size={17}/></a><a className="rc-btn ghost" href="#/downloads">{t('حمّل التطبيقات', 'Download apps')}</a></div>
   <div className="rc-stage"><Palette ar={ar}/></div>
  </div>
 </section>;
}
