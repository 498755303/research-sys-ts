module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;

  const Company = app.model.define(
    "company_info",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: STRING(30), allowNull: false },
      creator_id: { type: INTEGER, allowNull: false },
      last_update_uid: { type: INTEGER, allowNull: false },
      created_time: { type: DATE, defaultValue: NOW },
      updated_time: { type: DATE, defaultValue: NOW },
      status: { type: INTEGER, defaultValue: 1 },
      is_deleted: { type: INTEGER, defaultValue: 0 },
    },
    {
      freezeTableName: true, // 不自动将表名添加复数
      timestamps: false
    }
  );

  return Company;
};
