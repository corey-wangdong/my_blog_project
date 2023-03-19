const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { getPluginsContext, getNavBarPluginsItems } = require('./utils');

// /** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Corey',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  // onBrokenLinks: 'throw',
  // onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.jpeg',
  // organizationName: 'facebook',
  // projectName: 'docusaurus',

  presets: [
    [
      'classic',
      // /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs/react',
          routeBasePath: 'react',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: getPluginsContext(),

  themeConfig:
    // /** @type {import('@docusaurus/preset-classic').ThemeConfig} */Z
    ({
      navbar: {
        title: '首页',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          ...getNavBarPluginsItems(),
          {
            to: '/blog',
            label: '博客',
            position: 'right'
          },
          {
            to: '/blog',
            label: '博客',
            position: 'right'
          }
        ]
      },
      header: {
        style: 'dark',
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
