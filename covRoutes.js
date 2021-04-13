//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API a Funcionar',
        message: 'Bem vindo à API Covid'
    });
});

//Import Cov Controller
var covController = require('./covController');

// Cov routes
router.route('/cov')
    .get(covController.index)
router.route('/covtotal')
    .get(covController.max)   


//Export API routes
module.exports = router;