'use strict';

/**
 * academic-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::academic-content.academic-content');
