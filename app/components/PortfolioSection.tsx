'use client';

import { useRef, useState } from 'react';
import { projects, type Project } from '../projects-data';
import ProjectOverlay from './ProjectOverlay';
import '../home.css';
import '../work/work.css';

const coverImages:Record<string,string>={
 '01':'/administration-approval-card.png',
 '02':'/portfolio-workstation-cover.png',
 '03':'/portfolio-meal-analysis-cover.png',
 '04':'/portfolio-project-management-cover.png'
};

function Cover({number}:{number:string}) {
 return <div className="art-cover art-cover-image"><img src={coverImages[number]} alt=""/></div>;
}

export default function PortfolioSection({embedded=false}:{embedded?:boolean}){
 const [opened,setOpened]=useState(false);
 const [hovered,setHovered]=useState(false);
 const expanded=opened||hovered;
 const [selected,setSelected]=useState<Project|null>(null);
 const folder=useRef<HTMLDivElement>(null);

 return <section id={embedded?'selected-works':undefined} className={`portfolio-home work-page${embedded?' embedded-work-page':''}`} aria-label="精选作品">
  <a className="skip-link" href="#portfolio-folder">跳到作品</a>
  <div className="portfolio-canvas">
   <div className="canvas-intro"><span className="intro-dot"/><span>SELECTED WORKS / 2026</span></div>
   <h1 className="visually-hidden">精选作品</h1><div className="welcome-art" aria-hidden="true"><img src="/welcome-mint-jelly.png" alt=""/></div>
   <div ref={folder} id="portfolio-folder" className={`portfolio-folder ${expanded?'is-open':''}`} tabIndex={-1} onPointerEnter={e=>{if(e.pointerType==='mouse')setHovered(true)}} onPointerLeave={()=>setHovered(false)} onKeyDown={e=>{if(e.key==='Escape'){setOpened(false);setHovered(false);(document.activeElement as HTMLElement)?.blur()}}}>
    <div className="folder-ground"/>
    <div className="folder-assembly">
     <div className="glass-folder-back" aria-hidden="true"><span/></div>
     <div className="folder-cards" id="folder-cards">{projects.map(p=><button type="button" onClick={()=>{setOpened(true);setSelected(p)}} key={p.slug} className={`portfolio-piece piece-${p.number}`} aria-label={`查看${p.name}项目详情`}><div className="piece-surface"><Cover number={p.number}/><div className="piece-caption"><span><small>PROJECT / {p.number}</small><b>{p.name}</b></span><span className="piece-arrow">↗</span></div></div></button>)}</div>
     <button className="glass-folder-front" aria-label={expanded?'收起作品文件夹':'展开作品文件夹'} aria-expanded={expanded} aria-controls="folder-cards" onClick={()=>{setOpened(!expanded);setHovered(false)}}>
      <span className="folder-shine"/><span className="folder-sticker sticker-asterisk" aria-hidden="true">✳</span><span className="folder-sticker sticker-note" aria-hidden="true">made<br/>with care.</span><span className="folder-signature"><span>韩曜骏</span><small>SELECTED WORKS / 2026</small></span><span className="folder-toggle-arrow" aria-hidden="true">↗</span>
     </button>
    </div>
   </div>
   <div className="canvas-caption"><span className="caption-line"/><p>一些想法，一些实践。<span>打开文件夹，看看我的作品。</span></p><span className="caption-line"/></div>
  </div>
  <footer className="work-footer"><a href={embedded?'#personal-intro':'/'}>← 个人介绍</a><span>02 / SELECTED WORKS</span><span>© 2026 韩曜骏</span></footer>
  <ProjectOverlay project={selected} onClose={()=>setSelected(null)} onSelect={setSelected}/>
 </section>
}
