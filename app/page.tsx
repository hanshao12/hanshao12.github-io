'use client';

import Link from 'next/link';
import { CSSProperties, MouseEvent, useEffect, useMemo, useRef, useState } from 'react';

type NavItem = {
  id: string;
  label: string;
  target: string;
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
  honors?: string[];
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
  summary: string;
  points: SkillPoint[];
};

type ContactItem = {
  title: string;
  text: string;
  href: string;
  icon: string;
};

const pointIcons: Record<string, string> = {
  固定资产: '🏷',
  办公用品: '📦',
  会务支持: '🗂',
  企业文化: '🎉',
  活动落地: '📍',
  动线运营: '🧭',
  复盘优化: '📈'
};

const navItems: NavItem[] = [
  { id: 'education', label: '学历背景', target: 'education-title' },
  { id: 'internships', label: '实习经历', target: 'internships-title' },
  { id: 'projects', label: '个人项目', target: 'projects-title' },
  { id: 'skills', label: '核心能力', target: 'skills-title' },
  { id: 'contact', label: '联系我', target: 'contact-title' }
];

const projectCards: ProjectCard[] = [
  {
    title: 'Vibe Coding制作小程序',
    summary:
      '围绕企业内部办公用品与固定资产申领场景，使用 Vibe Coding 快速完成微信小程序原型搭建、交互打磨与演示链路验证。',
    tags: ['微信小程序', 'Vibe Coding', 'AI协同'],
    href: '/projects/vibe-coding-mini-program',
    cover: '/images/home/projects/project-04.jpg',
    coverAlt: 'Vibe Coding 制作小程序项目封面'
  },
  {
    title: '个人网站设计与开发',
    summary:
      '围绕个人展示与项目呈现需求，完成作品集网站的信息架构梳理、视觉排版、交互动效与项目详情页搭建，并持续进行细节优化。',
    tags: ['个人品牌', '交互设计', '响应式'],
    href: '/projects/personal-website',
    cover: '/images/home/projects/project-05.jpg',
    coverAlt: '个人网站设计与开发项目封面'
  },
  {
    title: '固定资产精细化盘点优化',
    summary:
      '围绕“盘点效率 + 账实一致”双目标，完成资产台账与现场资产数字化核对闭环，实现盘点周期与准确率同步提升。',
    tags: ['资产管理', '数据治理', '流程优化'],
    href: '/projects/fixed-asset',
    cover: '/images/home/projects/project-01.jpg',
    coverAlt: '固定资产智能盘点项目封面'
  },
  {
    title: '企业周年庆全流程策划执行',
    summary:
      '作为核心执行成员参与公司17周年庆，从策划、采购、视觉设计到现场统筹与复盘，保障多环节协同与0失误落地。',
    tags: ['活动运营', '资源协调', '细节执行'],
    href: '/projects/anniversary',
    cover: '/images/home/projects/project-02.jpg',
    coverAlt: '凡岛周年庆项目封面'
  },
  {
    title: '国家社科基金数字化治理研究',
    summary:
      '参与算法推荐治理与风险规避相关课题，覆盖文献综述、深度访谈、Nvivo编码分析及学术成果输出全流程。',
    tags: ['学术研究', '政策分析', 'Nvivo'],
    href: '/projects/nsfc-governance',
    cover: '/images/home/projects/project-03.jpg',
    coverAlt: '国家社科基金项目封面'
  }
];

