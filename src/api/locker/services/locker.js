'use strict';

/**
 * locker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::locker.locker');
