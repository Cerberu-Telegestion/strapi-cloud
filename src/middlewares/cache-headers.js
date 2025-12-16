module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    // Agregar headers de caché para imágenes
    if (ctx.url.match(/\.(jpg|jpeg|png|gif|ico|svg|webp)$/i)) {
      ctx.set('Cache-Control', 'public, max-age=31536000, immutable');
    }
  };
};

