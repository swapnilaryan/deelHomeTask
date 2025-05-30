const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./model')
const { getProfile } = require('./middleware/getProfile')
const routes = require("./routes");
const app = express();
app.use(bodyParser.json());
app.set('sequelize', sequelize)
app.set('models', sequelize.models)

routes.forEach(({ path, router }) => {
    app.use(path, getProfile, router);
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

module.exports = app;
