const express = require('express');
const { company, moods, questions } = require('./config');

const route = express.Router();

route.get('/', (req, res) => {
    res.render('index', { isQuestions: false, company });
});

route.get('/questions', (req, res) => {
    if (req.query.v) {
        res.render('index', { 
            isQuestions: true, 
            questions: questions.sort( () => Math.random() - 0.5 ), 
            mood: moods[req.query.v], 
            company 
        });
    } else {
        res.status(404).render("404");
    }
});

route.get('/moods/:v', (req, res) => {
    if (req.params.v) {
        res.send({mood: moods[req.params.v]});
    } else {
        res.status(404).render("404");
    }
});

module.exports = route;