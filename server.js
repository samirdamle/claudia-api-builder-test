var ApiBuilder = require('claudia-api-builder');
var api = new ApiBuilder();
var superb = require('superb');

module.exports = api;

api.get('/hello', function(request){
    return {"msg": request.queryString.name + " is " + superb()};
});
