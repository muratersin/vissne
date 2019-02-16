
module.exports = (sequelize, type) => {
  const List = sequelize.define('list', {
    name: {
      type: type.STRING(80),
      allowNull: false,
    },
    public: {
      type: type.BOOLEAN,
      defaultValue: false,
    },
  });

  return List;
};
