import { useEffect, useState } from 'react';
import { ArrowUpRight, Download, Monitor, Smartphone, ShieldCheck, Clock } from 'lucide-react';
import { projects, iconOf, downloads } from '../portfolio';

const platformOf = d => d.platform || (d.p.category === 'desktop' ? 'windows' : 'mobile');

export default function DownloadsPage({ ar }) {
 const t = (a, e) => ar ? a : e;
 const [filter, setFilter] = useState('all');
 useEffect(() => { window.scrollTo(0, 0); }, []);
 const items = downloads.map(d => ({ ...d, p: projects.find(p => p.id === d.id) })).filter(d => d.p);
 const shown = items.filter(d => filter === 'all' || platformOf(d) === filter);
 const filters = [['all', t('الكل', 'All')], ['windows', 'Windows'], ['linux', 'Linux'], ['mobile', t('الجوال', 'Mobile')]];
 return <section className="dl">
  <div className="dl-head"><div className="container">
   <span className="dl-kicker">{t('مركز التحميل', 'Download center')}</span>
   <h1>{t('حمّل تطبيقاتي', 'Download my apps')}<span>{t(' — رسمية وآمنة.', ' — official and safe.')}</span></h1>
   <p>{t('كل التطبيقات المنشورة في مكان واحد. حمّلها مباشرة أو من المتجر الرسمي.', 'All published apps in one place. Download directly or from the official store.')}</p>
   <div className="dl-trust"><span><ShieldCheck size={16}/>{t('روابط رسمية فقط', 'Official links only')}</span><span><Clock size={16}/>{t('تحديثات مستمرة', 'Regular updates')}</span></div>
  </div></div>
  <div className="container dl-body">
   <div className="dl-filters">{filters.map(([v, l]) => <button key={v} className={filter === v ? 'active' : ''} aria-pressed={filter === v} onClick={() => setFilter(v)}>{l}<small>{v === 'all' ? items.length : items.filter(d => platformOf(d) === v).length}</small></button>)}</div>
   <div className="dl-list" key={filter}>{shown.map((d, i) => {
    const p = d.p, linux = platformOf(d) === 'linux', win = platformOf(d) === 'windows', href = d.file || d.store, soon = !href;
    return <article className="dl-row" key={d.id + (d.platform || '')} style={{ animationDelay: i * 70 + 'ms' }}>
     <img className="dl-icon" src={iconOf(d.id)} alt="" width="72" height="72"/>
     <div className="dl-info">
      <div className="dl-title"><h2>{ar ? p.arName : p.name}{linux ? ' · Linux' : ''}</h2><span className="dl-badge">{win || linux ? <Monitor size={13}/> : <Smartphone size={13}/>}{linux ? 'Linux' : win ? 'Windows' : 'Android'}</span>{d.id === 'lastword' && <span className="x-note">{t('أول مشروع لي من 2022 — كنت لسا أتعلّم، فارحموه 😅', 'My very first project (2022) — I was still learning, go easy on it 😅')}</span>}</div>
      <p>{ar ? p.arDescription : p.description}</p>
      <div className="dl-meta">{d.version && <span>{t('الإصدار', 'Version')} {d.version}</span>}{d.size && <span>{d.size}</span>}{d.storeName && <span>{d.storeName}</span>}{d.note && <span>{ar ? d.note.ar : d.note.en}</span>}</div>
     </div>
     {soon ? <span className="dl-btn soon">{t('قريبًا', 'Coming soon')}</span>
      : <a className="dl-btn" href={href} {...(d.file ? { download: '' } : { target: '_blank', rel: 'noreferrer' })}>{d.file ? <Download size={17}/> : <ArrowUpRight size={17}/>}{d.file ? t('تحميل', 'Download') : t('من ' + d.storeName, 'Get on ' + d.storeName)}</a>}
    </article>;
   })}</div>
   <a className="dl-back" href="#home">{t('العودة للرئيسية', 'Back to home')}<ArrowUpRight size={15}/></a>
  </div>
 </section>;
}
