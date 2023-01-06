const router = require('express').Router();
let Customer = require('../model/customer.model');

router.route('/').get((req, res) => {
    res.send('Hello World');
});

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

module.exports = router;