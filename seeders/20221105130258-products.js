'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      Name: 'The Lion King',
      ContentType: "Movie",
      rating: 1,
      Genre: "Animated",
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Breaking Bad',
      ContentType: "Series",
      rating: 2,
      Genre: "Drugs",
      NextEpDate: '2022-11-8 06:40:10',
      TheatrePass: true,
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Matrix',
      ContentType: "Movie",
      rating: 3,
      Genre: "Psychological",
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Ugly Betty',
      ContentType: "Series",
      rating: 4,
      Genre: "Soap Opera",
      NextEpDate: '2022-11-10 06:40:10',
      TheatrePass: false,
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Finding Nemo',
      ContentType: "Movie",
      rating: 5,
      Genre: "Animated",
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Cyberpunk: Edgerunners',
      ContentType: "Series",
      rating: 6,
      Genre: "Technological",
      NextEpDate: '2022-11-12 06:40:10',
      TheatrePass: true,
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Matrix 2',
      ContentType: "Movie",
      rating: 7,
      Genre: "Psychological",
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Rick and Morty',
      ContentType: "Series",
      rating: 8,
      Genre: "Comedy",
      NextEpDate: '2022-11-14 06:40:10',
      TheatrePass: false,
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'The Prestiege',
      ContentType: "Movie",
      rating: 9,
      Genre: "Magic",
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'The Simpsons',
      ContentType: "Series",
      rating: 10,
      Genre: "Comedy",
      NextEpDate: '2022-11-16 06:40:10',
      TheatrePass: true,
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    }], {});

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
