'use client';

import Link from 'next/link';
import { CSSProperties, useEffect, useMemo, useState } from 'react';

type NavItem = {
  id: string;
  label: string;
};

type ProjectCard = {
  title: string;
  summary: string;
  tags: string[];
  href: string;
  cover: string;
  coverAlt: string;
};

type Internship = {
  period: string;
  company: string;
  role: string;
  description: string;
  points: string[];
  logo: string;
  logoAlt: string;
};

type CampusItem = {
  period: string;
  title: string;
  desc: string;
};

type EducationItem = {
  period: string;
  school: string;
  major: string;
  description: string;
  logo: string;
  logoAlt: string;
  campus: CampusItem[];
};

type SkillPoint = {
  icon: string;
  label: string;
};

type SkillGroup = {
  title: string;
  points: SkillPoint[];
};

const navItems: NavItem[] = [
  { id: 'projects', label: '个人项目' },
  { id: 'internships', label: '实习经历' },
  { id: 'education', label: '学历背景' },
  { id: 'skills', label: '技术栈' },
  { id: 'contact', label: '联系我' }
];

const projectCards: ProjectCard[] = [
  {
    title: '固定资产精细化盘点优化',
    summary:
      '围绕“盘点效率 + 账实一致”双目标，完成资产台账与现场资产数字化核对闭环，实现盘点周期与准确率同步提升。',
    tags: ['资产管理', '数据治理', '流程优化'],
    href: '/projects/fixed-asset',
    cover: '/images/home/projects/p1-18.jpg',
    coverAlt: '固定资产智能盘点项目封面'
  },
  {
    title: '企业周年庆全流程策划执行',
    summary:
      '作为核心执行成员参与公司17周年庆，从策划、采购、视觉设计到现场统筹与复盘，保障多环节协同与0失误落地。',
    tags: ['活动运营', '资源协调', '细节执行'],
    href: '/projects/anniversary',
    cover: '/images/home/projects/p2-17.png',
    coverAlt: '凡岛周年庆项目封面'
  },
  {
    title: '国家社科基金数字化治理研究',
    summary:
      '参与算法推荐治理与风险规避相关课题，覆盖文献综述、深度访谈、Nvivo编码分析及学术成果输出全流程。',
    tags: ['学术研究', '政策分析', 'Nvivo'],
    href: '/projects/nsfc-governance',
    cover: '/images/home/projects/p3-23.jpg',
    coverAlt: '国家社科基金项目封面'
  }
];

const internships: Internship[] = [
  {
    period: '2024.09 - 2024.11',
    company: '广州凡岛网络科技有限公司',
    role: '行政实习生',
    description:
      '在公司快速扩张阶段，我参与并主导固定资产管理、办公用品管理和会务支持等核心行政模块，通过“流程拆解 + 数据校验 + 协同推进”机制持续提效。',
    points: [
      '以“楼层 + 类别”构建盘点框架，统筹12栋楼1000+资产核查，将周期由30天缩短至7天。',
      '引入AI辅助Excel数据清洗与差异核销，推动账实相符率由85%提升至98%。',
      '搭建办公用品看板并规范采购、库存、领用流程，为成本控制和采购决策提供数据支持。'
    ],
    logo: '/images/logos/fandow-20.webp',
    logoAlt: '凡岛网络 logo'
  },
  {
    period: '2020.12 - 2021.06',
    company: '宜家福州商场',
    role: '销售部 CA（商业活动）实习生',
    description:
      '参与商场从筹备到开业的运营支持，重点承担活动执行协同、卖场动线配合与宣传物料支持，在高节奏场景中锻炼了现场应变和跨团队协同能力。',
    points: [
      '协助部门完成5项活动方案执行与宣传物料落地，提升到店转化和活动参与体验。',
      '参与开业期现场动线和活动节奏配合，保障多岗位协同推进。',
      '通过标准化执行清单与复盘记录，优化后续活动准备效率。'
    ],
    logo: '/images/logos/ikea-19.webp',
    logoAlt: '宜家 logo'
  }
];

