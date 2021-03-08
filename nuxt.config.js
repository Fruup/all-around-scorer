export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'all-around-scorer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600&display=swap' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
  ],

  // global style resources (accessible in every style sheet)
  styleResources: {
    scss: [
      '~/assets/scss/global.scss',
    ]
  },

  // nuxt content options
  content: {
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // sitemap
  sitemap: {
    hostname: 'https://all-around-scorer.soon.it/',
    async routes() {
      // imports
      const fs = require('fs');
      const path = require('path');
      const SOURCE = './dist/';

      // check if directory is generated route
      const isRoute = routeName => {
        const routePath = path.join(SOURCE, routeName);
        const route = fs.lstatSync(routePath);

        if (!route.isDirectory()) return false;

        const routeContent = fs.readdirSync(routePath);

        return routeContent.length == 1 && routeContent[0] === 'index.html';
      };

      // return only generated routes
      return fs.readdirSync(SOURCE).filter(isRoute);
    },
  },
}
