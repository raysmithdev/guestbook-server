const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema ({
  email: {type: String, required: true},
  password: {type: String, required: true},
});


userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`.trim();
});

userSchema.methods.toClient = function () {
  return {
    id: this._id,   
    email: this.email,
  };
}

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10);
};

const User = mongoose.model('User', userSchema);

module.exports = { User };