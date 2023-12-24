
var service = require('../service/appService');

function appGet(req, res){
    try{
        res.status(200).send({message: "Heloo"});
    } catch (e){
        res.status(500).send({error: e});
    }
}

async function appAbout(req, res){
    try{
        const result = await service.appGetServiceDataBase();
        res.status(200).send({message: result});
    } catch (e){
        res.status(500).send({error: e});
    }
}

function appAll(req, res){
    
}

module.exports = {appGet, appAbout, appAll};