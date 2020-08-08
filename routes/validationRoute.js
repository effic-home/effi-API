module.exports = function(app) {
    var validation = require('../controllers/validationController');

    app.route('/validations')
        .get(validation.getAllValidations)
        /*.post(validation.createValidation)*/;

    app.route('/validations/:idValidation')
        .get(validation.getInfoValidation)
        .put(validation.updateValidation)
        .delete(validation.deleteValidation);

    app.route('/validations/user/:idUser')
        .get(validation.getAllValidationsByUser);

    app.route('/validations/status/:idStatus')
        .get(validation.getAllReservationsByStatus);

};
