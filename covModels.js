var mongoose = require('mongoose');

//schema
var covSchema = mongoose.Schema({
    
    data: {
        type: String,
        required: true
    },
    
    novos_casos: {
        type: Number,
        required: true
    },
   
    internadosuci: {
        type: Number,
        required: true
    },
    registo: {
        type: Number,
        required: true
    }

});

// Export Cov Model
var Covid = module.exports = mongoose.model('cov', covSchema, 'cov');

module.exports.get = function (callback, limit) {
   Covid.find(callback).limit(limit); 
}