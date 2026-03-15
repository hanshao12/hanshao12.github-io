import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://hanyaojun.com'),
  title: {
    default: '韩曜骏｜行政管理与组织运营优化',
    template: '%s｜韩曜骏'
  },
  description: '韩曜骏个人网站，展示教育背景、实习经历、代表项目与核心能力。',
  applicationName: '韩曜骏个人网站',
  keywords: ['韩曜骏', '个人网站', '行政管理', '组织运营优化', '项目作品集', '个人简历'],
  authors: [{ name: '韩曜骏', url: 'https://hanyaojun.com' }],
  creator: '韩曜骏',
  publisher: '韩曜骏',
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: ['/favicon.svg'],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png' }]
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://hanyaojun.com',
    siteName: '韩曜骏个人网站',
    title: '韩曜骏｜行政管理与组织运营优化',
    description: '查看韩曜骏的教育背景、实习经历、个人项目与核心能力。',
    images: [
      {
        url: '/og-cover.png',
        width: 1200,
        height: 630,
        alt: '韩曜骏个人网站分享预览图'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '韩曜骏｜行政管理与组织运营优化',
    description: '查看韩曜骏的教育背景、实习经历、个人项目与核心能力。',
    images: ['/og-cover.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
