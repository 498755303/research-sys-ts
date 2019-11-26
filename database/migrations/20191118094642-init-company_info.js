"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    return queryInterface.createTable("company_info", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: STRING(30), allowNull: false },
      creator_id: { type: INTEGER, allowNull: false },
      last_update_uid: { type: INTEGER, allowNull: false },
      created_time: DATE,
      updated_time: DATE,
      status: { type: INTEGER, defaultValue: 1 },
      is_deleted: { type: INTEGER, defaultValue: 0 },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("company_info");
  },
};
