# 韩曜骏 · 个人作品集

以行政中台系统、工位管理系统、餐费分析和序程项目管理为主题的个人作品集。首页以三层玻璃文件夹承载四张可点击作品卡片。

## 开发与发布

```sh
npm ci
npm run dev
npm run build
```

沿用 Next.js 静态导出与原有 GitHub Pages 工作流。构建产物位于 `out/`，推送 `main` 会触发部署，自定义域名为 hanyaojun.com。

## 内容入口

- `app/projects-data.ts`：作品文案、链接、状态和技术信息。
- `app/page.tsx` / `app/home.css`：单屏文件夹首页、扇形展开、触屏切换与关于弹窗。
- `app/components/ProductPreview.tsx`：以代码绘制的产品界面与分层文件夹示意。
- `app/projects/[slug]/page.tsx`：四个静态项目详情页。
- `app/project-stories.ts`：基于项目资料整理的案例正文、流程、模块与设计取舍。`app/projects/[slug]/case.css`：详情页布局。

界面图为概念示意，不含真实业务数据。餐费分析尚缺原始项目资料，相关页面明确标注资料状态。行政、工位及序程的文案参考各自 GitHub 仓库；应用访问仍需飞书业务权限。未将私有项目源码放入此公开仓库。

本次移除旧首页履历、旧项目详情页和旧公开图片/附件。原始素材目录和独立小程序源码作为历史资料保留，不参与新网站构建。
