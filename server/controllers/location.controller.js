const db = require('../models');
const Location = db.locations;
const Op = db.Sequelize.Op;

// Create Method
exports.create = (req, res) => {
    // Validate Request
    if (!req.body.name) {
        res.status(400).send({ message: 'Content can not be empty!' });
        return;
    }

    const location = {
        name: req.body.name,
        long: req.body.long,
        lat: req.body.lat,
        setAsMain: req.body.setAsMain,
        published: req.body.published ? req.body.published : false
    };

    Location.create(location).then(data => res.send(data)).catch(err => res.status(500).send({ message: err.message || 'Some error occurred while creating Location' }));
}

exports.findAll = (req, res) => {
    const name = req.query.name;
    let condition = name ? { name: { [Op.like]: `%${name}%` }} : null;
    Location.findAll({ where: condition }).then( data => { res.send(data)} ).catch(err => { res.status(500).send({ message: err.message || 'Some error occurred while retrieving locations.'}); });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Location.update(req.body, { where: { id: id } }).then(num => {
        if (num == 1) {
            res.send({ message: 'Location was updated successfully.' })
        } else {
            res.send({ message: `Cannot update Locaiton with id=${id}`});
        }
    }).catch(err => { res.status(500).send({ message: `Error updating Location with id=${id}`}) })
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Location.destroy({ where: {id: id} }).then(num => {
        if (num == 1) { res.send({ message: `Location deleted successfully!`}) }
        else res.send({ message: `Could not delete Location` });
    }).catch(err => res.status(500).send({ message: `Could not delete Location` }) )
}