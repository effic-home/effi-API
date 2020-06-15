var sql = require("../db/connexion");

exports.getAllClasses = function(req, res) {
    var requete = "SELECT * FROM classe";

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there are no classes" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};


exports.createClasse = function(req, res) {
    var requete = "INSERT INTO classe SET ?";

    sql.query(requete, req.body, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry we can't create this classe" });
            } else {
                res.status(200).send({ error: false, message: "Inserted" });
            }
        }
    });
};


exports.getInfoClasse = function(req, res) {
    var requete = "SELECT * FROM classe WHERE id_classe = " + req.params.idClasse;

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

exports.updateClasse = function(req, res) {
    var requete = "UPDATE classe SET ? WHERE id_classe = " + req.params.idClasse;
  
    sql.query(requete, req.body, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry we can't update this class" });
            } else {
                res.status(200).send({ error: false, message: "Updated" });
            }
        }
    });
  };

  
exports.deleteClasse = function(req, res) {
    var requete = "DELETE FROM classe WHERE id_classe = " + req.params.idClasse;
  
    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry we can't delete this class" });
            } else {
                res.status(200).send({ error: false, message: "Deleted" });
            }
        }
    });
  };
