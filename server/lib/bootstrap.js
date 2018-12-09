
const initDatabase = require('../database/init');

const { argv } = process;


function bootstrap() {
  for (let i = 2; i < argv.length; i += 1) {
    switch (argv[i]) {
      case 'dbseed':
        initDatabase();
        break;

      default:
        console.log('no args');
        break;
    }
  }
}

module.exports = bootstrap;
