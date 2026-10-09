import { useEffect, useRef, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DownloadsPage from './components/DownloadsPage';
import Hero from './components/Hero';
import WorkPage from './components/WorkPage';
import Home, { Footer } from './components/Home';
function App(){
 const {i18n}=useTranslation(); const ar=i18n.language==='ar'; const t=(a,e)=>ar?a:e;
 const [menu,setMenu]=useState(false),[selected,setSelected]=useState(null);const dialog=useRef(null);const [theme,setTheme]=useState(()=>{try{return localStorage.getItem('theme')||'dark'}catch{return 'dark'}});
 useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem('theme',theme)}catch{/* ignore */}},[theme]);const [page,setPage]=useState(()=>location.hash.startsWith('#/downloads')?'downloads':location.hash.startsWith('#/work')?'work':'home');
 useEffect(()=>{const on=()=>{const h=location.hash,d=h.startsWith('#/downloads')?'downloads':h.startsWith('#/work')?'work':'';setPage(d||'home');if(d)scrollTo(0,0);else requestAnimationFrame(()=>document.getElementById(location.hash.slice(1))?.scrollIntoView());};addEventListener('hashchange',on);return()=>removeEventListener('hashchange',on);},[]);
 useEffect(()=>{document.documentElement.lang=ar?'ar':'en';document.documentElement.dir=ar?'rtl':'ltr';document.body.dir=ar?'rtl':'ltr';},[ar]);
 useEffect(()=>{if(selected)dialog.current?.showModal();else dialog.current?.close();},[selected]);
 const switchLang=()=>{const l=ar?'en':'ar';i18n.changeLanguage(l);localStorage.setItem('appLang',l);};
 return <MotionConfig reducedMotion="user"><div className={"site"}><a className="skip" href="#main">{t('انتقل للمحتوى','Skip to content')}</a><header><a className="brand2" href="#home" aria-label="MODE" dir="ltr"><svg viewBox="0 0 120 120" aria-hidden="true"><path d="M32 90V58a14 14 0 0 1 28 0v32M60 58a14 14 0 0 1 28 0v8" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/><circle cx="88" cy="88" r="8.5" fill="var(--rc-accent)"/></svg><span>mode<i>.dev</i></span></a><nav className={menu?'open':''}>{[['home',t('الرئيسية','Home')],['/work',t('الأعمال','Work')],['expertise',t('القدرات','Expertise')],['about',t('عنّي','About')],['/downloads',t('التحميلات','Downloads')]].map(([id,label])=><a key={id} href={'#'+id} onClick={()=>setMenu(false)}>{label}</a>)}</nav><div className="header-actions"><button className="theme-toggle" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label={t('تبديل الوضع','Toggle theme')}>{theme==='dark'?<Sun size={17}/>:<Moon size={17}/>}</button><button onClick={switchLang}>{ar?'EN':'عربي'}</button><a className="nav-contact" href="#contact">{t('لنصنع شيئًا مميزًا','Let’s talk')}<ArrowUpRight size={16}/></a><button className="menu-toggle" aria-label={t('القائمة','Menu')} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></header>
 <main id="main">{page==='downloads'?<DownloadsPage ar={ar}/>:page==='work'?<WorkPage ar={ar} onSelect={setSelected}/>:<><Hero ar={ar}/><Home ar={ar}/></>}</main><Footer ar={ar}/>
 <dialog ref={dialog} onCancel={()=>setSelected(null)} onClick={e=>{if(e.target===e.currentTarget)setSelected(null);}} aria-labelledby="dialog-title">{selected&&<div className="dialog-content"><button className="close" autoFocus aria-label={t('إغلاق','Close')} onClick={()=>setSelected(null)}><X/></button><span className="eyebrow">{selected.label}</span><h2 id="dialog-title">{ar?selected.arName:selected.name}</h2><p>{ar?selected.arDescription:selected.description}</p><ul>{(ar?selected.arFeatures:selected.features).map(f=><li key={f}>{f}</li>)}</ul><div className="tags">{selected.stack.map(s=><span key={s}>{s}</span>)}</div><a className="button" href={selected.url||'mailto:mnzar7162@gmail.com'} target={selected.url?'_blank':undefined} rel="noreferrer">{selected.url?t('افتح المنتج','Visit product'):t('اطلب عرضًا للمشروع','Request a walkthrough')}<ArrowUpRight size={18}/></a><small className="concept-note">{t('الرسوم تصوّرات تعريفية مخصصة، وليست لقطات من التطبيقات.','Visuals are custom illustrative concepts, not application screenshots.')}</small></div>}</dialog></div></MotionConfig>;
}
export default App;




