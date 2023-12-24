function valid(req, res, next){

    console.log('Sub Middlware Calling');
    next();
}

function userValid(req, res, next){

    console.log('User Middlware Calling');
    next();
}

module.exports = {valid, userValid};