module.exports = function(app) {
    var reservation = require('../controllers/reservationController');

    app.route('/reservations')
        .get(reservation.getAllReservations)
        .post(reservation.createReservation);

    app.route('/reservations/:idReservation')
        .get(reservation.getInfoReservation)
        .put(reservation.updateReservation)
        .delete(reservation.deleteReservation);

    app.route('/reservations/salle/:idSalle')
        .get(reservation.getAllReservationsBySalle);

    app.route('/reservations/user/:idUser')
        .get(reservation.getAllReservationsByUser);
};
