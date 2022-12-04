'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      Name: 'Ghost In The Shell',
      Poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v5NNSikH5w7Bz8SDcqxLEwVD4wW.jpg',
      ContentType: "Movie",
      rating: 1,
      Genre: "Animated",
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Samurai Pizza Cats',
      Poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zQ4lohCOwaxb9T8VofAw2SkudxO.jpg',
      ContentType: "Series",
      rating: 2,
      Genre: "Comedy",
      EpInWeek: true,
      TheatrePass: true,
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Ninja Scroll',
      Poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qzZEnaXwv4wss2QalEo4Uf9BAwh.jpg',
      ContentType: "Movie",
      rating: 3,
      Genre: "Fantasy",
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Berserk: The Golde Age - Memorial Edition (2022)',
      Poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/l5TQqMkoZ1WFsNSmbOtkN8vtniu.jpg',
      ContentType: "Series",
      rating: 4,
      Genre: "Fantasy",
      EpInWeek: false,
      TheatrePass: false,
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Goku Midnight Eye',
      Poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hYrSpGG81TsoAi1zBusx1agQ8kO.jpg',
      ContentType: "Movie",
      rating: 5,
      Genre: "Sci-Fiction",
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'City Hunter',
      Poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/umqvjTihvYAIzVd6BAdVCCXZP5U.jpg',
      ContentType: "Series",
      rating: 6,
      Genre: "Action",
      EpInWeek: true,
      TheatrePass: true,
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Akira',
      Poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/neZ0ykEsPqxamsX6o5QNUFILQrz.jpg',
      ContentType: "Movie",
      rating: 7,
      Genre: "Action",
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Ranma 1/2',
      Poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ypMxPKmZph46vBLVnrVrMV3hzLB.jpg',
      ContentType: "Series",
      rating: 8,
      Genre: "Comedy",
      EpInWeek: false,
      TheatrePass: false,
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'The Fist Of The North Star',
      Poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pqdyv9Z4no4cElRtbpMw17STpOH.jpg',
      ContentType: "Movie",
      rating: 9,
      Genre: "Magic",
      CreatedAt: '1998-06-10 06:40:10',
      UpdatedAt: '1998-06-10 06:40:10'
    },
    {
      Name: 'Doomed Megalopolis',
      Poster: 'https://i.pinimg.com/originals/3f/07/7b/3f077b9f2f2321d29a2b4edd4f2e5d1f.jpg',
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
