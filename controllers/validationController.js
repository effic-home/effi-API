var sql = require("../db/connexion");

exports.getAllValidations = function(req, res) {
    var requete = "SELECT vali.id_validation, resa.id_reservation, vali.etat, validateur.nom as nom_validateur, validateur.prenom as prenom_validateur, eleve.nom as nom_demandeur, eleve.prenom as prenom_demandeur, date, heure, duree, intitule, nb_personnes, salle.numero_salle, prof.nom as nom_prof " +
        "FROM validation as vali " +
        "JOIN reservation as resa ON (vali.id_reservation = resa.id_reservation) " +
        "JOIN users as validateur ON (vali.id_user = validateur.id_user) " +
        "JOIN users as eleve ON (resa.id_user = eleve.id_user) " +
        "JOIN salle ON (salle.id_salle = resa.id_salle) " +
        "LEFT JOIN users as prof ON (prof.id_user = resa.id_prof) " +
        "ORDER BY vali.id_validation DESC" ;

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there are no validations" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};

exports.getInfoValidation = function(req, res) {
    var requete = "SELECT vali.id_validation, resa.id_reservation, vali.etat, validateur.nom as nom_validateur, validateur.prenom as prenom_validateur, eleve.nom as nom_demandeur, eleve.prenom as prenom_demandeur, date, heure, duree, intitule, nb_personnes, salle.numero_salle, prof.nom as nom_prof " +
        "FROM validation as vali " +
        "JOIN reservation as resa ON (vali.id_reservation = resa.id_reservation) " +
        "JOIN users as validateur ON (vali.id_user = validateur.id_user) " +
        "JOIN users as eleve ON (resa.id_user = eleve.id_user) " +
        "JOIN salle ON (salle.id_salle = resa.id_salle) " +
        "LEFT JOIN users as prof ON (prof.id_user = resa.id_prof) "+
        "WHERE vali.id_validation = " + req.params.idValidation;

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there is no validation" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};

exports.updateValidation = function(req, res) {
    var requete = "UPDATE validation SET ? WHERE id_validation = " + req.params.idValidation;

    sql.query(requete, req.body, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry we can't update this validation" });
            } else {
                res.status(200).send({ error: false, message: "Updated" });
            }
        }
    });
};


exports.deleteValidation = function(req, res) {
    var requete = "UPDATE reservation SET id_validation = NULL WHERE id_validation = " + req.params.idValidation + "; " +
        "DELETE FROM validation WHERE id_validation = " + req.params.idValidation;

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry we can't delete this validation" });
            } else {
                res.status(200).send({ error: false, message: "Deleted" });
            }
        }
    });
};
exports.getAllValidationsByUser = function(req, res) {
    var requete = "SELECT vali.id_validation, resa.id_reservation, vali.etat, validateur.nom as nom_validateur, validateur.prenom as prenom_validateur, eleve.nom as nom_demandeur, eleve.prenom as prenom_demandeur, date, heure, duree, intitule, nb_personnes, salle.numero_salle, prof.nom as nom_prof " +
        "FROM validation as vali " +
        "JOIN reservation as resa ON (vali.id_reservation = resa.id_reservation) " +
        "JOIN users as validateur ON (vali.id_user = validateur.id_user) " +
        "JOIN users as eleve ON (resa.id_user = eleve.id_user) " +
        "JOIN salle ON (salle.id_salle = resa.id_salle) " +
        "LEFT JOIN users as prof ON (prof.id_user = resa.id_prof) " +
        "WHERE vali.id_user = " + req.params.idUser +
        " ORDER BY vali.id_validation DESC";

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there is no validation for this user" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};


exports.getAllReservationsByStatus = function(req, res) {
    var requete = "SELECT vali.id_validation, resa.id_reservation, vali.etat, validateur.nom as nom_validateur, validateur.prenom as prenom_validateur, eleve.nom as nom_demandeur, eleve.prenom as prenom_demandeur, date, heure, duree, intitule, nb_personnes, salle.numero_salle, prof.nom as nom_prof " +
        "FROM validation as vali " +
        "JOIN reservation as resa ON (vali.id_reservation = resa.id_reservation) " +
        "JOIN users as validateur ON (vali.id_user = validateur.id_user) " +
        "JOIN users as eleve ON (resa.id_user = eleve.id_user) " +
        "JOIN salle ON (salle.id_salle = resa.id_salle) " +
        "LEFT JOIN users as prof ON (prof.id_user = resa.id_prof) " +
        "WHERE vali.etat = " + req.params.idStatus +
        " ORDER BY vali.id_validation DESC";

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there is no validation for this status" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};

