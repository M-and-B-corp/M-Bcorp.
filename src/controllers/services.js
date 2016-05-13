var ServiceModel = require('../models/service').model;

module.exports = function ServicesController(req, res) {
    ServiceModel.find({}, function(err, services) {
        if (err) {
            return next(err);
        }
        req.session.isOwner = req.query.owner;
        res.render('services', {services: services, user: req.user});
    });
};