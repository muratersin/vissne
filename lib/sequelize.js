const Sequelize = require('sequelize');
const models = require('../app/models');
const logger = require('../lib/logger');
const {
  dbName,
  userName,
  password,
  host,
  pool,
} = require('../config/pg.config');

const sequelize = new Sequelize(dbName, userName, password, {
  host,
  dialect: 'postgres',
  operatorsAliases: false,
  pool,
});

sequelize.authenticate()
  .then(() => logger.info('Connection has been established successfully.'))
  .catch((err) => {
    logger.fatal(err);
    setTimeout(() => {
      process.exit(1);
    }, 2000);
  });

const User = models.user(sequelize, Sequelize);
const Genre = models.genre(sequelize, Sequelize);
const List = models.list(sequelize, Sequelize);
const Movie = models.movie(sequelize, Sequelize);
const ListMovie = models.listMovie(sequelize, Sequelize);

List.belongsTo(User, {
  onDelete: 'CASCADE',
  foreignKey: {
    allowNull: false,
  },
});
Movie.belongsToMany(List, { through: ListMovie, unique: false });
List.belongsToMany(Movie, { through: ListMovie, unique: false });

sequelize.sync({ force: true })
  .then(() => {
    logger.info('Database & tables created!');
  });

module.exports = {
  User,
  Genre,
  List,
  Movie,
  ListMovie,
  Sequelize,
};
