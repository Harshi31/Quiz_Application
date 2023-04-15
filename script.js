"use strict";
let correct_answer;
fetch("https://opentdb.com/api.php?amount=10")
  .then((response) => response.json())
  .then((data) => {
    const questionContainer = document.getElementById("question-container");
    const correctAnswer = document.getElementById("correctAnswer");

    questionContainer.innerHTML = data.results[0].question;
    correctAnswer.innerHTML = data.results[0].correct_answer;
    console.log(data.results[0]);
  })
  .catch((error) => console.log(error));
