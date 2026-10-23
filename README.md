# 韩曜骏个人网站与项目作品集

用于展示个人简历、教育背景、实习经历、代表项目与核心能力的个人网站。

- 网站入口：[hanyaojun.com](https://hanyaojun.com/)
- 技术栈：Next.js、React、TypeScript。
- 部署方式：沿用仓库现有 GitHub Pages 工作流与自定义域名配置。

## 从哪里开始

| 目录或文件 | 内容与用途 |
| --- | --- |
| `app/` | 目前网站的页面源码与样式；修改网站内容从这里开始 |
| `public/` | 网站使用的公开静态资源 |
| `miniprogram-office-supplies/` | 办公用品小程序项目源码与说明，是独立项目资料 |
| `个人网站/` | 原始素材、项目图片与资料 |
| `小程序项目报告书.pdf` | 办公用品小程序项目报告 |
| `.github/workflows/` | 现有自动部署配置 |
| `next.config.mjs` | 静态导出与 GitHub Pages 路径配置 |

## 本地运行

安装 Node.js 和 npm 后，在仓库根目录执行：

```bash
npm ci
npm run dev
```

构建静态网站：

```bash
npm run build
```

项目使用 Next.js 静态导出，构建产物输出到 `out/`。办公用品小程序使用自己的开发与部署流程，详见 [小程序 README](miniprogram-office-supplies/README.md)。

## 维护提示

日常网站内容主要在根目录 `app/` 中维护；`个人网站/` 作为素材目录保留。仓库现有名称和部署路径继续沿用。
