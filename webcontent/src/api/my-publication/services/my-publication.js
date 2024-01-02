'use strict';

/**
 * my-publication service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-publication.my-publication');
