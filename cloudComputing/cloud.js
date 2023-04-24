"use strict";

const question = document.querySelector(".question");
const optionContainer = document.querySelectorAll(".options li");
const submitBtn = document.querySelector(".submit");
const result = document.querySelector(".result");
const submitNow = document.querySelector(".submitNow");

let userCorrectAnswer = 0,
  userWrongAnswer = 0;
let questionsData = []; // to store fetched questions data
let currentQuestionIndex = 0;

// fetch questions data from API
const fetchQuestions = async () => {
  try {
    // const response = await fetch("http://localhost:2000/cloudQuestions");
    const response = await fetch(
      "https://cloud-server-ten.vercel.app/cloudQuestions"
    );
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

  document.querySelectorAll(".option").forEach((option) => {
    option.classList.remove("active");
  });

  // add active class to the clicked option
  const selectedOption = event.target;
  selectedOption.classList.add("active");
};

// handle form submission
const handleFormSubmit = (event) => {
  //Adding animation when clicking btn
  submitBtn.classList.add("animate");
  setTimeout(() => {
    submitBtn.classList.remove("animate");
  }, 600);

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
    userCorrectAnswer++;
  } else {
    userWrongAnswer++;
  }
  currentQuestionIndex++;
  // move to the next question after 3 second
  setTimeout(() => {
    if (currentQuestionIndex >= questionsData.length) {
      result.innerHTML = `Quiz Completed! You scored ${userCorrectAnswer} out of ${questionsData.length}`;
    } else {
      showQuestion(currentQuestionIndex);
      result.innerHTML = "";
    }
  }, 1000);
};

// add event listeners
optionContainer.forEach((option) => {
  option.addEventListener("click", handleOptionClick);
});
submitBtn.addEventListener("click", handleFormSubmit);

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

//Adding animation
