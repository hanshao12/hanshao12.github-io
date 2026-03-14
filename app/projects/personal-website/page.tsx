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
            这是我围绕个人展示、经历梳理与项目表达搭建的作品集网站。项目目标不仅是完整承载学历背景、实习经历与核心能力，
            也希望通过更统一的视觉语言与交互细节，呈现一个更有辨识度、更适合长期迭代的个人品牌主页。
          </p>
          <p className={styles.lead}>
            注：本网站所使用到的插画由 <span className={styles.toolPill}>Nano Banana</span> 生成。
          </p>

          <div className={styles.metrics}>
            <div className={styles.metricCard}>
              <p className={styles.metricLabel}>核心板块</p>
              <p className={styles.metricValue}>5 个内容模块</p>
            </div>
            <div className={styles.metricCard}>
              <p className={styles.metricLabel}>项目体系</p>
              <p className={styles.metricValue}>5 个案例入口</p>
            </div>
            <div className={styles.metricCard}>
              <p className={styles.metricLabel}>迭代重点</p>
              <p className={styles.metricValue}>UI + 交互双优化</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>1. 项目目标</h2>
          <ul className={styles.list}>
            <li>将个人经历、项目成果与核心能力以清晰有层次的方式统一呈现。</li>
            <li>通过更精细的版式、留白和动效设计，提升整体网站质感与记忆点。</li>
            <li>构建可持续扩展的项目详情页体系，方便后续继续补充案例与作品。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. 设计与结构优化</h2>
          <ul className={styles.list}>
            <li>重组首页内容顺序，将学历背景、实习经历、个人项目与核心能力按阅读逻辑重新排布。</li>
            <li>围绕首屏标题、能力模块、项目展示与信息胶囊反复微调留白、字体层级与色彩关系。</li>
            <li>将个人项目区重构为 Z 型视觉动线，让用户视线从标题、摘要自然过渡到按钮与下一项目。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. 开发与交互实现</h2>
          <ul className={styles.list}>
            <li>基于 Next.js 进行页面组织与路由管理，补充多个项目详情页入口与下载链接能力。</li>
            <li>为首页主标题、卡片 Hover、文内胶囊等元素加入克制但有记忆点的微交互。</li>
            <li>同步考虑桌面端与移动端适配，控制组件尺寸、间距与图片展示方式，保证浏览体验一致。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. 项目成果</h2>
          <p>
            通过这一轮个人网站开发，我完成了从内容梳理、结构搭建到视觉精修与交互优化的完整闭环，也逐步形成了适合长期维护的个人展示框架。
            这个网站不仅是我的线上名片，也成为后续持续沉淀项目成果与表达能力的重要载体。
          </p>
        </section>
      </div>
    </main>
  );
}
