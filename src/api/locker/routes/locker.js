'use strict';

/**
 * locker router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::locker.locker');
