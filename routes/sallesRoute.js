module.exports = function(app) {
    var salles = require('../controllers/sallesController');

    app.route('/salles')
        .get(salles.getAllSalles)
        .post(salles.createSalle);

    /*app.route('/salles/:date')
        .get(salles.getSallesDisposByDate);*/

    app.route('/salles/dispoNow')
        .get(salles.getSallesDisposNow);

    app.route('/salles/:idSalle')
        .get(salles.getInfoSalle)
        .put(salles.updateSalle)
        .delete(salles.deleteSalle);

    app.route('/salles/portes/:idSalle')
        .get(salles.getAllPortesBySalle);

    app.route('/portes')
        .get(salles.getAllPortes)
        .post(salles.createPorte);

    app.route('/portes/:idPorte')
        .get(salles.getInfoPorte)
        .put(salles.updatePorte)
        .delete(salles.deletePorte);
};
