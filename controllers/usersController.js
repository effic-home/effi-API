var sql = require("../db/connexion");

exports.getAllUsers = function(req, res) {
    var requete = "SELECT id_user, users.nom as nom, prenom, email, id_puce, type.nom as type, classe.nom as nom_classe, effectif FROM users "+
                  "JOIN type ON (users.id_type = type.id_type)"+
                  "LEFT JOIN classe ON (users.id_classe = classe.id_classe)";

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there are no users" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};

exports.getInfoUser = function(req, res) {
    var requete = "SELECT id_user, users.nom as nom, prenom, email, id_puce, id_type, classe.nom as nom_classe, effectif "+
                  "FROM users "+
                  "LEFT JOIN classe ON (classe.id_classe = users.id_classe) "+
                  "WHERE id_user = " + req.params.idUser;

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there is no user" });
            } else {
                res.send(results);
            }
        }
    });
};

exports.updateUser = function(req, res) {
  var requete = "UPDATE users SET ? WHERE id_user = " + req.params.idUser;

  sql.query(requete, req.body, function (error, results) {
      if(error) {
          console.log("error: ", error);
          res.status(400).send(error);
      } else {
          if(results.affectedRows == 0) {
              res.status(500).send({ error:true, message: "Sorry we can't update this user" });
          } else {
              res.status(200).send({ error: false, message: "Updated" });
          }
      }
  });
};

exports.deleteUser = function(req, res) {
  var requete = "DELETE FROM users WHERE id_user = " + req.params.idUser;

  sql.query(requete, function (error, results) {
      if(error) {
          console.log("error: ", error);
          res.status(400).send(error);
      } else {
          if(results.affectedRows == 0) {
              res.status(500).send({ error:true, message: "Sorry we can't delete this user" });
          } else {
              res.status(200).send({ error: false, message: "Deleted" });
          }
      }
  });
};

exports.getUsersByType = function(req, res) {
    var requete = "SELECT type.nom as type, users.nom, users.prenom, users.email, users.id_puce, classe.nom as classe, classe.effectif FROM type " +
    "JOIN users ON (users.id_type = type.id_type) " +
    "LEFT JOIN classe ON (classe.id_classe = users.id_classe) " +
    "WHERE type.id_type = " + req.params.idType;

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there is no users in this type" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};

// Paramètres : id_salle, id_puce du user
// Accès à la salle si la réservation a été validée, si l'étudiant qui bipe est celui qui a réservé, ou si c'est le prof qui est prévu dans le cours qui bipe à la bonne salle à l'heure et date actuelles
// Ou si c'est un admin
exports.accesSalle = function(req, res) {
    var requete = "SELECT users.id_puce " +
        "FROM reservation " +
        "JOIN validation ON (reservation.id_validation = validation.id_validation) " +
        "JOIN users ON (users.id_user = reservation.id_user) " +
        "LEFT JOIN users as prof ON (prof.id_user = reservation.id_prof) " +
        "WHERE validation.etat = 1 " +
            "AND (users.id_puce = '" + req.params.idPuce + "'" +
                " OR prof.id_puce = '" + req.params.idPuce + "'" +
            ") AND reservation.id_salle = " + req.params.idSalle +
            " AND reservation.date = DATE(NOW()) " +
            "AND reservation.heure_debut <= TIME(NOW()) " +
            "AND reservation.heure_fin >= TIME(NOW())" +
        "UNION " +
        "SELECT id_puce FROM users " +
        "JOIN type ON (users.id_type = type.id_type) " +
        "WHERE type.nom = 'Admin' AND id_puce = '" + req.params.idPuce + "'";

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({result: false});
            } else {
                res.status(200).send({result: true});
            }
        }
    });
};
