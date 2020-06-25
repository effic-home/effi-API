module.exports = function(app) {
  var types = require('../controllers/typesController');

  app.route('/types')
    .get(types.getAllTypes)
    .post(types.createType);

  app.route('/types/:idType')
    .get(types.getInfoType)
    .put(types.updateType)
    .delete(types.deleteType);

};