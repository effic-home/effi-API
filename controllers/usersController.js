var sql = require("../db/connexion");

exports.getAllUsers = function(req, res) {
    var requete = "SELECT id_user, users.nom as nom, prenom, email, id_puce, id_type, classe.nom as nom_classe, effectif FROM users "+
                  "LEFT JOIN classe ON (users.id_classe = classe.id_classe)";

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.send(error);
        } else {
            if(results == "") {
                res.status(400).send({ error:true, message: "Sorry there are no users" });
            } else {
                res.send(results);
            }
        }
    });
};

exports.getInfoUser = function(req, res) {
    var requete = "SELECT id_user, users.nom as nom, prenom, email, password, id_puce, id_type, classe.nom as nom_classe, effectif "+
                  "FROM users "+
                  "JOIN classe ON (classe.id_classe = users.id_classe) "+
                  "WHERE id_user = " + req.params.idUser;

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.send(error);
        } else {
            if(results == "") {
                res.status(400).send({ error:true, message: "Sorry there is no user" });
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
          res.send(error);
      } else {
          if(results.affectedRows == 0) {
              res.status(400).send({ error:true, message: "Sorry we can't update this user" });
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
          res.send(error);
      } else {
          if(results.affectedRows == 0) {
              res.status(400).send({ error:true, message: "Sorry we can't delete this user" });
          } else {
              res.status(200).send({ error: false, message: "Deleted" });
          }
      }
  });
};