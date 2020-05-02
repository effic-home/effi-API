var sql = require("../db/connexion");

exports.getAllTypes = function(req, res) {
    var requete = "SELECT * FROM type";

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.send(error);
        } else {
            if(results == "") {
                res.status(400).send({ error:true, message: "Sorry there are no types" });
            } else {
                res.send(results);
            }
        }
    });
};

exports.createType = function(req, res) {
    var requete = "INSERT INTO type SET ?";

    sql.query(requete, req.body, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(400).send({ error:true, message: "Sorry we can't create this type" });
            } else {
                res.status(200).send({ error: false, message: "Inserted" });
            }
        }
    });
};

exports.getInfoType = function(req, res) {
    var requete = "SELECT * FROM type WHERE id_type = " + req.params.idType;

    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.send(error);
        } else {
            if(results == "") {
                res.status(400).send({ error:true, message: "Sorry there is no type" });
            } else {
                res.send(results);
            }
        }
    });
};

exports.updateType = function(req, res) {
    var requete = "UPDATE type SET ? WHERE id_type = " + req.params.idType;

  sql.query(requete, req.body, function (error, results) {
      if(error) {
          console.log("error: ", error);
          res.send(error);
      } else {
          if(results.affectedRows == 0) {
              res.status(400).send({ error:true, message: "Sorry we can't update this type" });
          } else {
              res.status(200).send({ error: false, message: "Updated" });
          }
      }
  });
};

exports.deleteType = function(req, res) {
    var requete = "DELETE FROM type WHERE id_type = " + req.params.idType;
  
    sql.query(requete, function (error, results) {
        if(error) {
            console.log("error: ", error);
            res.send(error);
        } else {
            if(results.affectedRows == 0) {
                res.status(400).send({ error:true, message: "Sorry we can't delete this type" });
            } else {
                res.status(200).send({ error: false, message: "Deleted" });
            }
        }
    });
  };