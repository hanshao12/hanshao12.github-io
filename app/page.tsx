import SiteNav from './components/SiteNav';
import PortfolioSection from './components/PortfolioSection';

export default function Home(){
 return <main className="intro-home combined-home">
  <SiteNav active="intro" singlePage/>
  <section id="personal-intro" className="personal-hero">
   <p className="personal-eyebrow">你好，我是韩曜骏。</p>
   <h1><span className="intro-headline-lead">让想法落地，</span><span className="intro-headline-gradient">让工作更从容。</span></h1>
   <p className="personal-summary">我关注行政与运营场景中的数字化体验，<br/>用<strong>产品设计</strong>与 <strong>AI 协同开发</strong>，把日常问题变成好用的工具。</p>
   <div className="personal-actions"><a href="#selected-works" className="intro-primary">浏览我的作品 <span aria-hidden="true">↓</span></a><a href="mailto:hanyaojun0704@163.com" className="intro-contact">与我联系 <span aria-hidden="true">↗</span></a></div>
   <div className="personal-focus"><span>业务理解</span><i/><span>产品与体验设计</span><i/><span>AI 协同开发</span></div>
   <span className="intro-page-marker">01 / INTRODUCTION</span>
   <a className="intro-next" href="#selected-works">向下滑动 · 精选作品 <span>↓</span></a>
  </section>
  <PortfolioSection embedded/>
 </main>;
}
