module.exports = {
  title: 'Manuel Lora Román',
  tagline: 'Estudiante de ASIR',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/faviconmio.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MLR',
      logo: {
        alt: 'Mi logo',
        src: 'img/logomio.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ManuelLoraRoman/ApuntesASIR',
          label: 'Apuntes de ASIR',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Redes Sociales',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/manuelloraroman/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ManuelLoraRoman',
            },
	    {
	      label: 'Medium',
	      href: 'https://medium.com/@manuelloraroman',
	    },
	    {
	      label: 'Facebook',
	      href: 'https://www.facebook.com/manu.loraroman',
	    },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ManuelLoraRoman/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mi Página Personal construida con Docusaurus.`,
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
            'https://github.com/ManuelLoraRoman/ApuntesASIR/tree/master/Implantaci%C3%B3n%20de%20Aplicaciones%20Web',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
