const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

const pythonQuestions = [
  {
    question:
      "What is the output of the following Python code?\nprint(3 < 4 and 4 > 1)",
    options: ["(A) True", "(B) False", "(C) None of the above"],
    answer: "(A) True",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(len('hello'))",
    options: ["(A) 5", "(B) 6", "(C) None of the above"],
    answer: "(A) 5",
  },
  {
    question:
      "What is the output of the following Python code?\nmy_list = [1, 2, 3]\nmy_list[0] = 4\nprint(my_list)",
    options: ["(A) [1, 2, 3]", "(B) [4, 2, 3]", "(C) [4, 1, 2, 3]", "(D) None of the above"],
    answer: "(B) [4, 2, 3]",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(type(3.14))",
    options: ["(A) int", "(B) float", "(C) str", "(D) None of the above"],
    answer: "(B) float",
  },
  {
    question:
      "What is the output of the following Python code?\nprint('hello'[1:])",
    options: ["(A) h", "(B) e", "(C) ello", "(D) None of the above"],
    answer: "(C) ello",
  },
  {
    question:
      "What is the output of the following Python code?\nfor i in range(3):\n    print(i)",
    options: ["(A) 0 1 2", "(B) 1 2 3", "(C) 0 1 2 3", "(D) None of the above"],
    answer: "(A) 0 1 2",
  },
  {
    question: "What is the output of the following Python code?\nprint(4 % 2)",
    options: ["(A) 1", "(B) 2", "(C) 0", "(D) None of the above"],
    answer: "0",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(True and False)",
    options: ["(A) True", "(B) False", "(C) None of the above"],
    answer: "(B) False",
  },
  {
    question:
      "What is the output of the following Python code?\nmy_dict = {'a': 1, 'b': 2, 'c': 3}\nprint(my_dict.get('d'))",
    options: ["(A) {'a': 1, 'b': 2, 'c': 3}", "(B) None", "(C) 0", "(D) error"],
    answer: "(B) None",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(list(range(0, 5, 2)))",
    options: ["(A) [0, 1, 2, 3, 4]", "(B) [0, 2, 4]", "(C) [2, 4]", "(D) None of the above"],
    answer: "(B) [0, 2, 4]",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(3 < 4 and 4 > 1)",
    options: ["(A) True", "(B) False", "(C) None of the above"],
    answer: "(A) True",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(len('hello'))",
    options: ["(A) 5", "(B) 6", "(C) None of the above"],
    answer: "(A) 5",
  },
  {
    question:
      "What is the output of the following Python code?\nmy_list = [1, 2, 3]\nmy_list[0] = 4\nprint(my_list)",
    options: ["(A) [1, 2, 3]", "(B) [4, 2, 3]", "(C) [4, 1, 2, 3]", "(D) None of the above"],
    answer: "(B) [4, 2, 3]",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(type(3.14))",
    options: ["(A) int", "(B) float", "(C) str", "(D) None of the above"],
    answer: "(B) float",
  },
  {
    question:
      "What is the output of the following Python code?\nprint('hello'[1:])",
    options: ["(A) h", "(B) e", "(C) llo", "(D) ello"],
    answer: "(D) ello",
  },
  {
    question:
      "What is the output of the following Python code?\nfor i in range(3):\n    print(i)",
    options: ["(A) 0 1 2", "(B) 1 2 3", "(C) 0 1 2 3", "(D) None of the above"],
    answer: "(A) 0 1 2",
  },
  {
    question: "What is the output of the following Python code?\nprint(4 % 2)",
    options: ["(A) 1", "(B) 2", "(C) 0", "(D) None of the above"],
    answer: "(D) 0",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(True and False)",
    options: ["(A) True", "(B) False", "(C) None of the above"],
    answer: "(B) False",
  },
  {
    question:
      "What is the output of the following Python code?\nmy_dict = {'a': 1, 'b': 2, 'c': 3}\nprint(my_dict.get('d'))",
    options: ["(A) {' a': 1, 'b': 2, 'c': 3}", "(B) None", "(C) 0", "(D) error"],
    answer: "(B) None",
  },
  {
    question:
      "What is the output of the following Python code?\nprint(list(range(0, 5, 2)))",
    options: ["(A) [0, 1, 2, 3, 4]", "(B) [0, 2, 4]", "(C) [2, 4]", "(D) None of the above"],
    answer: "(B) [0, 2, 4]",
  },
  {
    question:
      "What is the output of the following Python code?\nprint('Hello, world!'[7:])",
    options: ["(A) Hello, world!", "(B) world!", "(C)  Hello", "(D) None of the above"],
    answer: "(B) world!",
  },
  {
    question:
      "What is the output of the following Python code?\ndef my_func(x, y=3):\n return x + y\nprint(my_func(2))",
    options: ["(A) 2", "(B) 3", "(C) 5", "(D) None of the above"],
    answer: "(C) 5",
  },
  {
    question:
      "What is the output of the following Python code?\ndef my_func(x, y):\n return x / y\nprint(my_func(10, 0))",
    options: ["(A) 10", "(B) 0", "(C) None", "(D) error"],
    answer: "(C) None",
  },
  {
    question:
      "What is the output of the following Python code?\ndef my_func(x, y):\n return x / y\nprint(my_func(10, 2))",
    options: ["(A) 5", "(B) 2.5", "(C) 0.5", "(D) None of the above"],
    answer: "(A) 5.0",
  },
  {
    question:
      "What is the output of the following Python code?\ndef my_func(x, y):\n return x * y\nprint(my_func('a', 3))",
    options: ["'(A) aaa'", "(B) 3a", "(C) TypeError", "(D) None of the above"],
    answer: "(A) aaa",
  },
  {
    question:
      "What is the output of the following Python code?\nmy_list = [1, 2, 3]\nmy_list.append(4)\nprint(my_list)",
    options: ["(A) [1, 2, 3]", "(B) [1, 2, 3, 4]", "(C) 4", "(D) None of the above"],
    answer: "(B) [1, 2, 3, 4]",
  },
  {
    question:
      "What is the output of the following Python code?\ndef my_func(x, y):\n return x ** y\nprint(my_func(2, 3))",
    options: ["(A) 5", "(B) 6", "(C) 8", "(D) None of the above"],
    answer: "(C) 8",
  },
  {
    question:
      "What is the output of the following Python code?\nmy_set = {1, 2, 3, 4, 5}\nmy_set.discard(2)\nprint(my_set)",
    options: [
      "(A) {1, 2, 3, 4, 5}",
      "(B) {1, 3, 4, 5}",
      "(C) {2, 3, 4, 5}",
      "(D) None of the above",
    ],
    answer: "(B) {1, 3, 4, 5}",
  },
  {
    question:
      "What is the output of the following Python code?\ndef my_func(x, y):\n return x + y\nprint(my_func('hello', 'world'))",
    options: ["(A) helloworld", "(B) hello world", "(C) TypeError", "(D) None of the above"],
    answer: "(A) helloworld",
  },
  {
    question:
      "What is the output of the following Python code?\nmy_dict = {'a': 1, 'b': 2, 'c': 3}\nmy_dict.pop('b')\nprint(my_dict)",
    options: [
      "(A) {'a': 1, 'b': 2, 'c': 3}",
      "(B) {'a': 1, 'c': 3}",
      "(C) {'b': 2}",
      "(D) None of the above",
    ],
    answer: "(B) {'a': 1, 'c': 3}",
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
