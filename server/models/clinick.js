
const Model = require('./model');

class Clinick extends Model {
  constructor(data) {
    super(data);
    this.clinickName = data.clinickName;
    this.email = data.email;
    this.password = data.password;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }
}

module.exports = Clinick;
