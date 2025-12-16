module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  {
    name: 'strapi::public',
    config: {
      maxAge: 31536000, // 1 año en segundos
    },
  },
  {
    name: 'global::cache-headers',
    resolve: './src/middlewares/cache-headers',
  },
];
