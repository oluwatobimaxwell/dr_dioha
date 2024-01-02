'use strict';

/**
 * welcome-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::welcome-content.welcome-content');
