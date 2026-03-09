import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '韩曜骏 | Personal Profile',
  description: '韩曜骏个人介绍网站：工作经验、教育背景、项目成果与能力概览。'
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
