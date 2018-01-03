'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trainings', [
      {
        startdate: '2018-01-01',
        starttime: '07:00:00',
        duration: '01:00:00',
        UserId: 1,
        boat_1_name: "BRAM",
        boat_2_name: "KEES",
        boat_3_name: "MARIA",
        boat_4_name: "KIM"
      },
      {
        startdate: '2018-01-01',
        starttime: '07:30:00',
        duration: '01:30:00',
        UserId: 2,
        boat_1_name: "JOHN",
        boat_2_name: "DAVE",
        boat_3_name: "KIMBERLY",
        boat_4_name: "CINDY"
      },
      {
        startdate: '2018-01-01',
        starttime: '08:00:00',
        duration: '02:00:00',
        UserId: 3,
        boat_1_name: "AMAYA",
        boat_2_name: "AZADEH",
        boat_3_name: "KAMRAN",
        boat_4_name: "VAHID"
      },
      {
        startdate: '2018-01-02',
        starttime: '07:00:00',
        duration: '02:00:00',
        UserId: 1,
        boat_1_name: "BRAM",
        boat_2_name: "KEES",
        boat_3_name: "MARIA",
        boat_4_name: "KIM"
      },
      {
        startdate: '2018-01-02',
        starttime: '07:30:00',
        duration: '01:00:00',
        UserId: 2,
        boat_1_name: "JOHN",
        boat_2_name: "DAVE",
        boat_3_name: "KIMBERLY",
        boat_4_name: "CINDY"
      },
      {
        startdate: '2018-01-02',
        starttime: '08:00:00',
        duration: '01:30:00',
        UserId: 3,
        boat_1_name: "AMAYA",
        boat_2_name: "AZADEH",
        boat_3_name: "KAMRAN",
        boat_4_name: "VAHID"
      },
      {
        startdate: '2018-01-03',
        starttime: '07:00:00',
        duration: '01:30:00',
        UserId: 1,
        boat_1_name: "BRAM",
        boat_2_name: "KEES",
        boat_3_name: "MARIA",
        boat_4_name: "KIM"
      },
      {
        startdate: '2018-01-03',
        starttime: '07:30:00',
        duration: '02:00:00',
        UserId: 2,
        boat_1_name: "JOHN",
        boat_2_name: "DAVE",
        boat_3_name: "KIMBERLY",
        boat_4_name: "CINDY"
      },
      {
        startdate: '2018-01-03',
        starttime: '08:00:00',
        duration: '01:00:00',
        UserId: 3,
        boat_1_name: "AMAYA",
        boat_2_name: "AZADEH",
        boat_3_name: "KAMRAN",
        boat_4_name: "VAHID"
      }]);
    },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Trainings', null, {});
    }
};
