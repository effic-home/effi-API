var sql = require("../db/connexion");

exports.getAllSalles = function(req, res) {
    var requete = "SELECT * FROM salle";

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there are no rooms" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};

exports.createSalle = function(req, res) {
    var requete = "INSERT INTO salle SET ?";

    sql.query(requete, req.body, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry we can't create this room" });
            } else {
                res.status(200).send({ error: false, message: "Inserted" });
            }
        }
    });
};

exports.getSallesDisposNow = function(req, res) {
    var requete = "SELECT id_salle, numero_salle, etage, type, occupee, capacite " +
    "FROM salle WHERE id_salle NOT IN ( " +
    "SELECT id_salle " +
    "FROM reservation " +
    "WHERE reservation.date = DATE(NOW()) " +
    "AND reservation.heure_debut <= TIME(NOW()) " +
    "AND reservation.heure_fin >= TIME(NOW()))";

    sql.query(requete, req.body, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry there are no available rooms now" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};

exports.getSallesReserveesByDate = function(req, res) {
    var requete = "SELECT salle.id_salle, numero_salle, etage, type, occupee, capacite " +
        "FROM reservation " +
        "JOIN salle ON (reservation.id_salle = salle.id_salle) " +
        "WHERE reservation.date = '" + req.params.date + "'";

    sql.query(requete, req.body, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry there are no available rooms now" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};

exports.getInfoSalle = function(req, res) {
    var requete = "SELECT * FROM salle WHERE id_salle = " + req.params.idSalle;

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there is no room" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};
exports.updateSalle = function(req, res) {
    var requete = "UPDATE salle SET ? WHERE id_salle = " + req.params.idSalle;

    sql.query(requete, req.body, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry we can't update this room" });
            } else {
                res.status(200).send({ error: false, message: "Updated" });
            }
        }
    });
};

exports.deleteSalle = function(req, res) {
    var requete = "DELETE FROM salle WHERE id_salle = " + req.params.idSalle;

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry we can't delete this room" });
            } else {
                res.status(200).send({ error: false, message: "Deleted" });
            }
        }
    });
};

exports.getAllPortesBySalle = function(req, res) {
    var requete = "SELECT porte.id_porte, numero_porte, salle.numero_salle, salle.etage, salle.type, salle.occupee, salle.capacite FROM porte " +
    "JOIN salle ON (salle.id_salle = porte.id_salle) " +
    "WHERE salle.id_salle = " + req.params.idSalle;

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there are no rooms" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};





exports.getAllPortes = function(req, res) {
    var requete = "SELECT porte.id_porte, numero_porte, salle.numero_salle, salle.etage, salle.type, salle.occupee, salle.capacite FROM porte " +
    "JOIN salle ON (salle.id_salle = porte.id_salle)";

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there are no doors" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};

exports.createPorte = function(req, res) {
    var requete = "INSERT INTO porte SET ?";

    sql.query(requete, req.body, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry we can't create this door" });
            } else {
                res.status(200).send({ error: false, message: "Inserted" });
            }
        }
    });
};

exports.getInfoPorte = function(req, res) {
    var requete = "SELECT porte.id_porte, numero_porte, numero_salle, etage, type, occupee, capacite FROM porte " +
    "JOIN salle ON (salle.id_salle = porte.id_salle) " +
    "WHERE id_porte = " + req.params.idPorte;

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there is no room" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};
exports.updatePorte = function(req, res) {
    var requete = "UPDATE porte SET ? WHERE id_porte = " + req.params.idPorte;

    sql.query(requete, req.body, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry we can't update this room" });
            } else {
                res.status(200).send({ error: false, message: "Updated" });
            }
        }
    });
};

exports.deletePorte = function(req, res) {
    var requete = "DELETE FROM porte WHERE id_porte = " + req.params.idPorte;

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry we can't delete this room" });
            } else {
                res.status(200).send({ error: false, message: "Deleted" });
            }
        }
    });
};
