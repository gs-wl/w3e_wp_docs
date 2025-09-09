import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const L = (label: string, href: string) => ({ type: 'link' as const, label, href });

const sidebars: SidebarsConfig = {
  defaultSidebar: [
    {
      type: 'category',
      label: 'W3 Energy Whitepaper',
      collapsible: true,
      collapsed: false, // root open on load
      items: [
        { type: 'doc', id: 'index', label: 'Overview' },

        {
          type: 'category',
          label: 'Welcome',
          collapsed: false,
          items: [
            L('Introduction', '/#introduction'),
            L('Platform Overview', '/#platform-overview'),
            L('Ecosystem Landscape', '/#ecosystem-landscape'),
            L('Getting Started', '/#getting-started'),
          ],
        },

        {
          type: 'category',
          label: 'Trust & Security',
          collapsed: true,
          items: [
            L('Overview', '/#overview'),
            L('Institutional Security', '/#institutional-security'),
            L('DeFi Incident History & W3E Mitigations', '/#defi-incident-history--w3e-mitigations'),
            L('Audit Reports', '/#audit-reports'),
            L('Bug Bounty Program', '/#bug-bounty-program'),
          ],
        },

        {
          type: 'category',
          label: 'Core Concepts',
          collapsed: true,
          items: [
            L('RWA Energy Tokenization', '/#rwa-energy-tokenization'),
            L('eBonds & Project Finance', '/#ebonds--project-finance'),
            L('Power Contracts (PPAs)', '/#power-contracts-ppas'),
            L('Omnichain Infrastructure', '/#omnichain-infrastructure'),
            L('Governance Framework', '/#governance-framework'),
          ],
        },

        {
          type: 'category',
          label: 'Smart Contracts',
          collapsed: true,
          items: [
            L('Overview (Testnet vs Mainnet)', '/#overview-testnet-vs-mainnet'),
            L('Contract Addresses', '/#contract-addresses'),
            L('Verified Contracts', '/#verified-contracts'),
            L('Roles & Permissions', '/#roles--permissions'),
            L('ABIs & Integration', '/#abis--integration'),
          ],
        },

        {
          type: 'category',
          label: 'Platform Guide',
          collapsed: true,
          items: [
            L('Wallet Connection', '/#wallet-connection'),
            L('Token Interactions', '/#token-interactions'),
            L('Token Utility & Mechanics', '/#token-utility--mechanics'),
            L('Governance Participation', '/#governance-participation'),
            L('Project Onboarding (SPVs)', '/#project-onboarding-spvs'),
          ],
        },

        {
          type: 'category',
          label: 'Tokenomics',
          collapsed: true,
          items: [
            L('Overview', '/#overview-1'),
            L('Allocations & Vesting', '/#allocations--vesting'),
            L('Circulating Supply Schedule', '/#circulating-supply-schedule'),
            L('Deflationary Design', '/#deflationary-design'),
            L('Treasury & Governance', '/#treasury--governance'),
            L('Transparency & Audits', '/#transparency--audits'),
            L('Risks & Disclaimers', '/#risks--disclaimers'),
          ],
        },

        {
          type: 'category',
          label: 'Institutional Framework',
          collapsed: true,
          items: [
            L('Regulatory Design', '/#regulatory-design'),
            L('Partner Integrations', '/#partner-integrations-energy--optional-carbon-registries'),
            L('Compliance Standards', '/#compliance-standards'),
            L('Institutional Features', '/#institutional-features'),
          ],
        },

        {
          type: 'category',
          label: 'Developers',
          collapsed: true,
          items: [
            L('Subgraph', '/#subgraph'),
            L('SDK', '/#sdk'),
            L('API Reference', '/#api-reference'),
            L('Integration Guides', '/#integration-guides'),
            L('Code Examples', '/#code-examples'),
          ],
        },

        {
          type: 'category',
          label: 'Ecosystem',
          collapsed: true,
          items: [
            L('Integrations', '/#integrations'),
            L('Case Studies', '/#case-studies'),
            L('Data Sources', '/#data-sources'),
          ],
        },

        {
          type: 'category',
          label: 'Community',
          collapsed: true,
          items: [
            L('Governance Process', '/#governance-process'),
            L('Treasury Proposals', '/#treasury-proposals'),
            L('Forums & Discussions', '/#forums--discussions'),
            L('Grants & Research', '/#grants--research'),
          ],
        },

        {
          type: 'category',
          label: 'Changelog',
          collapsed: true,
          items: [
            L('Releases', '/#releases'),
            L('Contracts History', '/#contracts-history'),
          ],
        },

        {
          type: 'category',
          label: 'Analytics & Transparency',
          collapsed: true,
          items: [
            L('Circulating Supply Dashboard', '/#circulating-supply-dashboard'),
            L('Treasury Reports', '/#treasury-reports'),
            L('Energy Impact Metrics', '/#energy-impact-metrics'),
            L('Security Monitoring', '/#security-monitoring'),
          ],
        },

        {
          type: 'category',
          label: 'FAQ',
          collapsed: true,
          items: [
            L('Account & Whitelist', '/#account--whitelist'),
            L('Token & Trading', '/#token--trading'),
            L('Technical Support', '/#technical-support'),
            L('General Questions', '/#general-questions'),
          ],
        },

        {
          type: 'category',
          label: 'Legal',
          collapsed: true,
          items: [
            L('Terms of Use', '/#terms-of-use'),
            L('Privacy Policy', '/#privacy-policy'),
            L('Disclaimers', '/#disclaimers'),
            L('Compliance Statement', '/#compliance-statement'),
          ],
        },

        {
          type: 'category',
          label: 'Decentralization & Open Sourcing',
          collapsed: true,
          items: [
            L('Open Source Components', '/#open-source-components'),
            L('Progressive Decentralization', '/#progressive-decentralization'),
            L('Continuous Development', '/#continuous-development'),
            L('Community Stewardship', '/#community-stewardship'),
          ],
        },

        L('References', '/#references'),

        // Footer logo “flag” (enable when ready):
        // {
        //   type: 'html',
        //   value: '<div style="text-align:center; margin-top:2rem;"><img src="/img/logo.png" alt="W3 Energy" width="180"/></div>',
        // },
      ],
    },
  ],
};

export default sidebars;
