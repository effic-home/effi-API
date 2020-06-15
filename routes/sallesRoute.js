module.exports = function(app) {
    var salles = require('../controllers/sallesController');

    app.route('/salles')
        .get(salles.getAllSalles)
        .post(salles.createSalle);

    app.route('/salles/:idSalle')
        .get(salles.getInfoSalle)
        .post(salles.updateSalle)
        .delete(salles.deleteSalle);
};