const educationItems: EducationItem[] = [
  {
    period: '2023.09 - 2026.06',
    school: '广东工业大学（硕士）',
    major: '行政管理',
    description:
      '主修自动化行政与数字政府建设、行政管理现代化、行政法、社会统计学。获研究生国家奖学金（前1.5%）及多项学业奖学金。',
    logo: '/images/logos/gdut-22.webp',
    logoAlt: '广东工业大学校徽',
    campus: [
      {
        period: '2024.09 - 2025.12',
        title: '人文社科高等研究院科研助理（硕士）',
        desc: '负责排布学术会议议程，提升流程流畅度；构建研究文献数据库，输出研究报告3份（2份纳入课题汇编）。'
      },
      {
        period: '2023.09 - 2026.06',
        title: '生活委员（硕士）',
        desc: '负责班级同学医保工作，设计医保参保提醒表单实现状态自动追踪；组织团建活动3次，参与率达100%。'
      }
    ]
  },
  {
    period: '2019.09 - 2023.06',
    school: '福建理工大学（本科）',
    major: '工商管理',
    description:
      '主修人力资源管理、管理学、市场营销、大数据分析、运营管理，形成了较完整的管理学理论与实践基础。',
    logo: '/images/logos/fjut-21.webp',
    logoAlt: '福建理工大学校徽',
    campus: [
      {
        period: '2020.09 - 2021.09',
        title: '鳝溪易班工作站摄影部部长（本科）',
        desc: '主导策划并落地3项校级大型活动；负责学校宣传视频摄制与剪辑；构建培训体系并带教新成员。'
      },
      {
        period: '2019.09 - 2021.09',
        title: '副班长（本科）',
        desc: '带领班级荣获2019年校级活动“苍霞好班级”二等奖；负责班级活动策划、组织与执行。'
      }
    ]
  }
];

const skills: SkillGroup[] = [
  {
    title: '行政与运营',
    points: [
      { icon: '⚙', label: '流程标准化' },
      { icon: '📦', label: '资产与物资管理' },
      { icon: '🤝', label: '跨部门协同' }
    ]
  },
  {
    title: '数字化能力',
    points: [
      { icon: '📊', label: '数据看板搭建' },
      { icon: '📁', label: '飞书协同办公' },
      { icon: '✨', label: 'AI工具提效' }
    ]
  },
  {
    title: '研究与写作',
    points: [
      { icon: '📚', label: '文献调研与归纳' },
      { icon: '🧠', label: 'Nvivo编码分析' },
      { icon: '✍', label: '政策议题写作' }
    ]
  },
  {
    title: '语言与表达',
    points: [
      { icon: '🇬🇧', label: '英语 CET-6' },
      { icon: '🎤', label: '学术会议表达' },
      { icon: '🗣', label: '跨场景沟通协作' }
    ]
  }
];

const contacts = [
  {
    title: '邮箱',
    text: 'hanyaojun0704@163.com',
    href: 'mailto:hanyaojun0704@163.com'
  },
  {
    title: '电话',
    text: '15059220563',
    href: 'tel:15059220563'
  },
  {
    title: 'QQ',
    text: '1010085459',
    href: 'https://wpa.qq.com/msgrd?v=3&uin=1010085459&site=qq&menu=yes'
  }
];

