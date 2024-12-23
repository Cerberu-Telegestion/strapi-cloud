'use strict';

/**
 * location-external router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::location-external.location-external');
