import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>LirixAI</span>,
  siteTitle: "LirixAI Documentation",  // Sets the title for all pages
  project: {
    link: 'https://github.com/tanishqsrivastavaa/LirixAI',
  },
  chat: {
    link: 'https://discord.gg/CjhC2Zb2',
  },
  docsRepositoryBase: 'https://github.com/tanishqsrivastavaa/LirixAI',  // Updated repo link
  footer: {
    text: '© 2025 LirixAI. All rights reserved.',
  },
}

export default config
