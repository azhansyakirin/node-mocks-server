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
        try {
            const jsonPath = path.join(__dirname, `api/${route}/index.json`);
            const jsonData = require(jsonPath);
            res.json(jsonData);
        } catch (error) {
            res.status(500).json({ error: { message: 'Unable to parse the response [200]' } });
        }
    });
});

pageRoutes.forEach(route => {
    app.get(`/api/pages/${route}`, (req, res) => {
        try {
            const jsonPath = path.join(__dirname, `api/pages/${route}/index.json`);
            const jsonData = require(jsonPath);
            res.json(jsonData);
        } catch (error) {
            res.status(500).json({ error: { message: 'Unable to parse the response [200]' } });
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
