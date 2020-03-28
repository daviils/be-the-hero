const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//  Rota / Recursos

//  get = metodo http:

//  GET: Busca uma informação do back-end 
//  POST: Cria uma informação no back-end
//  PUT: Altera uma informação no back-end
//  DELETE: Deleta uma informação no back-end

// Tipos de parâmetros:

// Query Params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
// Route Params: parâmetros utilizados para indentificar recursos
// Request Body: Corpo da requisição usado para criar ou alterar recursos

//



app.listen(3333);