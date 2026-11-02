'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { projects } from './projects-data';
import './home.css';

function Cover({number}:{number:string}) {
 if(number==='01') return <div className="art-cover art-admin"><span className="cover-eyebrow">WORKPLACE, CONNECTED.</span><strong>Work,<br/>made simple<span>✳</span></strong><div className="admin-tiles"><i>⌘</i><i>◈</i><i>↗</i></div><span className="cover-bottom">ONE PLACE. EVERYDAY SERVICES.</span></div>;
 if(number==='02') return <div className="art-cover art-space"><span className="cover-eyebrow">A PLACE FOR EVERYONE.</span><strong>让空间<br/>各就其位。</strong><div className="cover-floor">{Array.from({length:12},(_,i)=><i key={i} className={i%4===0?'empty':''}/>)}</div><span className="space-dot"/></div>;
 if(number==='03') return <div className="art-cover art-data"><span className="cover-eyebrow">FIND THE SIGNAL.</span><strong>Data,<br/>made clear.</strong><div className="data-donut"/><svg viewBox="0 0 220 80" aria-hidden="true"><path d="M0 70C20 70 25 35 50 45S80 60 100 30S130 50 155 20S195 35 220 5" fill="none" stroke="#e08b5e" strokeWidth="3"/></svg><span className="cover-bottom">FROM NUMBERS TO UNDERSTANDING.</span></div>;
 return <div className="art-cover art-flow"><span className="cover-eyebrow">FROM PLAN TO PROGRESS.</span><strong>序程<span>↗</span></strong><div className="flow-diagram"><i/><b/><i/><b/><i/></div><span className="flow-word">Make room<br/>for progress.</span></div>;
}

export default function Home(){
 const [opened,setOpened]=useState(false);
 const [hovered,setHovered]=useState(false);
 const expanded=opened||hovered;
 const [about,setAbout]=useState(false);
 const dialog=useRef<HTMLDialogElement>(null);
 const folder=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(about)dialog.current?.showModal();else dialog.current?.close()},[about]);
 return <main className="portfolio-home">
  <a className="skip-link" href="#portfolio-folder">跳到作品</a>
  <header className="portfolio-nav"><Link href="/" className="portfolio-brand" aria-label="韩曜骏个人作品集">hyj<span>·</span></Link><nav aria-label="主导航"><button className="current" onClick={()=>{setOpened(true);folder.current?.scrollIntoView({behavior:'smooth',block:'center'});folder.current?.focus()}}>作品<span>04</span></button><button onClick={()=>setAbout(true)}>关于</button><a href="mailto:hanyaojun0704@163.com">联系 ↗</a></nav><span className="nav-note">DESIGNED TO MAKE THINGS BETTER.</span></header>
  <section className="portfolio-canvas" aria-labelledby="portfolio-title">
   <div className="canvas-intro"><span className="intro-dot"/><span>韩曜骏 · 数字产品与效率工具</span></div>
   <h1 id="portfolio-title" className="welcome-script" aria-label="欢迎查看我的作品集">Welcome.</h1>
   <div ref={folder} id="portfolio-folder" className={`portfolio-folder ${expanded?'is-open':''}`} tabIndex={-1} onPointerEnter={e=>{if(e.pointerType==='mouse')setHovered(true)}} onPointerLeave={()=>setHovered(false)} onKeyDown={e=>{if(e.key==='Escape'){setOpened(false);setHovered(false);(document.activeElement as HTMLElement)?.blur()}}}>
    <div className="folder-ground"/>
    <div className="folder-assembly">
     <div className="glass-folder-back" aria-hidden="true"><span/></div>
     <div className="folder-cards" id="folder-cards">{projects.map(p=><Link href={`/projects/${p.slug}/`} key={p.slug} className={`portfolio-piece piece-${p.number}`} aria-label={`查看${p.name}项目详情`}><div className="piece-surface"><Cover number={p.number}/><div className="piece-caption"><span><small>PROJECT / {p.number}</small><b>{p.name}</b></span><span className="piece-arrow">↗</span></div></div></Link>)}</div>
     <button className="glass-folder-front" aria-label={expanded?'收起作品文件夹':'展开作品文件夹'} aria-expanded={expanded} aria-controls="folder-cards" onClick={()=>{setOpened(!expanded);setHovered(false)}}>
      <span className="folder-shine"/><span className="folder-sticker sticker-asterisk" aria-hidden="true">✳</span><span className="folder-sticker sticker-note" aria-hidden="true">made<br/>with care.</span><span className="folder-signature"><span>韩曜骏</span><small>SELECTED WORKS / 2026</small></span><span className="folder-toggle-arrow" aria-hidden="true">↗</span>
     </button>
    </div>
   </div>
   <div className="canvas-caption"><span className="caption-line"/><p>一些想法，一些实践。<span>打开文件夹，看看我的作品。</span></p><span className="caption-line"/></div>
  </section>
  <footer className="portfolio-footer"><span>© 2026 HANYAOJUN</span><span>从真实问题出发。</span><a href="https://github.com/hanshao12" target="_blank" rel="noreferrer">GitHub ↗</a></footer>
  <dialog ref={dialog} className="about-dialog" onCancel={()=>setAbout(false)} onClose={()=>setAbout(false)} onClick={e=>{if(e.target===e.currentTarget)setAbout(false)}}><div className="about-dialog-inner"><button className="dialog-close" aria-label="关闭关于" onClick={()=>setAbout(false)}>×</button><span className="section-kicker">HELLO, I’M HANYAOJUN.</span><h2>你好，我是韩曜骏。</h2><p>关注业务与技术的交汇处，喜欢把日常工作中的具体问题，整理为清晰的产品和工具。</p><p>从需求梳理、流程设计到 AI 协同开发，围绕行政服务、空间管理、数据分析与项目协作持续实践。</p><a href="mailto:hanyaojun0704@163.com">hanyaojun0704@163.com <span>↗</span></a></div></dialog>
 </main>
}
