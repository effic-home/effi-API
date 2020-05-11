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
