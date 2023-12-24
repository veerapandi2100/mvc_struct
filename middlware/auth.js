function auth(req, res, next){
    console.log('middlware called');
    next();
}

module.exports = {auth};