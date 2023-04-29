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
  {
    question:
      "What is the output of the following Python code?\nprint('Hello, world!'[7:])",
    options: ["Hello, world!", "world!", "Hello", "None of the above"],
    answer: "world!",
  },
  {
    question:
      "What is the output of the following Python code?\ndef my_func(x, y=3):\n return x + y\nprint(my_func(2))",
    options: ["2", "3", "5", "None of the above"],
    answer: "5",
  },
  {
    question:
      "What is the output of the following Python code?\ndef my_func(x, y):\n return x / y\nprint(my_func(10, 0))",
    options: ["10", "0", "None", "None of the above"],
    answer: "None",
  },
  {
    question:
      "What is the output of the following Python code?\ndef my_func(x, y):\n return x / y\nprint(my_func(10, 2))",
    options: ["5", "2.5", "0.5", "None of the above"],
    answer: "5.0",
  },
  {
    question:
      "What is the output of the following Python code?\ndef my_func(x, y):\n return x * y\nprint(my_func('a', 3))",
    options: ["'aaa'", "3a", "TypeError", "None of the above"],
    answer: "aaa",
  },
  {
    question:
      "What is the output of the following Python code?\nmy_list = [1, 2, 3]\nmy_list.append(4)\nprint(my_list)",
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "4", "None of the above"],
    answer: "[1, 2, 3, 4]",
  },
  {
    question:
      "What is the output of the following Python code?\ndef my_func(x, y):\n return x ** y\nprint(my_func(2, 3))",
    options: ["5", "6", "8", "None of the above"],
    answer: "8",
  },
  {
    question:
      "What is the output of the following Python code?\nmy_set = {1, 2, 3, 4, 5}\nmy_set.discard(2)\nprint(my_set)",
    options: [
      "{1, 2, 3, 4, 5}",
      "{1, 3, 4, 5}",
      "{2, 3, 4, 5}",
      "None of the above",
    ],
    answer: "{1, 3, 4, 5}",
  },
  {
    question:
      "What is the output of the following Python code?\ndef my_func(x, y):\n return x + y\nprint(my_func('hello', 'world'))",
    options: ["helloworld", "hello world", "TypeError", "None of the above"],
    answer: "helloworld",
  },
  {
    question:
      "What is the output of the following Python code?\nmy_dict = {'a': 1, 'b': 2, 'c': 3}\nmy_dict.pop('b')\nprint(my_dict)",
    options: [
      "{'a': 1, 'b': 2, 'c': 3}",
      "{'a': 1, 'c': 3}",
      "{'b': 2}",
      "None of the above",
    ],
    answer: "{'a': 1, 'c': 3}",
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
