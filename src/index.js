const express = require("express");
const  { uuid } = require("uuidv4");
const cors = require('cors');

const app = express();

app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
    return response.json(repositories);
});

app.put("/repositories/:id", (request, response) => {
    return response.json(repositories);
});

app.delete("/repositories/:id", (request, response) => {
    return response.status();
});

app.listen(3333, () => {
    console.log('Back-end Started');
});

module.exports = app;