'use strict';

/**
 * location-external service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::location-external.location-external');