export default function Home() {
  const withBasePath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('projects');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => {
      const reduced = media.matches;
      setReducedMotion(reduced);
      if (reduced) {
        setScrollY(0);
      }
    };

    updateMotion();
    media.addEventListener('change', updateMotion);

    let frame = 0;
    const handleScroll = () => {
      if (reducedMotion) {
        return;
      }
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        frame = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      media.removeEventListener('change', updateMotion);
      window.removeEventListener('scroll', handleScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [reducedMotion]);

  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.02
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll('.reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const rootStyle = useMemo(
    () =>
      ({
        '--scroll-offset': `${reducedMotion ? 0 : scrollY}px`
      }) as CSSProperties,
    [reducedMotion, scrollY]
  );

  return (
    <main style={rootStyle}>
      <nav>
        <div className="container nav-container">
          <a href="#home" className="logo">
            <span className="logo-text">HANYAOJUN</span>
            <span className="logo-dot" />
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="intro intro-header-layout">
        <div
          className="bg-decoration"
          style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.12}px))` }}
        />
        <div
          className="bg-decoration-alt"
          style={{ transform: `translate(-50%, calc(-50% + ${scrollY * -0.09}px))` }}
        />

        <div className="container intro-content reveal is-visible">
          <p className="intro-greeting">你好，我是韩曜骏</p>
          <h1 className="intro-main-title">行政管理与组织运营优化</h1>
          <p className="intro-main-desc">
            聚焦职能管理场景，以流程标准化、数据化协同和执行落地为核心能力，持续提升组织运营效率与跨团队协作质量。
          </p>
          <p className="intro-email">
            邮箱：<a href="mailto:hanyaojun0704@163.com">hanyaojun0704@163.com</a>
          </p>
          <div className="intro-actions">
            <a href="#projects" className="action-btn primary">
              查看个人项目
            </a>
            <a href="#contact" className="action-btn ghost">
              联系我
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="section-padding reveal">
        <div className="container">
          <h2>个人项目 / Personal Projects</h2>
          <div className="projects-grid">
            {projectCards.map((project) => (
              <article key={project.title} className="card project-card">
                <div className="project-cover">
                  <img src={withBasePath(project.cover)} alt={project.coverAlt} loading="lazy" />
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={project.href} className="detail-link">
                    查看详情
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="internships" className="section-padding reveal">
        <div className="container">
          <h2>实习经历 / Internship Experience</h2>
          <div className="internship-grid">
            {internships.map((item) => (
              <article key={`${item.company}-${item.period}`} className="card internship-card">
                <div className="internship-head">
                  <div className="company-logo-wrap">
                    <img src={withBasePath(item.logo)} alt={item.logoAlt} loading="lazy" />
                  </div>
                  <div className="internship-head-content">
                    <p className="meta">{item.period}</p>
                    <h3>{item.company}</h3>
                    <p className="role">{item.role}</p>
                  </div>
                </div>
                <div className="internship-body">
                  <p className="internship-desc">{item.description}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-padding reveal">
        <div className="container">
          <h2>学历背景 / Education</h2>
          <div className="edu-timeline">
            {educationItems.map((item, index) => (
              <article key={`${item.school}-${item.period}`} className="edu-timeline-item">
                <div className="edu-timeline-axis">
                  <span className="edu-dot" />
                  {index !== educationItems.length - 1 ? <span className="edu-line" /> : null}
                </div>

                <div className="card education-card">
                  <div className="education-head">
                    <div className="education-logo-wrap">
                      <img src={withBasePath(item.logo)} alt={item.logoAlt} loading="lazy" />
                    </div>
                    <div className="education-head-content">
                      <p className="meta">{item.period}</p>
                      <h3>{item.school}</h3>
                      <p className="role">{item.major}</p>
                    </div>
                  </div>

                  <p className="education-desc">{item.description}</p>

                  <div className="campus-block">
                    <h4>校园经历</h4>
                    <div className="campus-list">
                      {item.campus.map((campusItem) => (
                        <div key={`${campusItem.period}-${campusItem.title}`} className="campus-item">
                          <p className="campus-period">{campusItem.period}</p>
                          <p className="campus-title">{campusItem.title}</p>
                          <p className="campus-desc">{campusItem.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-padding reveal">
        <div className="container">
          <h2>技术栈</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <article key={group.title} className="skill-panel">
                <h3 className="skill-panel-title">
                  <span className="skill-panel-line" />
                  {group.title}
                </h3>
                <div className="skill-list">
                  {group.points.map((point) => (
                    <span key={point.label} className="skill-badge">
                      <span className="skill-icon" aria-hidden="true">
                        {point.icon}
                      </span>
                      {point.label}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding reveal">
        <div className="container">
          <h2>联系我 / Contact</h2>
          <div className="contact-grid">
            {contacts.map((item) => (
              <article key={item.title} className="card contact-card">
                <p className="contact-label">{item.title}</p>
                <p className="contact-value">
                  <a href={item.href} target={item.title === 'QQ' ? '_blank' : undefined} rel="noreferrer">
                    {item.text}
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer>© 2026 Hanyaojun Han | Personal Portfolio</footer>
    </main>
  );
}
