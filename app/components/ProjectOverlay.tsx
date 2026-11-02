'use client';
import { useEffect, useRef } from 'react';
import { projects, type Project } from '../projects-data';
import ProjectCase from './ProjectCase';
import '../overlay.css';
export default function ProjectOverlay({project,onClose,onSelect}:{project:Project|null;onClose:()=>void;onSelect:(p:Project)=>void}){
 const dialog=useRef<HTMLDialogElement>(null);
 const scroller=useRef<HTMLDivElement>(null);
 const isOpen=Boolean(project);
 useEffect(()=>{const d=dialog.current;if(!d)return;if(isOpen){if(!d.open)d.showModal();const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previous}}else if(d.open)d.close()},[isOpen]);
 useEffect(()=>{scroller.current?.scrollTo({top:0,behavior:'instant'})},[project?.slug]);
 const index=project?projects.findIndex(p=>p.slug===project.slug):0;
 return <dialog ref={dialog} className="project-overlay" aria-labelledby="project-dialog-title" onCancel={onClose} onClose={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose()}}>
  {project?<><div className="overlay-toolbar"><div><span className="overlay-count">{project.number} / 04</span><h2 id="project-dialog-title">{project.name}</h2></div><div className="overlay-controls"><button aria-label="上一个作品" onClick={()=>onSelect(projects[(index+3)%4])}>←</button><button aria-label="下一个作品" onClick={()=>onSelect(projects[(index+1)%4])}>→</button><span/><button className="overlay-close" aria-label="关闭项目详情" onClick={onClose}>×</button></div></div><div className="overlay-scroller" ref={scroller} onClick={e=>{const anchor=(e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');if(anchor){e.preventDefault();const target=scroller.current?.querySelector(anchor.hash);target?.scrollIntoView({behavior:'smooth',block:'start'})}}}><ProjectCase key={project.slug} project={project}/><div className="overlay-next"><span>CONTINUE EXPLORING</span><button onClick={()=>onSelect(projects[(index+1)%4])}>{projects[(index+1)%4].name}<span>→</span></button></div></div></>:null}
 </dialog>
}
