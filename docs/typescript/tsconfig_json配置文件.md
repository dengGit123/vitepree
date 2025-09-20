## tsconfig.js配置
```
//tsconfig.json
{
  "compilerOptions": {}, // 编译选项
  "include": [], // 包含的文件
  "exclude": [], // 排除的文件
  "extends": "", // 继承其他配置
}
```
### ‌compilerOptions
* target：编译成哪个版本的js，值有 `ES5`、`ES6`、`ESNext`等
* module：生成代码的模块系统，有`CommonJS`,`ESNext`,`AMD`,`System`,`UMD`,`ES2015`,`ES2020`等
* lib：编译过程中需要引入的库文件的列表，比如`DOM`,`ES5`,`ES6`等
* outDir：编译后文件存放的目录
* rootDir：源码根目录
* strict：启用所有严格类型检查选项
* moduleResolution：模块解析策略，如何查找导入的文件，有`node`,`classic`等
  * 1. node：使用Node.js风格，从`node_modules`中查找模块
    * 解析流程：
      * 检查node_modules目录下是否存在模块
      * 处理package.json的`main`/`exports`字段
      * 支持目录索引文件 如`index.ts`, `index.js`等
  * 2. ‌Node16/NodeNext
    * 针对Node.js的ESM模块系统优化，强制要求文件扩展名（如.js）
    * 根据package.json的type字段区分CommonJS/ESM
  * 3. Bundler
    * 针对打包工具（如Webpack、Rollup）优化，支持动态导入和顶层`await`，放宽扩展名要求，兼容现代打包器特性
  * 4. classic：**已废弃** 使用经典风格，仅相对路径从当前目录查找
  * 配置要点：
    * 与`module`关联：
       * module为`ESNext`时，推荐使用`moduleResolution: Node16/NodeNext`或`Bundler`
       * module为`CommonJS`,`AMD`, `System`, `UMD`时，推荐使用`moduleResolution: classic`
* declaration：编译之后是否生成`.d.ts`声明文件
* skipLibCheck：是否跳过对声明文件的进行类型检查，默认为`false`

* typeRoots：查找声明文件的目录，默认为`node_modules/@types`
* types：编译过程中需要引入的声明文件列表，比如`node`,`jest`等

* baseUrl：查找文件的基准目录 `.`代表当前目录
* paths: 查找文件的别名, 和baseURL配合使用, 例如`"@/*": ["./src/*"]`, 这样就可以在代码中使用`@/components/Button.tsx`来引用
```
  "baseUrl": "./",
  "paths": {
    "@/*": ["./src/*"]
  }
```
## include
* 指定要编译的文件的目录，默认是当前目录下的所有文件
```
"include": ["src/**/*"]
```
## exclude
* 排除不希望被编译的文件或目录
```
"exclude": ["node_modules", "**/*.test.ts"]
```
## extends
* 继承其他配置文件中的设置
```
"extends": "./path/to/other-config.json"
```