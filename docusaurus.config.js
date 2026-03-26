import lightCodeTheme from '@docusaurus/prism-include-languages/themes/prism-light';
import darkCodeTheme from '@docusaurus/prism-include-languages/themes/prism-dark';

const config = {
  title: 'Awesome AI/ML Resources',
  tagline: 'Free resources and a roadmap to learn Machine Learning and Artificial Intelligence in 2025',
  favicon: 'img/favicon.ico',

  url: 'https://armankhondker.github.io',
  baseUrl: '/awesome-ai-ml-resources/',

  organizationName: 'armankhondker',
  projectName: 'awesome-ai-ml-resources',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/armankhondker/awesome-ai-ml-resources/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/awesome-ai-ml-resources.png',
    navbar: {
      title: 'Awesome AI/ML Resources',
      logo: {
        alt: 'AI/ML Logo',
        src: 'img/awesome-ai-ml-resources.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'roadmap',
          position: 'left',
          label: 'Roadmap',
        },
        {
          type: 'doc',
          docId: 'books',
          position: 'left',
          label: 'Books',
        },
        {
          type: 'doc',
          docId: 'projects',
          position: 'left',
          label: 'Projects',
        },
        {
          type: 'doc',
          docId: 'interviews',
          position: 'left',
          label: 'Interviews',
        },
        {
          type: 'doc',
          docId: 'newsletters',
          position: 'left',
          label: 'Newsletters',
        },
        {
          href: 'https://github.com/armankhondker/awesome-ai-ml-resources',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Roadmap',
              to: '/docs/roadmap',
            },
            {
              label: 'Books',
              to: '/docs/books',
            },
            {
              label: 'Projects',
              to: '/docs/projects',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/armankhondker/awesome-ai-ml-resources',
            },
            {
              label: 'AI Engineer Newsletter',
              href: 'https://www.aimlengineer.io/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Arman. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
