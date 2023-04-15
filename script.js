"use strict";

const question = document.querySelector(".question");
const optionContainer = document.querySelectorAll(".options li");
const submitBtn = document.querySelector(".submit");
const result = document.querySelector(".result");

let questionsData = []; // to store fetched questions data
let currentQuestionIndex = 0;

// fetch questions data from API
const fetchQuestions = async () => {
  try {
    const response = await fetch("http://localhost:3000/database-questions");
    if (!response.ok) {
      throw new Error("API request failed!");
    }
    const data = await response.json();
    questionsData = data;
    showQuestion(currentQuestionIndex);
  } catch (error) {
    console.error(error);
  }
};

// display current question on the webpage
const showQuestion = (questionIndex) => {
  const currentQuestion = questionsData[questionIndex];
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

// handle option button click
const handleOptionClick = (event) => {
  // remove active class from all options
  optionContainer.forEach((option) => {
    option.querySelectorAll(".option").forEach((button) => {
      button.classList.remove("active");
    });
  });

  // add active class to the clicked option
  const selectedOption = event.target;
  selectedOption.classList.add("active");
};

// handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault();
  const userAnswer = document.querySelector(".option.active");
  if (!userAnswer) {
    alert("Please select an option!");
    return;
  }
  const userAnswerText = userAnswer.innerHTML.trim().toLowerCase();
  const correctAnswerText = questionsData[currentQuestionIndex].answer
    .trim()
    .toLowerCase();
  console.log(userAnswerText);
  console.log(correctAnswerText);
  if (userAnswerText === correctAnswerText) {
    result.innerHTML = "Correct!";
  } else {
    result.innerHTML = `Incorrect! The correct answer is ${questionsData[currentQuestionIndex].answer}`;
  }
  // move to the next question after 3 second
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questionsData.length) {
      result.innerHTML = `Quiz Completed! You scored ${currentQuestionIndex} out of ${questionsData.length}`;
    } else {
      showQuestion(currentQuestionIndex);
      result.innerHTML = "";
    }
  }, 3000);
};

// add event listeners
optionContainer.forEach((option) => {
  option.addEventListener("click", handleOptionClick);
});
submitBtn.addEventListener("click", handleFormSubmit);

// fetch questions on page load
fetchQuestions();
