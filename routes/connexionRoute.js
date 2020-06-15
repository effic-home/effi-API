module.exports = function(app) {
    var connexion = require('../controllers/connexionController');

    app.route('/connexion/:email/:password')
      .get(connexion.connexion);

    app.route("/inscription")
      .post(connexion.inscription);
};
