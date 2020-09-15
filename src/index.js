const express = require("express");
const  { uuid } = require("uuidv4");
const cors = require('cors');

const app = express();

app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
    return response.json(repositories);
});

app.post("/repositories", validateRepository, (request, response) => {
    const { title, url, techs } = request.body;
    
    const repository = {
        id: uuid(),
        title,
        url,
        techs,
        likes: 0,
    };

    repositories.push(repository);
    
    return response.json(repository);
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