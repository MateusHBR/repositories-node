const express = require("express");
const  { uuid, isUuid } = require("uuidv4");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function validateRepository(request, response, next){
    const { title, url, techs } = request.body;

    console.log(url);

    if(title == null || url == null || techs == null) {
        return response.status(400).json({"error": "Invalid data params"});
    }
    
    return next();
}

function validadeUuid(request, response, next) {
    const { id } = request.params;

    if(!isUuid(id)) {
        return response.status(400).json({"error": "Invalid id"});
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

app.put("/repositories/:id", validadeUuid, (request, response) => {
    const { id }  = request.params;
    const { title, url, techs } = request.body;

    const repoIndex = repositories.findIndex(repository => repository.id == id);

    if(repoIndex < 0) {
        return response.status(400).json({ "error": "Id not found" });
    }

    var repository = {
        id,
        title: (title == null) ? repositories[repoIndex].title : title,
        url: (url == null) ? repositories[repoIndex].url: url,
        techs: (techs == null) ? repositories[repoIndex].techs : techs,
        likes: repositories[repoIndex].likes,
    }   
    
    repositories[repoIndex] = repository;

    return response.json(repository);
});

app.delete("/repositories/:id", validadeUuid, (request, response) => {
    const { id } = request.params;

    const repoIndex = repositories.findIndex(repository => repository.id == id);

    if(repoIndex < 0) {
        return response.status(400).json({ "error": "Id not found" });
    }

    repositories.splice(repoIndex, 1);

    return response.status(204).send();
});

app.post("/repositories/:id/like", validadeUuid, (request, response) => {
    const { id } = request.params;

    const repoIndex = repositories.findIndex(repository => repository.id == id);

    if(repoIndex < 0) {
        return response.status(400).json({ "error" : "Id not found"} )
    }

    repositories[repoIndex].likes += 1;

    return response.json(repositories[repoIndex]);
});

app.listen(3333, () => {
    console.log('Back-end Started');
});

module.exports = app;