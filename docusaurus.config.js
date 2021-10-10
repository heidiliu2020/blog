const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: `Liu Jung Ting (Heidi)`,
  tagline: `喜歡貓，喜歡旅行。期許自己未來能實現赴日當工程師的夢想。`,
  url: 'https://github.com/heidiliu2020/docusaurus-wiki',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon_avatar.ico',
  organizationName: 'heidiliu2020', // Usually your GitHub org/user name.
  projectName: 'docusaurus-wiki',   // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/heidiliu2020/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/heidiliu2020/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: false,
      navbar: {
        title: `前端新米｜日々進化中`,
        hideOnScroll: false,
        logo: {
          alt: 'My Site Logo',
          src: 'img/avatar.jpeg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/heidiliu2020',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dev Wiki',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Dev Note',
            items: [
              {
                label: 'Hexo Blog',
                to: 'https://heidiliu2020.github.io/',
              },
              {
                label: 'HackMD',
                to: 'https://hackmd.io/@Heidi-Liu',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Medium',
                href: 'https://heidi-coding.medium.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/heidiliu2020',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Heidi's Wiki, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
