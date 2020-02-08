let fs = require('fs');
let retrievedData = fs.readFileSync('./data.json');
let parsedData = JSON.parse(retrievedData);
console.log(parsedData);

const express = require('express');
const app = express();
const path = require('path');

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
    res.render('quiz', {
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

function checkQuestion() {
    for (i = 1; i < 5; i++) {
        if (document.getElementById("radio" + i).checked) {
            if (document.getElementById("radio" + i).value ===
                parsedData[qAnswered].answers.correctAnswer) {
                alert("You answered correctly!");
                points++;
                document.getElementById("option" + i).style.color = "green";
            }
            else {
                alert("You answered wrong!");
                document.getElementById("option" + i).style.color = "red";
            }
        }
    }
    qAnswered++;
    document.getElementById("check").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
}

app.listen(port, function() {
    console.log(`Server started at port ${port}`);
});


/*
function nextQuestion() {

    if (qAnswered === numOfQuestions) {
        document.getElementById("next").style.visibility = "visible";
        alert("You are done!");
    }
    else {

        answers = [parsedData[qAnswered].answers.correctAnswer, parsedData[qAnswered].answers.wrongAnswer1,
        parsedData[qAnswered].answers.wrongAnswer2, parsedData[qAnswered].answers.wrongAnswer3];

        answers.sort(function (a, b) {
            return 0.5 - Math.random()
        });

        document.getElementById("questionsheet").innerHTML = parsedData[qAnswered].question;
        document.getElementById("option1").innerHTML = answers[0];
        document.getElementById("radio1").value = answers[0];
        document.getElementById("option2").innerHTML = answers[1];
        document.getElementById("radio2").value = answers[1];
        document.getElementById("option3").innerHTML = answers[2];
        document.getElementById("radio3").value = answers[2];
        document.getElementById("option4").innerHTML = answers[3];
        document.getElementById("radio4").value = answers[3];

        document.getElementById("option1").style.color = "black";
        document.getElementById("option2").style.color = "black";
        document.getElementById("option3").style.color = "black";
        document.getElementById("option4").style.color = "black";

        document.getElementById("check").style.visibility = "visible";
        document.getElementById("next").style.visibility = "hidden";
    }
} */