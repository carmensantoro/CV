'use strict';

/**
 * Cv.js controller
 *
 * @description: A set of functions called "actions" for managing `Cv`.
 */

module.exports = {

  /**
   * Retrieve cv records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.cv.search(ctx.query);
    } else {
      return strapi.services.cv.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a cv record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.cv.fetch(ctx.params);
  },

  /**
   * Count cv records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.cv.count(ctx.query, populate);
  },

  /**
   * Create a/an cv record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.cv.add(ctx.request.body);
  },

  /**
   * Update a/an cv record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.cv.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an cv record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.cv.remove(ctx.params);
  }
};
