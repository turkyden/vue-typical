# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"



岗位职责：

1. 负责产品化二次开发
2. 基于低代码开发平台

职位描述

1. 开发公司产品PC端和移动端产品，实现业务功能和交互效果；
2. 优化产品性能和前端代码质量；
3. 持续改进产品的易用性与用户体验。

职位要求

1. 本科及以上学历，1~3 年 WEB 前端开发经验；
2. 熟练使用 JavaScript、HTML、CSS 等 WEB 前端技术；
3. 熟练使用 React/Vue
4. 熟悉各种跨浏览器兼容性技术，熟悉响应式布局和屏幕适配技术；
5. 对页面布局具有深刻理解，注重细节，善于分析并改善产品的视觉感觉和用户体验；
6. 快速学习能力和较强的团队协作能力与沟通能力。
