'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      Name: 'The Lion King',
      Poster: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/John_Carmack_E3_2006.jpg',
      ContentType: "Movie",
      rating: 1,
      Genre: "Animated",
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Breaking Bad',
      Poster: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/John_Carmack_E3_2006.jpg',
      ContentType: "Series",
      rating: 2,
      Genre: "Drugs",
      EpInWeek: true,
      TheatrePass: true,
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Matrix',
      Poster: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/John_Carmack_E3_2006.jpg',
      ContentType: "Movie",
      rating: 3,
      Genre: "Psychological",
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Ugly Betty',
      Poster: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/John_Carmack_E3_2006.jpg',
      ContentType: "Series",
      rating: 4,
      Genre: "Soap Opera",
      EpInWeek: false,
      TheatrePass: false,
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Finding Nemo',
      Poster: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/John_Carmack_E3_2006.jpg',
      ContentType: "Movie",
      rating: 5,
      Genre: "Animated",
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Cyberpunk: Edgerunners',
      Poster: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/John_Carmack_E3_2006.jpg',
      ContentType: "Series",
      rating: 6,
      Genre: "Technological",
      EpInWeek: true,
      TheatrePass: true,
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Matrix 2',
      Poster: 'https://pics.filmaffinity.com/Matrix_Reloaded-153250831-large.jpg',
      ContentType: "Movie",
      rating: 7,
      Genre: "Psychological",
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Rick and Morty',
      Poster: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/John_Carmack_E3_2006.jpg',
      ContentType: "Series",
      rating: 8,
      Genre: "Comedy",
      EpInWeek: false,
      TheatrePass: false,
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'The Prestiege',
      Poster: 'https://m.media-amazon.com/images/I/81720O+IDcL._SL1500_.jpg',
      ContentType: "Movie",
      rating: 9,
      Genre: "Magic",
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'The Simpsons',
      Poster: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/John_Carmack_E3_2006.jpg',
      ContentType: "Series",
      rating: 10,
      Genre: "Comedy",
      EpInWeek: true,
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
