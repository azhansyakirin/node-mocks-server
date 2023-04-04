const express = require('express');
const app = express();
const path = require('path');

const dictionary = require('./api/dictionary');

const sendResponse = (path, res) => {
    return dictionary[path];
}

app.get('/api/getAuthenticate',(req,res)=>{
    const pathToSend = req.route.path;

    const response = sendResponse(pathToSend)

    res.status(200).send(response);
})

app.get('/api/getGenericController',(req,res)=>{
    const pathToSend = req.route.path;

    const response = sendResponse(pathToSend)

    res.status(200).send(response);
})

app.listen(3000, function()


{console.log(`Server is listening on port 3000`)})