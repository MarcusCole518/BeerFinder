const Result = require("./models").Result;

module.exports = {
    getAllResults(callback){
        return Result.all()
        .then((results) => {
            callback(null, results);
        })
        .catch((err) => {
            callback(err);
        })
    }
}