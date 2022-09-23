'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
       name: 'John Doe',
      },{
        name:'radhika'
      },{
        name:'omkar'
      },{
        name:'anju'
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
