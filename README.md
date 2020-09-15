# Desafio de Node.js :notebook:

<p align="center">
    <a href="#exec"> Executar código </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#about"> Sobre o desafio </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#route"> Rotas da aplicação</a>
</p>



## Executar código :play_or_pause_button:  <a name="exec" />

Utilize o comando:
- **`yarn`**
- **`yarn dev`**

E a aplicação estará rodando no url: <a href="http://localhost:3333" target="_blank">http://localhost:3333</ a>.



##  Sobre o desafio :information_source: <a name="about" />

Essa será uma aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".



## Rotas da aplicação 🛣️ <a  name="route" />

- **`POST /repositories`**: A rota recebe um `title`, `url` e `techs` dentro do corpo da requisição;
- **`GET /repositories`**: A rota lista todos os repositórios;
- **`PUT /repositories/:id`**: A rota alterar  apenas o `title`, a `url`, e as `techs` do repositório;
- **`DELETE /repositories/:id`**: A rota deleta o repositório com o `id` presente nos parâmetros;
- **`POST /repositories/:id/like`**: A rota aumenta o número de likes do repositório especificado.
