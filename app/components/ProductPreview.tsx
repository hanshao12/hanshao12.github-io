import type { Project } from '../projects-data';

export default function ProductPreview({ project, large = false }: { project: Project; large?: boolean }) {
  return <div className={`product-stage ${project.color} ${large ? 'large' : ''}`}>
    <div className="stage-orbit" />
    {!large ? <div className="folder-back" aria-hidden="true"/> : null}
    <div className="product-window" aria-label={`${project.name}界面概念示意`}>
      <div className="window-top"><span className="window-dots"><i/><i/><i/></span><span>{project.name}</span><span>↗</span></div>
      <div className="window-body"><aside className="mock-sidebar"><b className="mock-logo">{project.number === '04' ? '序' : '悦'}</b><span className="selected"/><span/><span/><span/><span/><i/></aside>
      <div className="mock-content">
        <div className="mock-heading"><div><small>{project.en}</small><h4>{project.number === '01' ? '工作，从容开始' : project.number === '02' ? '空间一目了然' : project.number === '03' ? '餐费分析概览' : '每一步，都有序'}</h4></div><span className="mock-avatar">H</span></div>
        {project.number === '01' ? <><div className="mock-banner"><span>行政服务 · 触手可及</span><b>让日常，更简单。</b><div className="banner-ring"/></div><div className="service-grid">{['报修申请','活动报名','员工福利','本周菜单','行政提醒','抽奖投票'].map((v,i)=><div key={v}><span>{['⌘','✳','◇','☷','◷','✧'][i]}</span>{v}</div>)}</div><div className="mock-bottom"><span>服务动态</span><i/><i/></div></> : null}
        {project.number === '02' ? <><div className="mock-tabs"><b>空间平面图</b><span>人员分配</span><span>盘点管理</span></div><div className="floor-plan"><span className="room room-a">会议室</span><span className="room room-b">功能间</span><div className="desk-grid">{Array.from({length:24},(_,i)=><i key={i} className={i%5===0?'free':''}/>)}</div><div className="floor-corridor">公共通道</div></div><div className="mock-legend"><i/> 已分配 <i/> 可分配</div></> : null}
        {project.number === '03' ? <><div className="mini-metrics"><div><small>分析维度</small><b>费用趋势</b></div><div><small>数据视角</small><b>结构分布</b></div></div><div className="chart-panel"><span>费用趋势 · 概念示意</span><svg viewBox="0 0 320 90" role="img" aria-label="装饰性费用趋势示意，不代表真实业务数据"><defs><linearGradient id="chartfill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3eb7bc" stopOpacity=".3"/><stop offset="100%" stopColor="#3eb7bc" stopOpacity="0"/></linearGradient></defs><path d="M0 65 C25 65 25 25 55 35 S90 70 120 45 S160 60 190 30 S230 55 260 25 S300 25 320 10 L320 90 L0 90Z" fill="url(#chartfill)"/><path d="M0 65 C25 65 25 25 55 35 S90 70 120 45 S160 60 190 30 S230 55 260 25 S300 25 320 10" fill="none" stroke="#25a8b5" strokeWidth="3"/></svg></div><div className="chart-bars">{[45,70,52,85,64,92,74,60,83,69,88,77].map((v,i)=><i key={i} style={{height:`${v}%`}}/>)}</div></> : null}
        {project.number === '04' ? <><div className="mock-tabs"><b>项目总览</b><span>任务</span><span>排期</span></div><div className="kanban">{['待开始','进行中','已完成'].map((s,i)=><div key={s}><strong><i/>{s}</strong>{[0,1,2].slice(0,i===1?2:3).map((v)=><div className="task-card" key={v}><span className={`task-label label-${i}`}>{['计划','执行','交付'][i]}</span><b>{[['明确项目目标','拆解关键任务','梳理执行流程'],['推进任务协作','跟进里程碑'],['完成阶段验收','沉淀复盘记录','归档项目资料']][i][v]}</b><div><i/><span>↗</span></div></div>)}</div>)}</div></> : null}
      </div></div>
    </div>{!large ? <div className="folder-face" aria-hidden="true"><span className="folder-mark">↗</span><span><small>SELECTED PROJECT / {project.number}</small><b>{project.name}</b></span><span className="folder-hint">OPEN ↗</span></div> : null}<span className="stage-caption">INTERFACE CONCEPT / 界面概念示意</span>
  </div>;
}
