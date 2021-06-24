const express = require('express')
const QuestionControllers = require('../controllers/QuestionControllers')

const route = express.Router()

route.get('/', (req, res)=> res.render("index", {page: 'enter-room'}))
route.get('/room', (req, res)=> res.render("index", {page: 'create-pass'}))

route.get('/room', (req, res)=> res.render("room"))

/* 
FORMATO QUE O FORMULÁRIO DE DENTRO DA MODAL TEM QUE PASSAR A INFORMAÇÃO*/
route.post('/room/:room/:question/:action', QuestionControllers.index)
 
module.exports = route