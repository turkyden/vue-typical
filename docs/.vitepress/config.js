const base = process.env.NODE_ENV === 'production' ? '/' : '';
const { resolve } = require('path');

module.exports = {
  title: 'Vue Typical',
  description: '',
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
        description: '',
        label: 'English',
        selectText: 'Languages',
        nav: [{ text: 'Guide', link: '/' }],
        sidebar: [
          { text: 'Getting Started', link: '/' },
          {
            text: 'Examples',
            children: [
              { text: 'Basic Usage', link: '/basic/' },
              { text: 'Composition API', link: '/composition/' },
            ],
          },
        ],
      },
      '/zh/': {
        lang: 'zh-CN',
        title: 'VueTypical',
        description: '',
        label: '中文',
        selectText: '语言',
        nav: [{ text: '指南', link: '/' }],
        sidebar: [
          { text: '快速开始', link: '/zh/' },
          {
            text: '示例',
            children: [
              { text: '基本方法', link: '/zh/basic/' },
              { text: 'Composition API', link: '/zh/composition/' },
            ],
          },
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
