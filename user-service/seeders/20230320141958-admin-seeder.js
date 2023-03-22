'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('admins',[{
    username: 'medical-record-admin',
    email: 'medical.admin@gmail.com',
    role: 'admin',
    password: await bcrypt.hash('medicalpw', 10),
    createdAt: new Date(),
    updatedAt: new Date()
   }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};
