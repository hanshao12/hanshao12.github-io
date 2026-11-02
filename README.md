# 韩曜骏 · 个人作品集

以诗悦行政、诗悦工位管理、餐费分析和序程项目管理为主题的个人作品集。

## 开发与发布

```sh
npm ci
npm run dev
npm run build
```

沿用 Next.js 静态导出与原有 GitHub Pages 工作流。构建产物位于 `out/`，推送 `main` 会触发部署，自定义域名为 hanyaojun.com。

## 内容入口

- `app/projects-data.ts`：作品文案、链接、状态和技术信息。
- `app/page.tsx`：首页、分类筛选与移动端导航。
- `app/components/ProductPreview.tsx`：以代码绘制的产品界面与分层文件夹示意。
- `app/projects/[slug]/page.tsx`：四个静态项目详情页。
- `app/globals.css`：蓝青渐变、响应式布局与动效。

界面图为概念示意，不含真实业务数据。餐费分析尚缺原始项目资料，相关页面明确标注资料状态。行政、工位及序程的文案参考各自 GitHub 仓库；应用访问仍需飞书业务权限。未将私有项目源码放入此公开仓库。

本次移除旧首页履历、旧项目详情页和旧公开图片/附件。原始素材目录和独立小程序源码作为历史资料保留，不参与新网站构建。
