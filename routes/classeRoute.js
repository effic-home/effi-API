module.exports = function(app) {
  var classe = require('../controllers/classeController');

  app.route('/classes')
    .get(classe.getAllClasses)
    .post(classe.createClasse);

  app.route('/classes/:idClasse')
    .get(classe.getInfoClasse)
    .put(classe.updateClasse)
    .delete(classe.deleteClasse);
};