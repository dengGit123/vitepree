import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "项目文档记录说明",
  description: "记录项目中的说明",
  lastUpdated: true,
  themeConfig: {
    outline:[2,4],
    outlineTitle:'当前页导航',
    nav: [
      { text: 'TypeScript', link: '/typescript' },
      {
        text:'浏览器API',
        link:'/browser_api'
      },
      {
        text:'代码规范',
        link:'/code_standard'
      }
    ],
    sidebar: {
      '/typescript/': [
        {
          text: 'TypeScript',
          items: [
            { text: 'any,unknown', link: '/typescript/any_unknown' },
            { text: '索引签名', link: '/typescript/index_Signatures' },
            {
              text:'索引访问类型',link:'/typescript/indexed_access_types'
            },
            {
              text:'void',link:'/typescript/void'
            },
            {
              text:'interface和type的区别',
              link:'/typescript/interface_type'
            },
            {
              text:'数组',
              link:'/typescript/array'
            },
            {
              text:'类',
              link:'/typescript/class'
            },
            {
              text:'tsconfig.json',
              link:'/typescript/tsconfig_json'
            },
            {
              text:'类型断言与类型转换',
              link:'/typescript/type_Assertion'
            },
            {
              text:'typeof',
              link:'/typescript/typeof'
            },
            {
              text:'keyof',
              link:'/typescript/keyof'
            },
            {
              text:'extends',
              link:'/typescript/extends'
            },
            {
              text:'in',
              link:'/typescript/in'
            },
            {
              text:'infer',
              link:'/typescript/infer'
            },
            {
              text:'声明文件',
              link:'/typescript/define_file'
            }
          ]
        }
      ],
      '/browser_api/':[
        {
          text:'浏览器API',
          items:[
            {
              text:'IntersectionObserver',
              link:'/browser_api/IntersectionObserver'
            },
            {
              text:'Page_Visibility_API',
              link:'/browser_api/Page_Visibility_API'
            },
            {
              text:'ResizeObserver',
              link:'/browser_api/ResizeObserver'
            },
            {
              text:'requestAnimationFrame',
              link:'/browser_api/requestAnimationFrame'
            },{
              text:'requestIdleCallback',
              link:'/browser_api/requestIdleCallback'
            },
            {
              text:'Worker‌',
              link:'/browser_api/Worker‌'
            }
          ]
        }
      ],
      '/code_standard/':[
        {
          text:'代码规范',
          items:[
            {
              text:'prettier',
              link:'/code_standard/prettier'
            },
            {
              text:'eslint',
              link:'/code_standard/eslint'
            },
            {
              text:'集成',
              link:'/code_standard/集成'
            },
            {
              text:'husky',
              link:'/code_standard/git_husky'
            }
          ]
        }
      ]
    },
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
