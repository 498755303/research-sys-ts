module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;

  const Department = app.model.define(
    "department_info",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      company_id: { type: INTEGER, allowNull: false },
      department_name: { type: STRING(128), allowNull: false },
      manager_id: { type: INTEGER, allowNull: false },
      department_desc: STRING(128),
      id_path: { type: STRING(255), allowNull: false },
      parent_id: { type: INTEGER, allowNull: false },
      parent_name: { type: STRING(128), allowNull: false },
      creator_id: { type: INTEGER, allowNull: false },
      created_time: { type: DATE, defaultValue: NOW },
      updated_time: { type: DATE, defaultValue: NOW },
      status: { type: INTEGER, defaultValue: 1 },
      is_deleted: { type: INTEGER, defaultValue: 0 },
    },
    {
      freezeTableName: true, // 不自动将表名添加复数,
      timestamps: false
    }
  );

  return Department;
};
