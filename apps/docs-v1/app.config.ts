export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'shadcn-docs-nuxt',
      description: 'Beautifully designed Nuxt Content template built with shadcn-vue. Customizable. Compatible. Open Source.',
    },
    theme: {
      customizable: false,
      color: 'zinc',
      radius: 1,
    },
    header: {
      showTitle: false,
      darkModeToggle: false,
      logo: {
        light: '/svg/logo.svg',
        dark: '/svg/logo.svg',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/JUNERDD/ob-design',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: '© Ob Design 2024',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/JUNERDD/ob-design',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/JUNERDD/ob-design',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/JUNERDD/ob-design/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
})