const internships: Internship[] = [
  {
    period: '2024.09 - 2024.11',
    company: '广州凡岛网络科技有限公司',
    role: '行政实习生',
    description:
      '负责固定资产、办公用品、企业文化及会务支持管理，通过流程优化与数据化管理提升行政运营效率。',
    points: [
      '固定资产：搭建“楼层+资产类别”盘点体系，编写固定资产盘点SOP。',
      '办公用品：建立办公用品管理看板，规范采购-库存-领用流程，支撑行政成本管控。',
      '会务支持：统筹公司会议筹备与现场执行，保障会议高效落地。',
      '企业文化：参与策划并执行公司周年庆活动，负责活动方案、物料协调与现场执行。'
    ],
    logo: '/images/logos/fandow-20.webp',
    logoAlt: '凡岛网络 logo'
  },
  {
    period: '2020.12 - 2021.06',
    company: '宜家福州商场',
    role: '销售部实习生',
    description:
      '参与商场筹备至开业阶段的运营支持工作，重点承担活动执行协同、卖场动线配合及宣传物料落地，在高节奏运营场景中提升现场应变与跨团队协同能力。',
    points: [
      '活动落地：协助完成5项营销活动执行与宣传物料落地，提升到店转化与参与体验。',
      '动线运营：参与开业期卖场动线与活动节奏协调，保障多岗位高效协同。',
      '复盘优化：建立活动执行清单与复盘机制，沉淀标准化流程，提升活动筹备效率。'
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
      '主修自动化行政与数字政府建设、行政管理现代化、行政法、社会统计学等。\n2025.9荣获研究生国家奖学金。研究生期间连续三年获得学业奖学金。',
    honors: ['研究生国家奖学金'],
    logo: '/images/logos/gdut-22.webp',
    logoAlt: '广东工业大学校徽',
    campus: [
      {
        period: '2024.09 - 2025.12',
        title: '人文社科高等研究院科研助理',
        desc: '负责排布学术会议议程，提升流程流畅度；构建研究文献数据库，输出研究报告3份（2份纳入课题汇编）。'
      },
      {
        period: '2023.09 - 2026.06',
        title: '生活委员',
        desc: '负责班级同学医保工作，设计医保参保提醒表单实现状态自动追踪；组织团建活动3次，参与率达100%。'
      }
    ]
  },
  {
    period: '2019.09 - 2023.06',
    school: '福建理工大学（本科）',
    major: '工商管理',
    description:
      '主修人力资源管理、管理学、市场营销、大数据分析、运营管理。\n2021.05 荣获“全国跨境电商实战技能大赛”校级团队一等奖；2021.06 荣获“优秀学生干部”。',
    honors: ['优秀学生干部'],
    logo: '/images/logos/fjut-21.webp',
    logoAlt: '福建理工大学校徽',
    campus: [
      {
        period: '2020.09 - 2021.09',
        title: '鳝溪易班工作站摄影部部长',
        desc: '主导策划并落地3项校级大型活动；负责学校宣传视频摄制与剪辑；构建培训体系并带教新成员。'
      },
      {
        period: '2019.09 - 2021.09',
        title: '副班长',
        desc: '带领班级荣获2019年校级活动“苍霞好班级”二等奖；负责班级活动策划、组织与执行。'
      }
    ]
  }
];

const skills: SkillGroup[] = [
  {
    title: 'AI 工具应用',
    summary: '动手实验 AI 工具，搭建工作流解决实际问题。',
    points: [
      { icon: '✦', label: 'Claude · ChatGPT · Gemini' },
      { icon: '⌘', label: 'Vibe Coding 实战' },
      { icon: '⟲', label: 'AI 工作流搭建' }
    ]
  },
  {
    title: '产品与交付',
    summary: '从需求拆解到上线的全流程独立交付能力。',
    points: [
      { icon: '◫', label: '需求分析与转译' },
      { icon: '◉', label: '原型设计与迭代' },
      { icon: '◎', label: '0到1项目交付' }
    ]
  },
  {
    title: '行政与运营',
    summary: '将事务梳理成标准流程，推动跨部门高效落地。',
    points: [
      { icon: '↔', label: '流程标准化' },
      { icon: '⬡', label: '资产与物资管理' },
      { icon: '◌', label: '活动策划执行' }
    ]
  },
  {
    title: '数字化办公',
    summary: '用工具与软件提升多场景工作效率。',
    points: [
      { icon: '▥', label: 'PPT · Word · Excel' },
      { icon: '✎', label: 'PS · PR · AE' },
      { icon: 'A', label: '计算机二级' }
    ]
  }
];

const contacts: ContactItem[] = [
  {
    title: '邮箱',
    text: 'hanyaojun0704@163.com',
    href: 'mailto:hanyaojun0704@163.com',
    icon: '✉'
  },
  {
    title: '电话',
    text: '15059220563',
    href: 'tel:15059220563',
    icon: '☎'
  },
  {
    title: 'QQ',
    text: '1010085459',
    href: 'https://wpa.qq.com/msgrd?v=3&uin=1010085459&site=qq&menu=yes',
    icon: '◎'
  }
];

export default function Home() {
  const withBasePath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

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
    const saved = window.localStorage.getItem('site-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved === 'light' || saved === 'dark' ? saved : prefersDark ? 'dark' : 'light';
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      window.localStorage.setItem('site-theme', next);
      return next;
    });
  };

  useEffect(() => {
    const homeSection = document.getElementById('home');
    const ids = navItems.map((item) => item.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'home') {
              setActiveSection('');
            } else {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.02
      }
    );

    if (homeSection) observer.observe(homeSection);
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

  const heroGreetingChars = Array.from('Hi，我是韩曜骏');
  const [activeGreetingIndex, setActiveGreetingIndex] = useState<number | null>(null);
  const greetingCharRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [openCampusSections, setOpenCampusSections] = useState<Record<string, boolean>>({});

  const handleGreetingMove = (event: MouseEvent<HTMLParagraphElement>) => {
    if (reducedMotion) return;

    let nextIndex: number | null = null;
    let minDistance = Number.POSITIVE_INFINITY;

    greetingCharRefs.current.forEach((node, index) => {
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const distance = Math.abs(event.clientX - centerX);

      if (distance < minDistance) {
        minDistance = distance;
        nextIndex = index;
      }
    });

    setActiveGreetingIndex((prev) => (prev === nextIndex ? prev : nextIndex));
  };

  const toggleCampusSection = (key: string) => {
    setOpenCampusSections((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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
                href={`#${item.target}`}
                className={activeSection === item.id ? 'active' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="切换主题">
            <span className="theme-icon" aria-hidden="true">
              {theme === 'light' ? '☀' : '🌙'}
            </span>
            <span className="theme-text">{theme === 'light' ? '日间' : '夜间'}</span>
          </button>
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
          <div className="intro-heading-group">
            <p
              className="intro-greeting intro-float-up intro-float-up-1 intro-greeting-hover"
              aria-label="Hi，我是韩曜骏"
              onMouseMove={handleGreetingMove}
              onMouseLeave={() => setActiveGreetingIndex(null)}
            >
              {heroGreetingChars.map((char, index) => {
                const distance = activeGreetingIndex === null ? null : Math.abs(activeGreetingIndex - index);
                const stateClass =
                  distance === 0
                    ? 'is-active'
                    : distance === 1
                      ? 'is-near'
                      : distance === 2
                        ? 'is-near-2'
                        : '';

                return (
                  <span
                    key={`${char}-${index}`}
                    ref={(node) => {
                      greetingCharRefs.current[index] = node;
                    }}
                    className={`intro-greeting-char ${stateClass}`.trim()}
                    aria-hidden="true"
                  >
                    <span className="intro-greeting-char-inner">{char === ' ' ? ' ' : char}</span>
                  </span>
                );
              })}
            </p>
          </div>

          <p className="intro-email intro-float-up intro-float-up-4">行政管理与组织运营优化</p>
          <div className="intro-actions intro-float-up intro-float-up-5">
            <a href="#projects-title" className="action-btn primary">
              查看个人项目
            </a>
            <a href="#contact-title" className="action-btn ghost">
              联系我
            </a>
          </div>

          <div className="intro-visual intro-float-up intro-float-up-5">
            <img src={withBasePath('/images/home/hero-person.svg')} alt="首页人物插画" loading="eager" />
          </div>
        </div>
      </section>

      <section id="education" className="section-padding reveal">
        <div className="container">
          <h2 id="education-title" className="section-title-anchor">学历背景 / Education</h2>
          <div className="edu-timeline">
            {educationItems.map((item, index) => (
              <article key={`${item.school}-${item.period}`} className="edu-timeline-item">
                <div className="edu-timeline-axis">
                  <span className="edu-dot" />
                  {index !== educationItems.length - 1 ? <span className="edu-line" /> : null}
                </div>

                {(() => {
                  const campusSectionKey = `${item.school}-campus`;
                  const isOpen = Boolean(openCampusSections[campusSectionKey]);
                  return (
                    <div className={`card education-card${isOpen ? ' is-campus-open' : ''}`}>
                      <button
                        type="button"
                        className="education-card-trigger"
                        onClick={() => toggleCampusSection(campusSectionKey)}
                        aria-expanded={isOpen}
                      >
                        <div className="education-top">
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

                          {item.honors?.length ? (
                            <div className="education-honors" aria-label={`${item.school}荣誉`}>
                              {item.honors.map((honor) => (
                                <span
                                  key={`${item.school}-${honor}`}
                                  className={`education-honor-pill${honor.includes('研究生国家奖学金') ? ' is-highlight' : ''}`}
                                >
                                  <span className="education-honor-icon-wrap" aria-hidden="true">
                                    <span className="education-honor-ribbon ribbon-left" />
                                    <span className="education-honor-ribbon ribbon-right" />
                                    <span className="education-honor-medal">
                                      <span className="education-honor-star">✦</span>
                                    </span>
                                  </span>
                                  <span className="education-honor-label">{honor}</span>
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>

                        <div className="education-desc">
                          {(() => {
                            const lines = item.description.split('\n');
                            const markers = ['•', '•', '•', '•'];
                            return lines.map((line, idx) => (
                              <div key={`${item.school}-desc-${idx}`} className="education-desc-line">
                                <span className={`education-line-marker marker-style-${(idx % 4) + 1}`} aria-hidden="true">
                                  {markers[idx % markers.length]}
                                </span>
                                <span className="education-line-text">{line}</span>
                              </div>
                            ));
                          })()}
                        </div>

                        <div className="education-card-footer">
                          <span className="education-card-hint">{isOpen ? '点击收起校园经历' : '点击展开校园经历'}</span>
                          <span className="education-card-chevron" aria-hidden="true">
                            <span className="education-card-chevron-icon" />
                          </span>
                        </div>
                      </button>

                      <div className="campus-block">
                        <div className={`campus-block-content${isOpen ? ' is-open' : ''}`}>
                          <div className="campus-block-content-inner">
                            <div className="campus-list">
                              {item.campus.map((campusItem, campusIndex) => {
                                const campusMarkers = ['•', '•', '•', '•'];
                                return (
                                  <div key={`${campusItem.period}-${campusItem.title}`} className="campus-item">
                                    <p className="campus-period">{campusItem.period}</p>
                                    <p className="campus-title">{campusItem.title}</p>
                                    <div className="campus-desc">
                                      <span className={`campus-line-marker marker-style-${(campusIndex % 4) + 1}`} aria-hidden="true">
                                        {campusMarkers[campusIndex % campusMarkers.length]}
                                      </span>
                                      <span className="campus-line-text">{campusItem.desc}</span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="internships" className="section-padding reveal">
        <div className="container">
          <h2 id="internships-title" className="section-title-anchor">实习经历 / Internship Experience</h2>
          <div className="internship-grid">
            {internships.map((item) => (
              <article key={`${item.company}-${item.period}`} className="card internship-card">
                <div className="internship-head">
                  <div className="company-logo-wrap">
                    <img src={withBasePath(item.logo)} alt={item.logoAlt} loading="lazy" />
                  </div>
                  <div className="internship-head-content">
                    <h3>{item.company}</h3>
                    <div className="internship-pill-row">
                      <span className="internship-pill internship-pill-period">
                        <span className="internship-pill-icon internship-pill-icon-period" aria-hidden="true" />
                        <span>{item.period}</span>
                      </span>
                      <span className="internship-pill internship-pill-role">
                        <span className="internship-pill-icon internship-pill-icon-role" aria-hidden="true" />
                        <span>{item.role}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="internship-body">
                  <p className="internship-desc">{item.description}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>
                        {point.split('：').length > 1 ? (
                          <>
                            <span className="point-icon" aria-hidden="true">
                              {pointIcons[point.split('：')[0]] ?? '•'}
                            </span>
                            <span className="point-label">{point.split('：')[0]}：</span>
                            {point.split('：').slice(1).join('：')}
                          </>
                        ) : (
                          point
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-padding reveal">
        <div className="container">
          <h2 id="projects-title" className="section-title-anchor">个人项目 / Personal Projects</h2>
          <div className="projects-flow">
            {projectCards.map((project, index) => (
              <article
                key={project.title}
                className={`card project-feature${index % 2 === 1 ? ' project-feature-reverse' : ''}`}
              >
                <div className="project-feature-copy">
                  <span className="project-feature-kicker">Project 0{index + 1}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="tag-row project-feature-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={project.href} className="detail-link project-feature-link">
                    查看详情
                    <span className="detail-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>

                <div className="project-feature-media">
                  <div className="project-feature-cover">
                    <img src={withBasePath(project.cover)} alt={project.coverAlt} loading="lazy" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-padding reveal">
        <div className="container">
          <h2 id="skills-title" className="section-title-anchor">核心能力 / Core Capabilities</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <article key={group.title} className="card skill-panel skill-panel-ability">
                <div className="skill-panel-header">
                  <h3 className="skill-panel-title">{group.title}</h3>
                  <p className="skill-panel-summary">{group.summary}</p>
                </div>
                <div className="skill-list">
                  {group.points.map((point) => (
                    <span key={point.label} className="skill-badge">
                      <span className="skill-icon" aria-hidden="true">
                        {point.icon}
                      </span>
                      <span className="skill-badge-label">{point.label}</span>
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
          <h2 id="contact-title" className="section-title-anchor">联系我 / Contact</h2>
          <div className="contact-grid">
            {contacts.map((item) => (
              <article key={item.title} className="card contact-card">
                <div className="contact-label-row">
                  <span className="contact-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <p className="contact-label">{item.title}</p>
                </div>
                <p className="contact-value">
                  <a
                    href={item.href.startsWith('/') ? withBasePath(item.href) : item.href}
                    target={item.title === 'QQ' ? '_blank' : undefined}
                    rel="noreferrer"
                    download={item.title === '下载简历' ? true : undefined}
                  >
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
