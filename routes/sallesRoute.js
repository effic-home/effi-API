module.exports = function(app) {
    var salles = require('../controllers/sallesController');

    app.route('/salles')
        .get(salles.getAllSalles)
        .post(salles.createSalle);

    app.route('/salles/:idSalle')
        .get(salles.getInfoSalle)
        .put(salles.updateSalle)
        .delete(salles.deleteSalle);

    app.route('/salles/portes/:idSalle')
        .get(salles.getAllPortesBySalle);
};
