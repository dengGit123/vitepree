import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

let docsPath = path.resolve(__dirname,'../docs')
let dirNameArr = fs.readdirSync(docsPath)
console.log(dirNameArr)
let sidebar: Record<string, Array<{
  text: string;
  items: Array<{
    text: string;
    link: string;
  }>;
}>> = {}
dirNameArr.forEach((item) => {
  let file = fs.readdirSync(path.resolve(docsPath,item),'utf-8')
  sidebar[`/docs/${item}/`] = [{
    text: item,
    items: []
  }]
  file.forEach((fileItem) => {
    let fileName = fileItem.split('.')[0]
    if(fileName === 'index') return
    sidebar[`/docs/${item}/`][0].items.push({
      text:fileName,
      link:`/docs/${item}/${fileItem}`
    })
  })
})
console.log(sidebar['/docs/typescript/'][0].items)
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:process.env.NODE_ENV === 'production' ? '/vitepree/' : '/',
  outDir:"./dist",
  title: "项目文档记录说明",
  description: "记录项目中的说明",
  lastUpdated: true,
  themeConfig: {
    outline:[2,4],
    outlineTitle:'当前页导航',
    nav: [
      { text: 'TypeScript', link: '/docs/typescript/' },
      {
        text:'浏览器API',
        link:'/docs/browser_api'
      },
      {
        text:'代码规范',
        link:'/docs/code_standard'
      },
      {
        text:'js知识点',
        link:'/docs/js_points'
      }
    ],
    sidebar:sidebar,
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    socialLinks: [],
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
