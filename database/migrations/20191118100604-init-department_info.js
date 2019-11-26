"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    return queryInterface.createTable("department_info", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      company_id: { type: INTEGER, allowNull: false },
      department_name: { type: STRING(128), allowNull: false },
      manager_id: { type: INTEGER, allowNull: false },
      department_desc: STRING(128),
      id_path: { type: STRING(255), allowNull: false },
      parent_id: { type: INTEGER, allowNull: false },
      parent_name: { type: STRING(128), allowNull: false },
      creator_id: { type: INTEGER, allowNull: false },
      created_time: DATE,
      updated_time: DATE,
      status: { type: INTEGER, defaultValue: 1 },
      is_deleted: { type: INTEGER, defaultValue: 0 },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("department_info");
  },
};
