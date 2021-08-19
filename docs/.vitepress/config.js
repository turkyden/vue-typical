const base = process.env.NODE_ENV === 'production' ? '/vue-typical' : '';
const { resolve } = require('path');

module.exports = {
  title: 'VueTypical',
  description: 'ddsdsd',
  // 扫描srcIncludes里面的 *.md文件
  srcIncludes: ['src'],
  alias: {
    // 为了能在demo中正确的使用  import { X } from 'vue-typical'
    [`vue-typical`]: resolve('./src'),
  },
  base,
  themeConfig: {
    // logo: '../logo.svg',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'en-US',
    locales: {
      '/': {
        lang: 'en-US',
        title: 'VueTypical',
        description: '_description',
        label: 'English',
        selectText: 'Languages',
        nav: [{ text: 'Guide', link: '/' }],
        sidebar: [
          { text: 'Getting Started', link: '/' },
          { text: 'DEMO', link: '/components/typical/' },
        ],
      },
      '/zh/': {
        lang: 'zh-CN',
        title: 'VueTypical',
        description: '_description',
        label: '中文',
        selectText: '语言',
        nav: [{ text: '指南', link: '/' }],
        sidebar: [
          { text: '介绍', link: '/zh/' },
          { text: '示例', link: '/zh/components/typical/' },
        ],
      },
    },
    search: {
      searchMaxSuggestions: 10,
    },
    repo: '_user/vue-typical',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};
