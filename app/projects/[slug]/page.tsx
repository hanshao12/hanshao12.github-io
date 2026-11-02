import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../projects-data';
import { projectStories } from '../../project-stories';
import ProductPreview from '../../components/ProductPreview';
import './case.css';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(p=>p.slug===slug);return {title:p?.name,description:p?.description,alternates:{canonical:`/projects/${slug}/`}}}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const p=projects.find(p=>p.slug===slug);if(!p)notFound();const story=projectStories[slug];const next=projects[(projects.indexOf(p)+1)%projects.length];
 return <main className="case-page detailed-case">
  <header className="case-nav"><Link href="/" className="case-brand">hyj<span>·</span></Link><Link href="/">← 返回作品文件夹</Link><a href="mailto:hanyaojun0704@163.com">联系 ↗</a></header>
  <section className="case-hero section-shell"><span className="section-kicker">SELECTED PROJECT / {p.number} — {p.en}</span><div className="case-heading"><div><span className="case-name">{p.name}</span><h1>{p.headline.split('\n').map((l,i)=><span key={l} className={i===1?'gradient-text':''}>{l}<br/></span>)}</h1></div><p>{p.description}</p></div><div className="case-summary"><div><small>服务对象</small><span>{story.audience}</span></div><div><small>产品范围</small><span>{story.scope}</span></div><div><small>技术 / 状态</small><span>{p.stack.join(' · ')}<em>{p.status}</em></span></div></div><ProductPreview project={p} large/></section>
  <div className="case-reading section-shell"><aside className="case-toc"><span className="section-kicker">IN THIS PROJECT</span><a href="#context">01 · 场景与目标</a>{story.flow.length?<a href="#workflow">02 · 业务流程</a>:null}<a href="#capabilities">03 · 核心模块</a><a href="#decisions">04 · 设计取舍</a><a href="#reflection">05 · 实践与复盘</a></aside>
   <div className="case-sections"><section id="context" className="case-chapter"><span className="section-kicker">01 / CONTEXT</span><h2>先理解工作，再设计工具。</h2>{story.context.map(t=><p key={t}>{t}</p>)}</section>
   {story.flow.length?<section id="workflow" className="case-chapter"><span className="section-kicker">02 / THE WORKFLOW</span><h2>把零散操作，连成业务流程。</h2><div className="case-flow">{story.flow.map((s,i)=><div key={s.title}><span>0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></section>:null}
   <section id="capabilities" className="case-chapter"><span className="section-kicker">03 / PRODUCT STRUCTURE</span><h2>{p.number==='03'?'资料与呈现方向。':'每个模块，都回应具体的工作。'}</h2><div className="capability-grid">{story.modules.map((m,i)=><article key={m.title}><span>{String(i+1).padStart(2,'0')} /</span><h3>{m.title}</h3><p>{m.text}</p></article>)}</div></section>
   <section id="decisions" className="case-chapter"><span className="section-kicker">04 / DESIGN DECISIONS</span><h2>功能之外，为什么这样设计？</h2><div className="decision-list">{story.decisions.map((d,i)=><article key={d.title}><span>0{i+1}</span><div><h3>{d.title}</h3><p>{d.text}</p></div></article>)}</div></section>
   <section id="reflection" className="case-chapter"><span className="section-kicker">05 / REFLECTION</span><h2>让产品回到实际工作中。</h2><p>{story.outcome}</p><div className="case-boundary"><span>实践思考</span><p>{story.boundary}</p></div>{p.url?<a className="button primary" href={p.url} target="_blank" rel="noreferrer">访问应用 <span>↗</span></a>:null}<p className="case-access">{p.url?'应用访问需相应的飞书账号与业务权限。 ':''}本页界面均为概念示意，不含真实业务数据。</p></section></div>
  </div><section className="case-quote section-shell"><span>DESIGN NOTE</span><p>{p.takeaway}</p></section><section className="next-project section-shell"><span className="section-kicker">NEXT PROJECT / 下一个作品</span><Link href={`/projects/${next.slug}/`}>{next.name}<span>↗</span></Link></section><footer className="site-footer"><Link href="/">韩曜骏 · 个人作品集</Link><a href="mailto:hanyaojun0704@163.com">联系我 ↗</a></footer>
 </main>
}
