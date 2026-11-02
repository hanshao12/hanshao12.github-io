import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../projects-data';
import ProjectCase from '../../components/ProjectCase';
import SiteNav from '../../components/SiteNav';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(p=>p.slug===slug);return {title:p?.name,description:p?.description,alternates:{canonical:`/projects/${slug}/`}}}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const p=projects.find(p=>p.slug===slug);if(!p)notFound();
 return <main className="case-page detailed-case"><SiteNav active="work"/><div className="section-shell" style={{paddingTop:25}}><Link className="back-link" href="/work/">← 返回作品文件夹</Link></div><ProjectCase project={p}/><footer className="site-footer"><Link href="/work/">浏览全部作品 ↗</Link><a href="mailto:hanyaojun0704@163.com">联系我 ↗</a></footer></main>
}
