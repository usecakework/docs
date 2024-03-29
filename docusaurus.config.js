// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'cakework',
  tagline: 'baking',
  url: 'https://www.cakework.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cakework', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),      
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
      navbar: {
        title: 'cakework docs!',
        logo: {
          alt: 'Logo',
          src: 'img/cakework_logo.png',
          href: 'https://www.cakework.com'
        },
        // items: [
        //   {
        //     href: 'https://github.com/usecakework',
        //     label: 'GitHub',
        //     position: 'right',
        //   },
        // ],
      },
      footer: {
        style: 'light',
        links: [        
            {
              label: 'GitHub',
              href: 'https://github.com/usecakework',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/yB6GvheDcP',
            },
            {
              label: 'Email',
              href: 'mailto:hi@cakework.com',
            },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sahale, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
