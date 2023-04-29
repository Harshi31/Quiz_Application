const express = require("express");
const cors = require("cors");
const app = express();
const port = 1000;

const AIQuestions = [
  {
    question: "What is deep learning?",
    options: [
      "(A) A subfield of machine learning that involves training artificial neural networks",
      "(B) A subfield of physics that studies the behavior of matter and energy",
      "(C) A subfield of biology that studies the structure and function of living organisms",
      "(D) A subfield of psychology that studies the human mind and behavior",
    ],
    answer:
      "(A) A subfield of machine learning that involves training artificial neural networks",
  },
  {
    question: "What is backpropagation in a neural network?",
    options: [
      "(A) A technique for training a neural network by adjusting the weights based on the error between predicted and actual outputs",
      "(B) A technique for simulating human thought processes using a neural network",
      "(C) A type of neural network that uses unsupervised learning to find patterns in data",
      "(D) A technique for optimizing a neural network's architecture to improve its performance",
    ],
    answer:
      "(A) A technique for training a neural network by adjusting the weights based on the error between predicted and actual outputs",
  },
  {
    question: "What is a perceptron?",
    options: [
      "(A) A type of neural network with a single layer of output neurons",
      "(B) A type of neural network with multiple hidden layers",
      "(C) A type of activation function used in neural networks",
      "(D) A type of data preprocessing technique",
    ],
    answer:
      "(A) A type of neural network with a single layer of output neurons",
  },
  {
    question: "What is the purpose of the bias term in a neural network?",
    options: [
      "(A) To shift the activation function to the left or right",
      "(B) To prevent overfitting",
      "(C) To speed up the training process",
      "(D) To add a constant value to the weighted sum of inputs",
    ],
    answer: "(D) To add a constant value to the weighted sum of inputs",
  },
  {
    question: "What is a dropout layer in a neural network?",
    options: [
      "(A) A type of layer that randomly drops out some of the neurons during training to prevent overfitting",
      "(B) A type of layer that increases the learning rate during training",
      "(C) A type of layer that reduces the dimensionality of the input data",
      "(D) A type of layer that adds noise to the input data",
    ],
    answer:
      "(A) A type of layer that randomly drops out some of the neurons during training to prevent overfitting",
  },
  {
    question: "What is a recurrent neural network (RNN)?",
    options: [
      "(A) A type of neural network with feedback connections that allow it to process sequences of inputs",
      "(B) A type of neural network that uses convolutional layers to extract features from images",
      "(C) A type of neural network that combines multiple types of neural networks",
      "(D) A type of neural network that uses unsupervised learning",
    ],
    answer:
      "(A) A type of neural network with feedback connections that allow it to process sequences of inputs",
  },
  {
    question: "What is backpropagation in a neural network?",
    options: [
      "(A) A technique for training a neural network by adjusting the weights based on the error between predicted and actual outputs",
      "(B) A technique for simulating human thought processes using a neural network",
      "(C) A type of neural network that uses unsupervised learning to find patterns in data",
      "(D) A technique for optimizing a neural network's architecture to improve its performance",
    ],
    answer:
      "(A) A technique for training a neural network by adjusting the weights based on the error between predicted and actual outputs",
  },
  {
    question: "What is the Turing test?",
    options: [
      "(A) A test to see if a machine can exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human",
      "(B) A test to determine the speed and efficiency of a computer processor",
      "(C) A test to evaluate the quality of a machine learning algorithm",
      "(D) A test to measure the accuracy of a neural network",
    ],
    answer:
      "(A) A test to see if a machine can exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human",
  },
  {
    question: "What is the difference between narrow and general AI?",
    options: [
      "(A) Narrow AI focuses on one specific task or domain, while general AI can perform any intellectual task that a human can",
      "(B) General AI focuses on one specific task or domain, while narrow AI can perform any intellectual task that a human can",
      "(C) Narrow AI is a more advanced form of AI than general AI",
      "(D) General AI is a more advanced form of AI than narrow AI",
    ],
    answer:
      "(A) Narrow AI focuses on one specific task or domain, while general AI can perform any intellectual task that a human can",
  },
  {
    question: "What is natural language processing (NLP)?",
    options: [
      "(A) A branch of AI that focuses on teaching machines to understand and interpret human language",
      "(B) A form of machine learning that uses neural networks to classify text data",
      "(C) A type of deep learning that uses audio data as input",
      "(D) A technique for visualizing and understanding high-dimensional data",
    ],
    answer:
      "(A) A branch of AI that focuses on teaching machines to understand and interpret human language",
  },
  {
    question: "What is reinforcement learning?",
    options: [
      "(A) A type of machine learning where an agent learns to behave in an environment by performing certain actions and receiving rewards or punishments",
      "(B) A type of deep learning where a neural network is trained on unlabelled data",
      "(C) A type of machine learning where a decision tree is used to classify data",
      "(D) A technique for finding patterns and relationships in data",
    ],
    answer:
      "(A) A type of machine learning where an agent learns to behave in an environment by performing certain actions and receiving rewards or punishments",
  },
  {
    question: "What is computer vision?",
    options: [
      "(A) A field of AI that focuses on enabling machines to interpret and understand visual data from the world",
      "(B) A type of machine learning that uses graphs to represent data",
      "(C) A technique for analyzing text data to extract insights and patterns",
      "(D) A type of deep learning that uses audio data as input",
    ],
    answer:
      "(A) A field of AI that focuses on enabling machines to interpret and understand visual data from the world",
  },
  {
    question: "What is a neural network?",
    options: [
      "(A) A computational model that is inspired by the structure and function of the human brain",
      "(B) A type of machine learning algorithm that uses decision trees",
      "(C) A method for extracting patterns and insights from large datasets",
      "(D) A set of rules and procedures for solving complex problems",
    ],
    answer:
      "(B) A computational model that is inspired by the structure and function of the human brain",
  },
];

// Add the CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/AIQuestions", (req, res) => {
  res.send(AIQuestions);
});

app.listen(port, () => {
  console.log(`You server is listened on ${port} `);
});
