module.exports = function(app) {
  var users = require('../controllers/usersController');

  app.route('/users')
    .get(users.getAllUsers);

  app.route("/users/:idUser")
    .get(users.getInfoUser)
    .post(users.updateUser)
    .delete(users.deleteUser);
};