import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'W3 Energy Whitepaper',
  tagline: 'Digital infrastructure for the global energy transition',
  favicon: 'img/w3-logo-32.png',

  url: 'https://whitepaper.w3-energy.org',
  baseUrl: '/',
  organizationName: 'W3-Energy',
  projectName: 'whitepaper',
  trailingSlash: false,

  i18n: { defaultLocale: 'en', locales: ['en'] },

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Enable Mermaid parsing in Markdown/MDX
  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [[
    'classic',
    {
      docs: {
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.ts'),
        showLastUpdateTime: false,
        showLastUpdateAuthor: false,
      },
      blog: false,
      theme: { customCss: require.resolve('./src/css/custom.css') },
    } satisfies Preset.Options
  ]],

  themeConfig: {
    docs: {
      sidebar: { hideable: true, autoCollapseCategories: true },
      versionPersistence: 'localStorage',
    },

    navbar: {
      title: 'W3 Energy',
      logo: { alt: 'W3 Energy', src: 'img/w3-logo.png', srcDark: 'img/w3-logo.png' },
      hideOnScroll: false,
      items: [
        { to: '/', label: 'Whitepaper', position: 'left' },
        // { href: '/whitepaper.pdf', label: 'Download PDF', position: 'right' },
        { href: 'https://w3-energy.org', label: 'Website', position: 'right' },
        { href: 'https://w3-energy.org/waitlist.html', label: 'Get Whitelisted', position: 'right' },
      ],
    },

    footer: {
      style: 'light',
      links: [],
      copyright: `© ${new Date().getFullYear()} W3-Energy.org`,
    },

    image: 'img/og-card.png',

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['solidity', 'bash', 'json'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
      ],
    },

    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'light',
      disableSwitch: false,
    },

    // Minimal, validator-safe Mermaid config (no themeVariables, no startOnLoad, no securityLevel)
    mermaid: {
      theme: { light: 'base', dark: 'base' },
    },

    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
    metadata: [],
  },
};

export default config;
