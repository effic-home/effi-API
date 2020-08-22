module.exports = function(app) {
  var users = require('../controllers/usersController');

  app.route('/users')
    .get(users.getAllUsers);

  app.route("/users/:idUser")
    .get(users.getInfoUser)
    .put(users.updateUser)
    .delete(users.deleteUser);
    
  app.route('/users/type/:idType')
  .get(users.getUsersByType);

  app.route('/acces/:idSalle/:idPuce')
  .get(users.accesSalle);
};
