const router = require('express').Router();
let Customer = require('../model/customer.model');


//customers add route
router.route('/add').post((req, res) => {
    const accNumber = req.body.accNumber;
    const name = req.body.name;
    console.log(accNumber);

    const newCustomer = new Customer({
        accNumber,
        name
    });

    newCustomer.save()
        .then(() => res.json('Customer added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

//customers get route
router.route('/acc/:id').get((req, res) => {
    Customer.find({ acc_number: req.params.id })
        .then(results => res.json(results))
        .catch(err => res.status(400).json('Error: ' + err));
});

//customers get route
router.route('/').get((req, res) => {
    Customer.find()
        .then(results => res.json(results))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;