import Link from 'next/link';
import styles from '../detail.module.css';

const withBasePath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

export default function FixedAssetProjectPage() {
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
          <h1 className={styles.title}>项目介绍：固定资产管理数字化提质增效工程</h1>
          <p className={styles.lead}>
            在广州凡岛网络科技有限公司任职行政实习生期间，我主导并执行了公司固定资产的全面盘点与体系升级项目。该项目旨在解决公司在快速扩张过程中，
            因资产基数大、存放分散导致的账实不符及盘点效率低下的核心痛点。
          </p>
        </section>

        <section className={styles.section}>
          <h2>1. 核心挑战与现状分析</h2>
          <ul className={styles.list}>
            <li>资产规模庞大：需盘点资产总量超过 1,000 件，分布在 12 栋不同的办公楼宇中。</li>
            <li>管理链路冗长：原有盘点周期长达 30 天，数据反馈滞后，无法有效指导采购决策。</li>
            <li>数据质量瓶颈：项目启动前，账实相符率仅为 85%，存在明显的资产管理盲区。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. 解决方案与执行策略</h2>
          <ul className={styles.list}>
            <li>精细化方案设计：制定“楼层 + 类别”双维度盘点计划，将任务拆解为可追踪单元。</li>
            <li>数字化工具赋能：利用 ChatGPT 等 AI 工具辅助 Excel 数据清洗与逻辑校验。</li>
            <li>标准化体系建设：搭建办公用品数据看板，形成采购至领用的全生命周期流程。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>“7天全速盘点”计划展示：从 30 天到 7 天的跨越</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>阶段</th>
                  <th>时间节点</th>
                  <th>详细执行计划</th>
                  <th>交付成果</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>准备期</td>
                  <td>第 1 天</td>
                  <td>导出旧台账，利用 AI 工具提取关键字段并排除重复项，生成 1,000+ 资产基础校验库。</td>
                  <td>数字化基准盘点表</td>
                </tr>
                <tr>
                  <td>执行期</td>
                  <td>第 2 - 4 天</td>
                  <td>
                    统筹资源完成 12 栋楼宇实地核对，按“工位、会议室、公共区”顺序分片包干并实时上传实盘数据。
                  </td>
                  <td>12 栋楼宇实盘原始数据</td>
                </tr>
                <tr>
                  <td>核销期</td>
                  <td>第 5 - 6 天</td>
                  <td>将实盘结果与台账自动比对，对差异点（遗失、位移、新增）进行二次现场复核。</td>
                  <td>差异分析与异常处理报告</td>
                </tr>
                <tr>
                  <td>总结期</td>
                  <td>第 7 天</td>
                  <td>输出最终盘点报告，更新固定资产卡片，上线办公用品看板并建立后续采购基准。</td>
                  <td>账实相符率提升至 98%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2>项目现场与成果图</h2>
          <div className={styles.gallery}>
            <figure className={styles.galleryCard}>
              <img src={withBasePath('/images/projects/p1/8.jpg')} alt="固定资产盘点现场图1" loading="lazy" />
              <figcaption className={styles.caption}>资产仓储区域盘点场景</figcaption>
            </figure>
            <figure className={styles.galleryCard}>
              <img src={withBasePath('/images/projects/p1/9.jpg')} alt="固定资产盘点现场图2" loading="lazy" />
              <figcaption className={styles.caption}>办公物资与台账核对场景</figcaption>
            </figure>
            <figure className={styles.galleryCard}>
              <img src={withBasePath('/images/projects/p1/10.jpg')} alt="固定资产盘点现场图3" loading="lazy" />
              <figcaption className={styles.caption}>资产标签化与编号管理记录</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.section}>
          <h2>项目成效总结</h2>
          <p>
            通过本项目实施，盘点周期压缩 76%（30 天降至 7 天），账实相符率提升 13 个百分点（85% 升至 98%）。该过程验证了我对 ChatGPT /
            Excel 等数字化工具的熟练应用能力，也体现了我在复杂事务中的执行力与结果导向意识。
          </p>
        </section>
      </div>
    </main>
  );
}
