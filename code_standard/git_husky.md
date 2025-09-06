## 核心依赖安装
* npm install husky lint-staged @commitlint/cli @commitlint/config-conventional --save-dev
1. husky
* **核心作用**: Git 钩子管理工具，用于在 Git 事件（如提交、推送）时触发自定义脚本，实现自动化任务拦截或执行
* 典型场景
  * 提交前`（pre-commit）`触发代码检查
  * 提交信息校验`（commit-msg）`时验证格式
2. lint-staged
* **核心作用**: 仅对暂存区（Staged）的文件执行代码检查或格式化工具，避免全量扫描,提高效率
* **典型场景**(`package.json`)

```
//package.json
"lint-staged": {
  "*.{js,vue}": ["eslint --fix", "prettier --write"]
}
```
* **协同机制**‌：与 `husky` 的 `pre-commit` 钩子配合，实现提交前自动化修复代码风格
3.  ‌@commitlint/cli
* **核心作用**: 校验 Git 提交信息是否符合预设的规范
* **触发时机**‌：通过 husky 的 commit-msg 钩子调用，拦截不符合规则的提交信息
* 校验规则示例
```
feat(login): add password reset  # 合法
fix: resolve null pointer        # 合法
test                            # 非法（缺少类型）
```
4. @commitlint/config-conventional
* **核心作用**: 提供一套预设的提交信息规范，定义标准提交类型（如 `feat|fix|docs`）
## 协同工作流程
1. **代码提交前**‌：husky 触发 pre-commit 钩子 → lint-staged 修复暂存区文件
2. **提交信息校验**‌：husky 触发 commit-msg 钩子 → @commitlint/cli 读取 @commitlint/config-conventional 规则验证消息格式
3. **拦截机制**‌：任一检查失败则阻止提交，确保代码和提交信息均符合规范
## 常见组合方案
* **基础规范**‌：`husky` + `lint-staged`（代码检查）
* **完整方案**‌：`husky + lint-staged + @commitlint/cli + @commitlint/config-conventional`（代码+提交信息双校验）
## 初始化配置
1. 启用 `Husky`
* 自动生成 .husky 目录并配置 Git 钩子路径：
```
npx husky-init && npm install
//该命令会：
//在 package.json 中添加 prepare 脚本
//创建默认的 pre-commit 钩子文件
//设置 Git 使用 Husky 管理的钩子
```
2. 配置 lint-staged
* 在 package.json 中定义针对不同文件的检查规则
* 此配置仅对暂存区的指定文件运行格式化工具

```
"lint-staged": {
  "*.{js,ts,vue}": ["eslint --fix", "prettier --write"],
  "*.{css,scss}": ["stylelint --fix", "prettier --write"]
}
```
## 钩子文件示例
1. **‌pre-commit**‌ (`.husky/pre-commit`)
* 提交前自动执行代码检查和修复
```
npx lint-staged
```
2. **‌commit-msg**‌ (`.husky/commit-msg`)
* 提交信息校验
```
npx commitlint --edit "$1"
//要求提交信息格式为：type(scope?): subject（如 feat(login): add password reset）
```
## Commitlint 配置
* 创建 `commitlint.config.js` 定义提交规范
```
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']]
  }
};
```
## 常见问题解决
* **‌钩子未触发**‌：检查 .git/config 中 core.hooksPath 是否指向 .husky
* **‌性能优化**‌：通过 lint-staged 仅检查暂存区文件，避免全量扫描
* **‌规则覆盖**‌：确保 eslint-config-prettier 在 ESLint 配置中最后加载，避免格式化冲突
