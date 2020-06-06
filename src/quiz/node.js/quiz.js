let fs = require('fs');
let retrievedData = fs.readFileSync('./data.json');
let parsedData = JSON.parse(retrievedData);

const express = require('express');
const app = express();
const path = require('path');
//const questionMethods = require('./views/questionFunc.js');

const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

let qAnswered = 0;
let answers = [];
let points = 0;

let numOfQuestions = parsedData.length;

//Randomizes questions

parsedData.sort(function (a, b) {
    return 0.5 - Math.random()
});

answers = [parsedData[qAnswered].answers.correctAnswer, parsedData[qAnswered].answers.wrongAnswer1,
parsedData[qAnswered].answers.wrongAnswer2, parsedData[qAnswered].answers.wrongAnswer3];

answers.sort(function (a, b) {
    return 0.5 - Math.random()
});

app.get('/', function (req, res) {
    res.render('index', {
        questionsheet: parsedData[qAnswered].question,
        option1: answers[0],
        radio1: answers[0],
        option2: answers[1],
        radio2: answers[1],
        option3: answers[2],
        radio3: answers[2],
        option4: answers[3],
        radio4: answers[3]
    });
});

//questionMethods.checkQuestion();
//questionMethods.nextQuestion();

app.listen(port, function() {
    console.log(`Server started at port ${port}`);
});