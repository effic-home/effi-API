var sql = require("../db/connexion");

exports.connexion = function(req, res) {
    var requete = "SELECT id_user, users.nom, users.prenom, email, id_puce, type.nom as type, classe.nom as nom_classe, classe.effectif " +
        "FROM users " +
        "JOIN type ON (type.id_type = users.id_type) " +
        "LEFT JOIN classe ON (classe.id_classe = users.id_classe) " +
        "WHERE email = '" + req.params.email + "' AND password = '" + req.params.password + "'";

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results == "") {
                res.status(500).send({ error:true, message: "Sorry there are no users with these informations" });
            } else {
                res.status(200).send(results);
            }
        }
    });
};

exports.inscription = function(req, res) {
    var requete = "INSERT INTO users SET ?";

    sql.query(requete, req.body, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.status(400).send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(500).send({ error:true, message: "Sorry we can't create this user" });
            } else {
                res.status(201).send();
            }
        }
    });
};
