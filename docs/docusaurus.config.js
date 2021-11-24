// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dcey SMP Docs',
  tagline: 'The Documentation for Dcey SMP',
  url: 'https://docs.dcey.net',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Dcey-SMP-Logo.png',
  organizationName: 'No767', // Usually your GitHub org/user name.
  projectName: 'Dcey-SMP-Docs-V6', // Usually your repo name.
  noIndex: true,


  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/No767/Dcey-SMP-Docs-V6/tree/master/docs',
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
        title: 'Dcey SMP Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Dcey-SMP-Logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/No767/Dcey-SMP-Docs-V6',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/No767/Dcey-SMP-Docs-V6',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} No767. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
