import Link from 'next/link';
import styles from '../detail.module.css';

export default function AnniversaryProjectPage() {
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
          <h1 className={styles.title}>项目介绍：凡岛 17 周年庆典活动策划与执行</h1>
          <p className={styles.lead}>
            在广州凡岛网络科技有限公司实习期间，我深度参与了公司 17 周年庆典活动的生命周期管理。该项目通过系列庆祝活动增强员工归属感并展现企业文化。
            作为核心执行成员，我负责从前期创意方案到现场多环节落地的全流程工作，在资源受限情况下保障活动 0 失误交付。
          </p>
        </section>

        <section className={styles.section}>
          <h2>我的工作内容与执行细节</h2>

          <h3>1. 方案撰写与统筹规划</h3>
          <ul className={styles.list}>
            <li>参与周年庆主题方案设计与整体场地规划。</li>
            <li>协调内外部资源，推动活动全流程落地并确保按期推进。</li>
          </ul>

          <h3>2. 资源整合与礼品采购</h3>
          <ul className={styles.list}>
            <li>独立完成奖品选型及多方供应商比价下单，实现成本优化。</li>
            <li>负责文化衫采购与精准发放，确保全链路物料按时到位、流程零延误。</li>
          </ul>

          <h3>3. 活动元素设计（视觉与互动）</h3>
          <ul className={styles.list}>
            <li>负责现场抽奖转盘视觉设计，提升活动互动趣味性。</li>
            <li>承担多项活动视觉元素设计，把控现场 20+ 项执行细节。</li>
          </ul>

          <h3>4. 现场布置与茶歇安排</h3>
          <ul className={styles.list}>
            <li>负责活动现场落地布置，通过走位规划保障现场体验流畅。</li>
            <li>独立对接茶歇供应商，依据人数和偏好完成订购与摆台。</li>
          </ul>

          <h3>5. 复盘量化与成果评估</h3>
          <ul className={styles.list}>
            <li>设计并回收员工满意度调研问卷，进行结构化结果统计。</li>
            <li>完成活动效果量化复盘，员工满意度达 98%。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>活动执行图集</h2>
          <div className={styles.galleryWide}>
            <figure className={styles.galleryCard}>
              <img src="/images/projects/p2/1.png" alt="周年庆抽奖转盘设计图" loading="lazy" />
              <figcaption className={styles.caption}>周年庆抽奖转盘视觉设计稿</figcaption>
            </figure>
            <figure className={styles.galleryCard}>
              <img src="/images/projects/p2/2.jpg" alt="周年庆抽奖转盘实景图" loading="lazy" />
              <figcaption className={styles.caption}>周年庆抽奖转盘现场落地图</figcaption>
            </figure>
          </div>

          <div className={styles.gallery}>
            <figure className={styles.galleryCard}>
              <img src="/images/projects/p2/3.jpg" alt="周年庆海报图" loading="lazy" />
              <figcaption className={styles.caption}>周年庆活动主视觉</figcaption>
            </figure>
            <figure className={styles.galleryCard}>
              <img src="/images/projects/p2/4.jpg" alt="周年庆现场布置图" loading="lazy" />
              <figcaption className={styles.caption}>活动现场搭建与布置</figcaption>
            </figure>
            <figure className={styles.galleryCard}>
              <img src="/images/projects/p2/5-color.jpg" alt="物资筹备图" loading="lazy" />
              <figcaption className={styles.caption}>活动物资分拣与筹备</figcaption>
            </figure>
            <figure className={styles.galleryCard}>
              <img src="/images/projects/p2/6-color.jpg" alt="周年庆蛋糕图" loading="lazy" />
              <figcaption className={styles.caption}>周年庆典蛋糕与礼仪布置</figcaption>
            </figure>
            <figure className={styles.galleryCard}>
              <img src="/images/projects/p2/7-color.jpg" alt="茶歇准备图" loading="lazy" />
              <figcaption className={styles.caption}>茶歇区摆台与体验优化</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.section}>
          <h2>项目价值总结</h2>
          <p>
            该项目系统锻炼了我在复杂场景中的跨团队协同、资源整合和细节把控能力。通过对 20+ 执行细节的精准推进，我能够快速识别需求并主动补位，
            最终确保公司级大型活动顺利举办并实现高满意度交付。
          </p>
        </section>
      </div>
    </main>
  );
}
