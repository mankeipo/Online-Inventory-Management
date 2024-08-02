'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        Name: 'Product 1',
        Image: null, // Assuming you handle BLOB data appropriately
        Price: 10.99,
        Stocks: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Name: 'Product 2',
        Image: null, // Assuming you handle BLOB data appropriately
        Price: 20.99,
        Stocks: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Name: 'Product 3',
        Image: null, // Assuming you handle BLOB data appropriately
        Price: 30.99,
        Stocks: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
