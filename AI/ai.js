"use strict";

const question = document.querySelector(".question");
const optionContainer = document.querySelectorAll(".options li");
const submitBtn = document.querySelector(".submit");
const result = document.querySelector(".result");
const submitNow = document.querySelector(".submitNow");

let userCorrectAnswer = 0,
  userWrongAnswer = 0;
let apiData = [];
let currentQuestionIndex = 0;
let questionsData;
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let i = 0;

// fetch questions data from API
const fetchQuestions = async () => {
  try {
    const response = await fetch("http://localhost:1000/AIQuestions");
    /*     const response = await fetch(
      "https://question-answer-eight.vercel.app/database-questions"
    ); */
    if (!response.ok) {
      throw new Error("API request failed!");
    }
    const data = await response.json();
    apiData = data;
    displayQuestions(array[i]);
  } catch (error) {
    console.error(error);
  }
};

//Displaying Questions
const displayQuestions = (currentQuestionIndex) => {
  const currentQuestion = apiData[currentQuestionIndex];
  question.innerHTML = currentQuestion.question;

  // clear previous options
  optionContainer.forEach((option) => {
    option.innerHTML = "";
  });

  // display options for current question
  currentQuestion.options.forEach((optionText, index) => {
    const option = document.createElement("button");
    option.classList.add("option");
    option.innerHTML = optionText.trim();
    optionContainer[index].appendChild(option);
  });
};

//handle Option Click
const handleOptionClick = (event) => {
  // remove active class from all options

  document.querySelectorAll(".option").forEach((option) => {
    option.classList.remove("active");
  });

  // add active class to the clicked option
  const selectedOption = event.target;
  selectedOption.classList.add("active");
};

optionContainer.forEach((option) => {
  option.addEventListener("click", handleOptionClick);
});

//next questions:
const nextBtn = document.querySelector(".submit");
nextBtn.addEventListener("click", (event) => {
  event.preventDefault();

  //function for record-container
  recordContainer();

  nextBtn.classList.add("animate");
  setTimeout(() => {
    nextBtn.classList.remove("animate");
  }, 600);
  const userAnswer = document.querySelector(".option.active");
  if (!userAnswer) {
    alert("Please select an option!");
    return;
  }
  const userAnswerText = userAnswer.innerHTML.trim().toLowerCase();
  const correctAnswerText = apiData[currentQuestionIndex].answer
    .trim()
    .toLowerCase();
  console.log(userAnswerText);
  console.log(correctAnswerText);
  if (userAnswerText === correctAnswerText) {
    userCorrectAnswer++;
  } else {
    userWrongAnswer++;
  }
  currentQuestionIndex++;
  // move to the next question after 3 second
  setTimeout(() => {
    if (currentQuestionIndex >= apiData.length) {
      result.innerHTML = `Quiz Completed! You scored ${userCorrectAnswer} out of ${questionsData.length}`;
    } else {
      i++;
      displayQuestions(i);
      result.innerHTML = "";
    }
  }, 400);
});

//Back button
const backBtn = document.querySelector(".backBtn");
backBtn.addEventListener("click", () => {
  backBtn.classList.add("animate");
  setTimeout(() => {
    backBtn.classList.remove("animate");
  }, 600);
  i--;
  displayQuestions(i);
});

//Record container function
const recordContainer = function () {
  const recordData = document.querySelectorAll(".record-data");
  recordContainer;
  recordData[0].innerHTML = `${currentQuestionIndex + 1}`;
  recordData[1].innerHTML = `${14 - (currentQuestionIndex + 1)}`;
  recordData[2].innerHTML = `14`;
};

//Submit Now
submitNow.addEventListener("click", (e) => {
  e.preventDefault();

  submitNow.classList.add("animate");
  setTimeout(() => {
    submitNow.classList.remove("animate");
  }, 600);
  setTimeout(() => {
    const quizContainer = document.querySelector(".center");
    if (currentQuestionIndex > 0) {
      const html = `<h1>Congratulation!<br> You've completed the Quiz</h1>
  <h3>You've scored ${userCorrectAnswer} out of ${currentQuestionIndex}</h3>`;
      quizContainer.innerHTML = html;
    } else {
      alert(`You've not attend any question`);
      const html = `<h1>Congratulation!<br> You've completed the Quiz</h1>
    <h3>But You've not attended any questions.</h3><h4>See you soon 😊👋</h4>`;

      quizContainer.innerHTML = html;
    }
  }, 400);
});

// fetch questions on page load
fetchQuestions();
