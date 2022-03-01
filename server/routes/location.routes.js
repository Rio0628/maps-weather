module.exports = app => {
    const locations = require('../controllers/location.controller');
    let router = require('express').Router();

    // Routes for controller 
    router.post('/', locations.create);
    router.get('/', locations.findAll);
    router.put('/:id', locations.update);
    router.delete('/:id', locations.delete);

    app.use('/api/locations', router);
}