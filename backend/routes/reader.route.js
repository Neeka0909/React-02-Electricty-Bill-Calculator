const router = require('express').Router();
const Reader = require('../model/reader.model');
const reader = require('../model/reader.model');

//reader get data
router.route('/').get((req, res) => {
    reader.find()
        .then(results => res.json(results))
        .catch(err => res.status(400).json('Error: ' + err));
});

//reader add data
router.route('/add').post((req, res) => {
    const userID = req.body.userID;
    const Password = req.body.password;

    const newReader = new reader({
        userID,
        Password
    });

    newReader.save()
        .then(() => res.json('Reader added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//customers get route
router.route('/acc/:id').get((req, res) => {
    console.log(req.params.id);
    Reader.find({ userID: req.params.id })
        .then(results => res.json(results))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;