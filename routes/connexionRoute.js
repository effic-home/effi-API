module.exports = function(app) {
    var connexion = require('../controllers/connexionController');

    app.route('/connexion')
      .get(connexion.connexion);

    app.route("/inscription")
      .post(connexion.inscription);
};