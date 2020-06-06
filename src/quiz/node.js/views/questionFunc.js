const checkQuestion = () => {
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

const nextQuestion = () => {

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
}

exports.checkQuestion = checkQuestion;
exports.nextQuestion = nextQuestion;