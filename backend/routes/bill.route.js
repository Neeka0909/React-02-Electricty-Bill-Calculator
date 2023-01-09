const router = require('express').Router();
let Bill = require('../model/bill.model');

//bill add route
router.route('/add').post((req, res) => {
    console.log("request body: ", req.body)

    const acc_number = req.body.acc_number;
    const date = req.body.date;
    const reading = req.body.reading;

    const newBill = new Bill({
        acc_number,
        date,
        reading
    });

    newBill.save()
        .then(() => res.json('Bill added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

//bill get route
router.route('/data/:id').get((req, res) => {
    Bill.find({ acc_number: req.params.id })
        .then(results => res.json(results))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
    Bill.find()
        .then(results => res.json(results))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


