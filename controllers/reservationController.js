var sql = require("../db/connexion");

exports.getAllReservations = function(req, res) {
    var requete = "SELECT resa.id_reservation, users.nom, users.prenom, date, heure, duree, intitule, nb_personnes, salle.numero_salle, prof.nom as nom_prof,\n"+
        " validation.etat as etat_validation \n" +
        "FROM reservation as resa\n" +
        "JOIN users ON (users.id_user = resa.id_user)\n" +
        "JOIN salle ON (salle.id_salle = resa.id_salle)\n" +
        "LEFT JOIN users as prof ON (prof.id_user = resa.id_prof)\n" +
        "LEFT JOIN validation ON (validation.id_validation = resa.id_validation)";

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there are no reservations" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};


exports.createReservation = function(req, res) {
    var requete = "INSERT INTO reservation SET ?";

    sql.query(requete, req.body, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry we can't create this reservation" });
            } else {
                res.status(200).send({ error: false, message: "Inserted" });
            }
        }
    });
};


exports.getInfoReservation = function(req, res) {
    var requete = "SELECT resa.id_reservation, users.nom, users.prenom, date, heure, duree, intitule, nb_personnes, salle.numero_salle, prof.nom as nom_prof,\n"+
        " validation.etat as etat_validation \n" +
        "FROM reservation as resa\n" +
        "JOIN users ON (users.id_user = resa.id_user)\n" +
        "JOIN salle ON (salle.id_salle = resa.id_salle)\n" +
        "LEFT JOIN users as prof ON (prof.id_user = resa.id_prof)\n" +
        "LEFT JOIN validation ON (validation.id_validation = resa.id_validation)\n"+
        "WHERE resa.id_reservation = " + req.params.idReservation;

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there is no reservation" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};

exports.updateReservation = function(req, res) {
    var requete = "UPDATE reservation SET ? WHERE id_reservation = " + req.params.idReservation;

    sql.query(requete, req.body, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry we can't update this reservation" });
            } else {
                res.status(200).send({ error: false, message: "Updated" });
            }
        }
    });
};


exports.deleteReservation = function(req, res) {
    var requete = "DELETE FROM reservation WHERE id_reservation = " + req.params.idReservation;

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry we can't delete this reservation" });
            } else {
                res.status(200).send({ error: false, message: "Deleted" });
            }
        }
    });
};

exports.getAllReservationsBySalle = function(req, res) {
    var requete = "SELECT resa.id_reservation, users.nom, users.prenom, date, heure, duree, intitule, nb_personnes, salle.numero_salle, prof.nom as nom_prof,\n"+
        " validation.etat as etat_validation \n" +
        "FROM reservation as resa\n" +
        "JOIN users ON (users.id_user = resa.id_user)\n" +
        "JOIN salle ON (salle.id_salle = resa.id_salle)\n" +
        "LEFT JOIN users as prof ON (prof.id_user = resa.id_prof)\n" +
        "LEFT JOIN validation ON (validation.id_validation = resa.id_validation)\n"+
        "WHERE resa.id_salle = "+ req.params.idSalle +
        " ORDER BY resa.date DESC";

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there is no class" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};



exports.getAllReservationsByUser = function(req, res) {
    var requete = "SELECT resa.id_reservation, users.nom, users.prenom, date, heure, duree, intitule, nb_personnes, salle.numero_salle, prof.nom as nom_prof,\n"+
        " validation.etat as etat_validation \n" +
        "FROM reservation as resa\n" +
        "JOIN users ON (users.id_user = resa.id_user)\n" +
        "JOIN salle ON (salle.id_salle = resa.id_salle)\n" +
        "LEFT JOIN users as prof ON (prof.id_user = resa.id_prof)\n" +
        "LEFT JOIN validation ON (validation.id_validation = resa.id_validation)\n"+
        "WHERE resa.id_user = "+ req.params.idUser +
        " ORDER BY resa.date DESC";

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there is no class" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};
