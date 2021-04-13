//Import CovModel
Covid = require('./covModels');

//Para index
exports.index = function (req, res) {
    Covid.get(function (err, cov) {
        if (err)
            res.json({
                status: "erro",
                message: err
            });
    
        res.json({
            status: "OK",
            message: "Obtidos Dados com Sucesso",
            data: cov
        });
    });
};

// Mostrar maximo
exports.max = function (req, res) {
    Covid.get(function (err, cov) {
        if (err)
            res.json({
                status: "error",
                message: err
            });

            var confirmados = []
            var internados = []
            for(var i in cov){
                confirmados.push(cov[i].novos_casos)
                internados.push(cov[i].internadosuci)
            }

        res.json({
            message: "Obtidos Dados com Sucesso!",
            maximo: Math.max.apply(null, confirmados),
            minimo: Math.min.apply(null, confirmados),
            media: Object.values(confirmados).reduce((a, b) => a + b)/7,
            total: Object.values(confirmados).reduce((a, b) => a + b),
            novos: confirmados,
            internados: internados 
        });
    });
};

//Criar novo Registo
exports.add = function (req, res) {
    var registo = new Covid();
    registo.data =  req.body.data;
    registo.novos_casos = req.body.novos_casos;
    registo.internadosuci = req.body.internadosuci;
    registo.registo = req.body.registo;

    //Guardar e verificar erros
    registo.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "Novo Registo Adicionado!",
            data: registo
        });
    });
};
