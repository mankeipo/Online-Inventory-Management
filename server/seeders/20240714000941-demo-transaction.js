'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Transactions', [
      {
        product_ID: 1, // Assume this product exists
        payment_type: 'cash',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_ID: 2, // Assume this product exists
        payment_type: 'card',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_ID: 3, // Assume this product exists
        payment_type: 'cash',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transactions', null, {});
  }
};
