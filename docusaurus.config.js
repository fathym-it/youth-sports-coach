/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Coach Gearhardt (Coach Mike)',
  tagline: '5U Tee Ball & 7U Coach Pitch',
  url: 'https://coach.gearhardt.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Teams should be Fun!',
      logo: {
        alt: 'Teams should be Fun!',
        src: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Baseball_%28crop%29_transparent.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'The Season',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/fafathym-it/youth-sports-coach',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'The Season',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/fathym-it/youth-sports-coach',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Youth Sports Coach. Built with Docusaurus and Fathym.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/fathym-it/youth-sports-coach/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/fathym-it/youth-sports-coach/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
