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
    logo: '../logo.svg',
    nav: [{ text: 'demo', link: '/math' }],
    lang: 'en-US',
    locales: {
      '/': {
        lang: 'en-US',
        title: 'VueTypical',
        description: '',
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Guide', link: '/' },
          {
            text: 'Changelog',
            link:
              'https://github.com/Turkyden/vue-typical/blob/master/CHANGELOG.md',
          },
        ],
        sidebar: [
          { text: 'Getting Started', link: '/' },
          {
            text: 'Demo',
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
        nav: [
          { text: '入门指南', link: '/' },
          {
            text: '更新日志',
            link:
              'https://github.com/Turkyden/vue-typical/blob/master/CHANGELOG.md',
          },
        ],
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
    repo: 'Turkyden/vue-typical',
    repoLabel: 'Github',
    lastUpdated: true,
    prevLink: true,
    nextLink: true,
  },
};
