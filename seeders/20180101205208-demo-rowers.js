'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rowers', [
      {
        firstname: 'Bram',
        lastname: 'Everts',
        UserId: 1
      },
      {
        firstname: 'Kees',
        lastname: 'Klaasen',
        UserId: 1
      },
      {
        firstname: 'Maria',
        lastname: 'Doelen',
        UserId: 1
      },
      {
        firstname: 'Kim',
        lastname: 'Goossens',
        UserId: 1
      },
      {
        firstname: 'John',
        lastname: 'Doe',
        UserId: 1
      },
      {
        firstname: 'Dave',
        lastname: 'Greer',
        UserId: 1
      },
      {
        firstname: 'Kimberly',
        lastname: 'Stevens',
        UserId: 1
      },
      {
        firstname: 'Cindy',
        lastname: 'Crawfort',
        UserId: 1
      },
      {
        firstname: 'Amaya',
        lastname: 'Al Madani',
        UserId: 1
      },
      {
        firstname: 'Azadeh',
        lastname: 'Salehi',
        UserId: 1
      },
      {
        firstname: 'Kamran',
        lastname: 'Pashaei',
        UserId: 1
      },
      {
        firstname: 'Vahid',
        lastname: 'Javadi',
        UserId: 1
      },
      {
        firstname: 'Trystan',
        lastname: 'Santos',
        UserId: 1
      },
      {
        firstname: 'Makaila',
        lastname: 'McKinney',
        UserId: 1
      },
      {
        firstname: 'Carson',
        lastname: 'Thomas',
        UserId: 1
      },
      {
        firstname: 'Azul',
        lastname: 'Lucero',
        UserId: 1
      },
      {
        firstname: 'Kayden',
        lastname: 'Weeks',
        UserId: 1
      },
      {
        firstname: 'Jessie',
        lastname: 'Watts',
        UserId: 1
      }]);
    },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rowers', null, {});
  }
};
