module.exports = app => {
  const { STRING, INTEGER, DATE, NOW } = app.Sequelize;

  const User = app.model.define(
    "user_info",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      company_id: { type: INTEGER, allowNull: false },
      department_id: { type: INTEGER, allowNull: false },
      user_name: { type: STRING(128), allowNull: false },
      user_password: { type: STRING(255), allowNull: false },
      real_name: { type: STRING(128), allowNull: false },
      user_telephone: { type: STRING(32), allowNull: false },
      last_login_time: DATE,
      last_login_ip: STRING(128),
      creator_id: { type: INTEGER, allowNull: false },
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

  return User;
};
