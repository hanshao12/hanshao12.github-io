import Link from 'next/link';
import styles from '../detail.module.css';

const withBasePath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

export default function VibeCodingMiniProgramPage() {
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
          <p className={styles.eyebrow}>Project 01</p>
          <h1 className={styles.title}>项目介绍：Vibe Coding 制作办公领用助手小程序</h1>
          <p className={styles.lead}>
            这是一个面向企业内部办公用品与固定资产申领场景的微信小程序原型项目。我基于 Vibe Coding 的协作方式，
            从需求描述出发，快速完成信息架构梳理、页面骨架生成、视觉统一与交互修正，并以演示数据跑通完整申领链路。
          </p>

          <div className={styles.metrics}>
            <div className={styles.metricCard}>
              <p className={styles.metricLabel}>Tab 页面</p>
              <p className={styles.metricValue}>4 个一级入口</p>
            </div>
            <div className={styles.metricCard}>
              <p className={styles.metricLabel}>页面规模</p>
              <p className={styles.metricValue}>8 个核心页面</p>
            </div>
            <div className={styles.metricCard}>
              <p className={styles.metricLabel}>申领流程</p>
              <p className={styles.metricValue}>2 条主流程闭环</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>1. 项目目标</h2>
          <ul className={styles.list}>
            <li>把零散的物资申领动作整合为顺滑、轻量、可演示的小程序体验。</li>
            <li>使用 AI 持续生成和修补 WXML / WXSS / JS，加快页面迭代与交互落地。</li>
            <li>沉淀一套可复用的“需求 - Prompt - 预览 - 微调 - 发布”工作方法。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. 开发流程</h2>
          <ul className={styles.list}>
            <li>
              需求分析：向 <span className={styles.toolPill}>Claude</span> 描述功能需求，AI 自动生成 PRD 文档及 UI 预览图，覆盖五大模块：登录、首页概览、目录领用、记录追踪、个人中心。
            </li>
            <li>
              UI 设计：将 PRD 与预览图导入 <span className={styles.toolPill}>Figma</span>，优化布局排版、统一色彩规范、细化组件交互，采用浮岛胶囊 Tab 作为底部导航，并使用{' '}
              <span className={styles.toolPill}>Nano Banana</span> 生成插画及图标元素。
            </li>
            <li>
              代码开发：<span className={styles.toolPill}>Figma</span> 设计稿导入 <span className={styles.toolPill}>Codex</span> 自动生成代码，通过截图反馈机制让 AI 识别偏差并修正，微信开发者工具实时预览效果。
            </li>
            <li>发布上线：通过微信小程序开发工具完成测试验收与正式发布。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. 亮点总结</h2>
          <ul className={styles.list}>
            <li>两天完成从需求到发布的完整前端交付。</li>
            <li>AI 工具覆盖需求、设计、编码三个环节，效率较传统开发提升约 70%。</li>
            <li>沉淀可复用的「需求 → Prompt → 预览 → 微调 → 发布」标准工作流。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. 项目价值</h2>
          <p>
            该项目证明了我可以把业务需求转译为可预览原型，并借助 AI 协同显著缩短从想法到成型页面的周期。
            在这个过程中，我不仅完成了原型搭建，也验证了自己在需求拆解、界面组织、交互打磨与演示表达方面的综合能力。
          </p>
        </section>

        <section className={styles.section}>
          <h2>项目界面演进</h2>
          <p className={styles.evolutionText}>
            最初我先借助 AI 快速生成了两张小程序初版界面，用来验证整体视觉方向与基础页面结构；在此基础上，
            我结合真实办公申领场景，对信息层级、底部导航、记录状态与个人页表达进行了多轮调整，最终迭代出下方四张更完整、
            更贴近业务流程的正式展示版本。
          </p>

          <div className={styles.evolutionOldGrid}>
            <figure className={`${styles.galleryPlainCard} ${styles.evolutionOldCard}`}>
              <img src={withBasePath('/images/projects/p4/old-1.jpg')} alt="AI 最初生成的小程序旧版界面 1" loading="lazy" />
              <figcaption className={styles.caption}>AI 初版界面 01：用于快速验证首页视觉与基础入口</figcaption>
            </figure>
            <figure className={`${styles.galleryPlainCard} ${styles.evolutionOldCard}`}>
              <img src={withBasePath('/images/projects/p4/old-2.jpg')} alt="AI 最初生成的小程序旧版界面 2" loading="lazy" />
              <figcaption className={styles.caption}>AI 初版界面 02：用于验证组件语言与信息展示方式</figcaption>
            </figure>
          </div>

          <div className={styles.evolutionArrowWrap} aria-hidden="true">
            <div className={styles.evolutionArrowLine} />
            <div className={styles.evolutionArrow}>↓</div>
            <div className={styles.evolutionArrowLabel}>AI 初版原型 → 调整优化后版本</div>
          </div>

          <div className={styles.galleryPlain}>
            <figure className={styles.galleryPlainCard}>
              <img src={withBasePath('/images/projects/p4/login.jpg')} alt="办公领用助手小程序登录页" loading="lazy" />
              <figcaption className={styles.caption}>登录页：进入小程序后的身份验证与体验入口</figcaption>
            </figure>
            <figure className={styles.galleryPlainCard}>
              <img src={withBasePath('/images/projects/p4/catalog.jpg')} alt="办公领用助手小程序目录页" loading="lazy" />
              <figcaption className={styles.caption}>目录页：浏览办公用品与固定资产分类目录</figcaption>
            </figure>
            <figure className={styles.galleryPlainCard}>
              <img src={withBasePath('/images/projects/p4/records.jpg')} alt="办公领用助手小程序申领记录页" loading="lazy" />
              <figcaption className={styles.caption}>申领记录页：追踪申请进度、历史记录与状态反馈</figcaption>
            </figure>
            <figure className={styles.galleryPlainCard}>
              <img src={withBasePath('/images/projects/p4/profile.jpg')} alt="办公领用助手小程序我的页" loading="lazy" />
              <figcaption className={styles.caption}>我的页：集中查看个人信息、反馈入口与常用功能</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.qrBlock}>
            <div className={styles.qrImageWrap}>
              <img
                src={withBasePath('/images/projects/p4/experience-qr.png')}
                alt="轻量办公领用体验版二维码"
                className={styles.qrImage}
                loading="lazy"
              />
            </div>
            <div className={styles.qrCopy}>
              <h2>体验版入口</h2>
              <p className={styles.downloadText}>
                由于目前小程序并未正式上线，此二维码为体验版入口，点击申请即可立即体验，如二维码过期请联系我。
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.downloadBlock}>
            <div>
              <h2>项目报告书</h2>
              <p className={styles.downloadText}>如需查看完整项目说明，可下载 PDF 项目报告书。</p>
            </div>
            <a
              href={withBasePath('/documents/mini-program-project-report.pdf')}
              className={styles.downloadButton}
              download="小程序项目报告书.pdf"
            >
              下载 PDF 报告书
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
