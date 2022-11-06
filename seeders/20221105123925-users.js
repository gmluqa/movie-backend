'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      FirstName: 'Victor',
      LastName: 'Prezzie',
      Email: 'victor@gmail.com',
      Password: 'password1234',
      UserType: 'Admin',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      FirstName: 'Mary',
      LastName: 'Wilkins',
      Email: 'mary@gmail.com',
      Password: 'asdasd23',
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      FirstName: 'Justin',
      LastName: 'Errot',
      Email: 'justin@gmail.com',
      Password: 'vcz32f',
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      FirstName: 'Gary',
      LastName: 'Thomas',
      Email: 'gary@gmail.com',
      Password: 'vzcxv34',
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      FirstName: 'Jerry',
      LastName: 'Godot',
      Email: 'jerry@gmail.com',
      Password: 'vczvx323',
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      FirstName: 'Phoenix',
      LastName: 'Wright',
      Email: 'phoenix124@gmail.com',
      Password: 'vczvarv432',
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      FirstName: 'Mia',
      LastName: 'Fey',
      Email: 'miafey@gmail.com',
      Password: 'zxcv23241vcx',
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    }, {
      FirstName: 'German',
      LastName: 'Gully',
      Email: 'german@gmail.com',
      Password: 'cvxcv21',
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    }, {
      FirstName: 'Johnothan',
      LastName: 'Wilkins',
      Email: 'johnothan@gmail.com',
      Password: 'zxcv31hth3',
      UserType: 'User',
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    }, {
      FirstName: 'Dalai',
      LastName: 'Llama',
      Email: 'dalai@gmail.com',
      Password: 'mmm123t1s',
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
