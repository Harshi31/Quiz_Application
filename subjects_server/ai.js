const express = require("express");
const cors = require("cors");
const app = express();
const port = 1000;

const AIQuestions = [
  {
    question: "What is deep learning?",
    options: [
      "A) A subfield of machine learning that involves training artificial neural networks",
      "B) A subfield of physics that studies the behavior of matter and energy",
      "C) A subfield of biology that studies the structure and function of living organisms",
      "D) A subfield of psychology that studies the human mind and behavior",
    ],
    answer:
      "A) A subfield of machine learning that involves training artificial neural networks",
  },
  {
    question: "What is backpropagation in a neural network?",
    options: [
      "A) A technique for training a neural network by adjusting the weights based on the error between predicted and actual outputs",
      "B) A technique for simulating human thought processes using a neural network",
      "C) A type of neural network that uses unsupervised learning to find patterns in data",
      "D) A technique for optimizing a neural network's architecture to improve its performance",
    ],
    answer: "A",
  },
  {
    question: "What is a perceptron?",
    options: [
      "A type of neural network with a single layer of output neurons",
      "A type of neural network with multiple hidden layers",
      "A type of activation function used in neural networks",
      "A type of data preprocessing technique",
    ],
    answer: "A type of neural network with a single layer of output neurons",
  },
  {
    question: "What is the purpose of the bias term in a neural network?",
    options: [
      "To shift the activation function to the left or right",
      "To prevent overfitting",
      "To speed up the training process",
      "To add a constant value to the weighted sum of inputs",
    ],
    answer: "To add a constant value to the weighted sum of inputs",
  },
  {
    question: "What is a dropout layer in a neural network?",
    options: [
      "A type of layer that randomly drops out some of the neurons during training to prevent overfitting",
      "A type of layer that increases the learning rate during training",
      "A type of layer that reduces the dimensionality of the input data",
      "A type of layer that adds noise to the input data",
    ],
    answer:
      "A type of layer that randomly drops out some of the neurons during training to prevent overfitting",
  },
  {
    question: "What is a recurrent neural network (RNN)?",
    options: [
      "A type of neural network with feedback connections that allow it to process sequences of inputs",
      "A type of neural network that uses convolutional layers to extract features from images",
      "A type of neural network that combines multiple types of neural networks",
      "A type of neural network that uses unsupervised learning",
    ],
    answer:
      "A type of neural network with feedback connections that allow it to process sequences of inputs",
  },
  {
    question: "What is backpropagation in a neural network?",
    options: [
      "A) A technique for training a neural network by adjusting the weights based on the error between predicted and actual outputs",
      "B) A technique for simulating human thought processes using a neural network",
      "C) A type of neural network that uses unsupervised learning to find patterns in data",
      "D) A technique for optimizing a neural network's architecture to improve its performance",
    ],
    answer: "A",
  },
  {
    question: "What is the Turing test?",
    options: [
      "A test to see if a machine can exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human",
      "A test to determine the speed and efficiency of a computer processor",
      "A test to evaluate the quality of a machine learning algorithm",
      "A test to measure the accuracy of a neural network",
    ],
    answer:
      "A test to see if a machine can exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human",
  },
  {
    question: "What is the difference between narrow and general AI?",
    options: [
      "Narrow AI focuses on one specific task or domain, while general AI can perform any intellectual task that a human can",
      "General AI focuses on one specific task or domain, while narrow AI can perform any intellectual task that a human can",
      "Narrow AI is a more advanced form of AI than general AI",
      "General AI is a more advanced form of AI than narrow AI",
    ],
    answer:
      "Narrow AI focuses on one specific task or domain, while general AI can perform any intellectual task that a human can",
  },
  {
    question: "What is natural language processing (NLP)?",
    options: [
      "A branch of AI that focuses on teaching machines to understand and interpret human language",
      "A form of machine learning that uses neural networks to classify text data",
      "A type of deep learning that uses audio data as input",
      "A technique for visualizing and understanding high-dimensional data",
    ],
    answer:
      "A branch of AI that focuses on teaching machines to understand and interpret human language",
  },
  {
    question: "What is reinforcement learning?",
    options: [
      "A type of machine learning where an agent learns to behave in an environment by performing certain actions and receiving rewards or punishments",
      "A type of deep learning where a neural network is trained on unlabelled data",
      "A type of machine learning where a decision tree is used to classify data",
      "A technique for finding patterns and relationships in data",
    ],
    answer:
      "A type of machine learning where an agent learns to behave in an environment by performing certain actions and receiving rewards or punishments",
  },
  {
    question: "What is computer vision?",
    options: [
      "A field of AI that focuses on enabling machines to interpret and understand visual data from the world",
      "A type of machine learning that uses graphs to represent data",
      "A technique for analyzing text data to extract insights and patterns",
      "A type of deep learning that uses audio data as input",
    ],
    answer:
      "A field of AI that focuses on enabling machines to interpret and understand visual data from the world",
  },
  {
    question: "What is a neural network?",
    options: [
      "A computational model that is inspired by the structure and function of the human brain",
      "A type of machine learning algorithm that uses decision trees",
      "A method for extracting patterns and insights from large datasets",
      "A set of rules and procedures for solving complex problems",
    ],
    answer:
      "A computational model that is inspired by the structure and function of the human brain",
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
