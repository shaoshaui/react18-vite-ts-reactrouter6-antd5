# react18-antd5-vite-reactrouter6-ts

致力打造成一个基于新版主流技术的React中后台模版

> ##### 演示地址：[https://shaoshaui.github.io/react18-antd5-vite-reactrouter6-ts](https://shaoshaui.github.io/react18-antd5-vite-reactrouter6-ts)
>
> ##### Github地址：[https://shaoshaui.github.io/react18-antd5-vite-reactrouter6-ts](https://shaoshaui.github.io/react18-antd5-vite-reactrouter6-ts)
>

## 主要技术栈

`react18`、`redux-toolkit`、`vite4`、`antd5`、`ahooks`、`pro-component`、`typescript`、`react-router-dom6`、`css modules`、`css in js`、`emotion`、`axios`

- [ReactJS](https://react.dev/)
- [Redux-Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Vite](https://vitejs.dev)
- [Antd](https://ant.design)
- [ahooks](https://ahooks.js.org/)
- [Pro-Components](https://procomponents.ant.design/components)
- [TypeScript](https://www.typescriptlang.org)
- [React-Router](https://reactrouter.com/en/main)
- [Axios](https://axios-http.com/docs/intro)
- [emotion](https://emotion.sh/docs/introduction)

## lint工具

- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

## 目录结构

```markdown
react18-antd5-template

├─src
| ├─components      // 公共组件
| ├─features        // 业务组件(基于redux)
| ├─hooks           // 公共hooks
| ├─layouts         // 页面布局
| ├─mock            // mock数据
| ├─pages           // 业务页面
| ├─routes          // 路由配置
| ├─types           // 一些ts类型
| ├─utils           // 工具函数
| ├─store.ts        // redux store
| 
├─tsconfig.json     // ts配置
├─vite.config.ts    // vite配置
```

### 开始

- 安装依赖

   ```bash
   pnpm install
   ```

- 本地启动项目

   ```bash
   pnpm dev
   ```

- 生产环境打包

  ```bash
  pnpm build:prod
  ```

### 提交格式

- `feat`: 新增功能
- `fix`: 修复 bug
- `docs`: 仅仅修改了文档，比如 README, CHANGELOG 等等
- `test`: 增加/修改测试用例，包括单元测试、集成测试等
- `style`: 修改了空行、缩进格式、引用包排序等等（不改变代码逻辑）
- `perf`: 优化相关内容，比如提升性能、体验、算法等
- `refactor`: 代码重构，「没有新功能或者 bug 修复」
- `chore`: 改变构建流程、或者增加依赖库、工具等
- `revert`: 回滚到上一个版本
- `merge`: 代码合并
