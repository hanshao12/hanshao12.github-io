import type { Metadata } from 'next';
import './globals.css';
import './intro.css';
export const metadata: Metadata = {
 metadataBase: new URL('https://hanyaojun.com'),
 title: {default:'韩曜骏 · 个人作品集',template:'%s｜韩曜骏'},
 description:'从真实问题出发，用产品回应。韩曜骏的个人作品集：行政中台系统、工位管理系统、餐费分析与序程项目管理。',
 icons:{icon:'/favicon.svg'},
 openGraph:{title:'韩曜骏 · 个人作品集',description:'把日常的复杂，变成好用的产品。',url:'https://hanyaojun.com',type:'website',locale:'zh_CN'},
 robots:{index:true,follow:true}
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="zh-CN"><body>{children}</body></html>}
