module.exports = {
    init(app){
        const staticRoutes = require("../routes/static");
        const userRoutes = require("../routes/users");
        const resultsRoutes = require("../routes/results");

        app.use(userRoutes);
        app.use(staticRoutes);
        app.use(resultsRoutes);
    }
}