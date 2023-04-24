const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

const pythonQuestions = [
  {
    question:
      "What is the output of the following Python code?\nprint(3 < 4 and 4 > 1)",
    options: ["True", "False", "None of the above"],
    answer: "True",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(len('hello'))",
    options: ["5", "6", "None of the above"],
    answer: "5",
  },
  {
    question:
      "What is the output of the following Python code?\nmy_list = [1, 2, 3]\nmy_list[0] = 4\nprint(my_list)",
    options: ["[1, 2, 3]", "[4, 2, 3]", "[4, 1, 2, 3]", "None of the above"],
    answer: "[4, 2, 3]",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(type(3.14))",
    options: ["int", "float", "str", "None of the above"],
    answer: "float",
  },
  {
    question:
      "What is the output of the following Python code?\nprint('hello'[1:])",
    options: ["h", "e", "llo", "ello", "None of the above"],
    answer: "ello",
  },
  {
    question:
      "What is the output of the following Python code?\nfor i in range(3):\n    print(i)",
    options: ["0 1 2", "1 2 3", "0 1 2 3", "None of the above"],
    answer: "0 1 2",
  },
  {
    question: "What is the output of the following Python code?\nprint(4 % 2)",
    options: ["1", "2", "0", "None of the above"],
    answer: "0",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(True and False)",
    options: ["True", "False", "None of the above"],
    answer: "False",
  },
  {
    question:
      "What is the output of the following Python code?\nmy_dict = {'a': 1, 'b': 2, 'c': 3}\nprint(my_dict.get('d'))",
    options: ["{'a': 1, 'b': 2, 'c': 3}", "None", "0", "None of the above"],
    answer: "None",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(list(range(0, 5, 2)))",
    options: ["[0, 1, 2, 3, 4]", "[0, 2, 4]", "[2, 4]", "None of the above"],
    answer: "[0, 2, 4]",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(3 < 4 and 4 > 1)",
    options: ["True", "False", "None of the above"],
    answer: "True",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(len('hello'))",
    options: ["5", "6", "None of the above"],
    answer: "5",
  },
  {
    question:
      "What is the output of the following Python code?\nmy_list = [1, 2, 3]\nmy_list[0] = 4\nprint(my_list)",
    options: ["[1, 2, 3]", "[4, 2, 3]", "[4, 1, 2, 3]", "None of the above"],
    answer: "[4, 2, 3]",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(type(3.14))",
    options: ["int", "float", "str", "None of the above"],
    answer: "float",
  },
  {
    question:
      "What is the output of the following Python code?\nprint('hello'[1:])",
    options: ["h", "e", "llo", "ello", "None of the above"],
    answer: "ello",
  },
  {
    question:
      "What is the output of the following Python code?\nfor i in range(3):\n    print(i)",
    options: ["0 1 2", "1 2 3", "0 1 2 3", "None of the above"],
    answer: "0 1 2",
  },
  {
    question: "What is the output of the following Python code?\nprint(4 % 2)",
    options: ["1", "2", "0", "None of the above"],
    answer: "0",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(True and False)",
    options: ["True", "False", "None of the above"],
    answer: "False",
  },
  {
    question:
      "What is the output of the following Python code?\nmy_dict = {'a': 1, 'b': 2, 'c': 3}\nprint(my_dict.get('d'))",
    options: ["{'a': 1, 'b': 2, 'c': 3}", "None", "0", "None of the above"],
    answer: "None",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(list(range(0, 5, 2)))",
    options: ["[0, 1, 2, 3, 4]", "[0, 2, 4]", "[2, 4]", "None of the above"],
    answer: "[0, 2, 4]",
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

app.get("/pythonQuestions", (req, res) => {
  res.send(pythonQuestions);
});

app.listen(port, () => {
  console.log(`Your port is being listened on port ${port}`);
});
