import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Joey\'s NetHub',
  tagline: '',
  favicon: 'img/favicon.ico',

  plugins: [
    () => ({
      name: 'gtm-plugin',
      injectHtmlTags() {
        return {
          headTags: [
            {
              tagName: 'script',
              innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MBGWG2SH');`
            }
          ],
          preBodyTags: [
            {
              tagName: 'noscript',
              innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBGWG2SH"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }
          ]
        }
      }
    })
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://josudoey.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'josudoey', // Usually your GitHub org/user name.
  projectName: 'josudoey.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './docs.sidebars.ts'
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    metadata: [
      { name: 'algolia-site-verification', content: 'F2C9D91D4568864A' },
      { name: 'google-site-verification', content: 'SR8PdSgjtRYWo8gTxn1Lc0eFsSVqZigByOx_-HDWWI0' },
      { name: 'description', content: 'Joey\'s NetHub - Joey Fang 的個人網站與技術筆記。分享後端開發（Golang、TypeScript）、雲端架構（Docker、Kubernetes）、資料庫優化（PostgreSQL、MongoDB、Redis）、分散式系統與個人專案經驗。' },
      { name: 'keywords', content: 'Joey Fang, Joey\'s NetHub, 後端工程師, Backend Engineer, Golang, TypeScript, Docker, Kubernetes, PostgreSQL, Dcard Ads, 技術筆記' }
    ],
    algolia: { // ref https://docusaurus.io/docs/search#connecting-algolia
      apiKey: '5fac56a2cf4660e6fa6ed09eda736810',
      appId: 'W9K4QVQVO6',
      indexName: 'josudoeyio'
    },
    navbar: {
      title: 'Joey\'s NetHub',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.png'
      },
      items: [
        { // ref https://docusaurus.io/docs/api/themes/configuration#navbar-search
          type: 'search',
          position: 'right'
        },
        { to: '/about', label: 'About', position: 'right' },
        {
          href: '#',
          html: `
            <a href="https://github.com/josudoey" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center;">
              <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" style="height: 24px; margin-right: 0.5rem;" />
            </a>
          `,
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`
    }
  } satisfies Preset.ThemeConfig,
  customFields: {
    defaultEnabledComment: true
  }
}

export default config
