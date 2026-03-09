import Link from 'next/link';
import styles from '../detail.module.css';

export default function NsfcGovernanceProjectPage() {
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
          <p className={styles.eyebrow}>Project 03</p>
          <h1 className={styles.title}>项目介绍：国家社科基金项目——数字化治理与风险规避研究</h1>
          <p className={styles.lead}>
            在参与国家社科基金项目《算法推荐的意识形态风险及治理路径研究》期间，我担任课题组核心成员，负责从前瞻性文献综述到实证调研的全流程工作。
            同时通过参加高水平学术会议吸收前沿观点，并转化为高质量学术与理论成果。
          </p>
        </section>

        <section className={styles.section}>
          <h2>1. 学术成果产出表（文章类）</h2>
          <p>本部分展示了我在数字化治理及新质生产力领域的研究实绩。</p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>成果名称</th>
                  <th>发表载体</th>
                  <th>成果性质</th>
                  <th>核心贡献</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>《多元共治：数字技术赋能城市社区智治...》</td>
                  <td>《社会工作与管理》</td>
                  <td>学术期刊论文</td>
                  <td>基于广州旧南海县案例，构建社区智慧治理模型。</td>
                </tr>
                <tr>
                  <td>《用好数字技术推进社区“智治”》</td>
                  <td>《深圳特区报》（理论版）</td>
                  <td>党报理论文章</td>
                  <td>阐述数字技术在基层治理中的应用逻辑。</td>
                </tr>
                <tr>
                  <td>《以新质生产力赋能社会治理智慧化转型》</td>
                  <td>《南方》杂志</td>
                  <td>主流媒体评论</td>
                  <td>探讨新质生产力与社会治理转型的深度融合。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>2. 学术前沿对话表（会议类）</h2>
          <p>通过参加高水平学术活动，持续拓宽研究视野并优化课题研究方法。</p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>时间</th>
                  <th>会议名称</th>
                  <th>举办单位</th>
                  <th>参会价值与收获</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024.05</td>
                  <td>生成式AI与公共管理学术研讨会</td>
                  <td>华东师范大学</td>
                  <td>研讨生成式 AI 在公共管理中的应用边界，反哺课题风险治理研究。</td>
                </tr>
                <tr>
                  <td>2025.03</td>
                  <td>第三届中国创新发展政策与管理年会</td>
                  <td>广东工业大学</td>
                  <td>吸收创新政策最新动态，为《南方》杂志文章积累核心理论素材。</td>
                </tr>
                <tr>
                  <td>2025.05</td>
                  <td>第九届全国科学技术与公共政策论坛</td>
                  <td>南京大学</td>
                  <td>与顶尖学者交流科技治理范式，优化课题结项报告中的政策建议。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>研究成果与参会图集</h2>
          <div className={styles.gallery}>
            <figure className={styles.galleryCard}>
              <img src="/images/projects/p3/11.jpg" alt="研究论文成果图1" loading="lazy" />
              <figcaption className={styles.caption}>论文成果展示：《社会工作与管理》</figcaption>
            </figure>
            <figure className={styles.galleryCard}>
              <img src="/images/projects/p3/12.jpg" alt="研究成果图2" loading="lazy" />
              <figcaption className={styles.caption}>理论文章刊载版面</figcaption>
            </figure>
            <figure className={styles.galleryCard}>
              <img src="/images/projects/p3/13.jpg" alt="研究成果图3" loading="lazy" />
              <figcaption className={styles.caption}>新质生产力主题研究文章</figcaption>
            </figure>
            <figure className={styles.galleryCard}>
              <img src="/images/projects/p3/14.jpg" alt="学术会议参会图1" loading="lazy" />
              <figcaption className={styles.caption}>学术会议研讨与交流现场</figcaption>
            </figure>
            <figure className={styles.galleryCard}>
              <img src="/images/projects/p3/15.jpg" alt="学术会议参会图2" loading="lazy" />
              <figcaption className={styles.caption}>会议报告与主题发言场景</figcaption>
            </figure>
            <figure className={styles.galleryCard}>
              <img src="/images/projects/p3/16.jpg" alt="学术会议参会图3" loading="lazy" />
              <figcaption className={styles.caption}>政策论坛参会记录</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.section}>
          <h2>项目能力总结</h2>
          <ul className={styles.list}>
            <li>科研闭环能力：具备从文献调研、深度访谈到 Nvivo 编码分析的全流程研究经验。</li>
            <li>政策洞察能力：能够快速捕捉“生成式 AI”“新质生产力”等前沿热点并转化为文稿成果。</li>
            <li>表达沟通能力：通过多次全国性论坛交流，强化专业场景下的学术表达与沟通协作能力。</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
