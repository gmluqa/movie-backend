'use strict';
const { hashPassword } = require('../services/user.service')
// Passwords are hashed during seeding

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      FirstName: 'Victor',
      LastName: 'Prezzie',
      Email: 'victor@gmail.com',
      Password: await hashPassword('password1234'),
      UserType: 'Admin',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      FirstName: 'Mary',
      LastName: 'Wilkins',
      Email: 'mary@gmail.com',
      Password: await hashPassword('asdasd23'),
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      FirstName: 'Justin',
      LastName: 'Errot',
      Email: 'justin@gmail.com',
      Password: await hashPassword('asdasd23'),
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      FirstName: 'Gary',
      LastName: 'Thomas',
      Email: 'gary@gmail.com',
      Password: await hashPassword('vzcxv34'),
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      FirstName: 'Jerry',
      LastName: 'Godot',
      Email: 'jerry@gmail.com',
      Password: await hashPassword('vczvx323'),
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      FirstName: 'Phoenix',
      LastName: 'Wright',
      Email: 'phoenix124@gmail.com',
      Password: await hashPassword('vczvarv432'),
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      FirstName: 'Mia',
      LastName: 'Fey',
      Email: 'miafey@gmail.com',
      Password: await hashPassword('zxcv23241v'),
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    }, {
      FirstName: 'German',
      LastName: 'Gully',
      Email: 'german@gmail.com',
      Password: await hashPassword('vzcxv34'),
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    }, {
      FirstName: 'Johnothan',
      LastName: 'Wilkins',
      Email: 'johnothan@gmail.com',
      Password: await hashPassword('asda234234'),
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    }, {
      FirstName: 'Dalai',
      LastName: 'Llama',
      Email: 'dalai@gmail.com',
      Password: await hashPassword('zxc8j9c83'),
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
