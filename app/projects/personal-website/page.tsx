import Link from 'next/link';
import styles from '../detail.module.css';

const withBasePath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

export default function PersonalWebsitePage() {
  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <div className={`${styles.container} ${styles.topBarInner}`}>
          <Link href="/" className={styles.backLink}>
            返回首页
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Project 02</p>
          <h1 className={styles.title}>项目介绍：个人网站设计与开发</h1>
          <p className={styles.lead}>
            这个项目围绕“个人展示 + 项目沉淀 + 在线访问”展开。我从信息架构、首页排版、项目详情页、页面动效到响应式适配进行了完整搭建，
            将个人经历、实习内容与代表项目整理为一个可以持续更新的个人网站。
          </p>

          <div className={styles.metrics}>
            <div className={styles.metricCard}>
              <p className={styles.metricLabel}>网站结构</p>
              <p className={styles.metricValue}>1 个首页 + 5 个项目页</p>
            </div>
            <div className={styles.metricCard}>
              <p className={styles.metricLabel}>交互重点</p>
              <p className={styles.metricValue}>锚点导航 + 悬停反馈</p>
            </div>
            <div className={styles.metricCard}>
              <p className={styles.metricLabel}>交付方式</p>
              <p className={styles.metricValue}>静态导出可直接部署</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>1. 项目目标</h2>
          <ul className={styles.list}>
            <li>把教育背景、实习经历、项目成果整合成统一且清晰的线上展示界面。</li>
            <li>强化首页首屏的辨识度，让访问者快速建立对个人方向与能力的印象。</li>
            <li>用静态化部署方式降低维护成本，方便后续绑定个人域名持续更新。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. 设计与开发过程</h2>
          <ul className={styles.list}>
            <li>先梳理内容优先级，重构首页顺序与锚点结构，让浏览路径更自然。</li>
            <li>围绕 Apple 风格的留白、层次与排版节奏，对首页首屏进行了多轮微调。</li>
            <li>
              使用 <span className={styles.toolPill}>Nano Banana</span> 生成网站中的插画与部分视觉素材，提升页面统一性与记忆点。
            </li>
            <li>基于 Next.js 静态导出方案完成项目搭建，使其能够直接部署到 GitHub Pages、腾讯云 Nginx 或 COS 静态站点。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. 页面展示</h2>
          <div className={styles.galleryWide}>
            <figure className={styles.galleryCard}>
              <img src={withBasePath('/images/home/projects/project-05.jpg')} alt="个人网站项目封面图" loading="lazy" />
              <figcaption className={styles.caption}>个人网站项目封面：用于首页项目卡片展示</figcaption>
            </figure>
            <figure className={styles.galleryCard}>
              <img src={withBasePath('/images/home/hero-person.png')} alt="首页人物插画展示" loading="lazy" />
              <figcaption className={styles.caption}>首页人物视觉：用于强化首屏识别度与整体气质</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.section}>
          <h2>4. 项目价值</h2>
          <p>
            这个网站不仅是个人作品集，也是我把内容组织、视觉表达、前端实现与部署落地串联起来的一次完整实践。
            它体现了我在“需求整理 → 页面设计 → 细节优化 → 上线发布”这一链路上的独立交付能力。
          </p>
        </section>
      </div>
    </main>
  );
}
