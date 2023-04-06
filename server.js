require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const { routes, pageRoutes } = require('./api/routes');

// console.log({Route : routes, PageRoute : pageRoutes})

app.use(cors());

routes.map(route => {
    app.get(`/api/${route}`, (req, res) => {
        res.sendFile(path.join(__dirname, `api/${route}/index.json`));
    });
});

pageRoutes.forEach(route => {
    app.get(`/api/pages/${route}`, (req, res) => {
        res.sendFile(path.join(__dirname, `api/pages/${route}/index.json`));
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));