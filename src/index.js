const express = require("express");
const  { uuid } = require("uuidv4");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function validateRepository(request, response, next){
    const { title, url, techs } = request.body;

    console.log(url);

    if(title == null || url == null || techs == null) {
        return response.status(400).json({"erro": "Invalid data params"});
    }
    
    return next();
}

app.get("/repositories", (request, response) => {
    const { title } = request.query;

    const result = title
    ? repositories.filter(repository => repository.title.includes(title))
    : repositories;

    return response.json(result);
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