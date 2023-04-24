const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const databaseQuestions = [
  {
    question: "What is a database?",
    options: [
      " A type of spreadsheet",
      " A structured collection of data",
      " A type of programming language",
    ],
    answer: "A structured collection of data",
  },
  {
    question: "What is normalization in database design?",
    options: [
      " The process of reducing the number of tables in a database",
      " The process of organizing a database in a way that reduces redundancy and dependency",
      " The process of adding more data to a database",
    ],
    answer:
      "The process of organizing a database in a way that reduces redundancy and dependency",
  },
  {
    question: "What is denormalization in database design?",
    options: [
      " The process of adding more tables to a database",
      " The process of organizing a database in a way that increases redundancy and dependency",
      " The process of reducing the number of indexes in a database",
    ],
    answer:
      "The process of organizing a database in a way that increases redundancy and dependency",
  },
  {
    question: "What is a trigger in a database?",
    options: [
      " A set of SQL statements that are automatically executed in response to certain database events",
      " A way to encrypt data in a table",
      " A way to compress data in a table",
    ],
    answer:
      "A set of SQL statements that are automatically executed in response to certain database events",
  },
  {
    question: "What is a transaction in a database?",
    options: [
      " A group of SQL statements that are executed as a single unit of work",
      " A way to search for data in a table",
      " A way to commit changes to a database",
    ],
    answer:
      "A group of SQL statements that are executed as a single unit of work",
  },
  {
    question: "What is an ORM in database programming?",
    options: [
      " A programming paradigm that emphasizes the use of objects to represent data",
      " A way to connect to a database using ODBC",
      " A framework that maps database objects to programming language objects",
    ],
    answer:
      "A framework that maps database objects to programming language objects",
  },
  {
    question: "What is NoSQL?",
    options: [
      " A type of database that uses SQL for querying data",
      " A type of database that does not use a traditional tabular relational model",
      " A type of programming language",
    ],
    answer:
      "A type of database that does not use a traditional tabular relational model",
  },
  {
    question: "What is a document database?",
    options: [
      " A type of database that stores data as documents",
      " A type of database that stores data as tables",
      " A type of database that stores data as key-value pairs",
    ],
    answer: "A type of database that stores data as documents",
  },
  {
    question: "What is a graph database?",
    options: [
      " A type of database that stores data as graphs",
      " A type of database that stores data as tables",
      " A type of database that stores data as key-value pairs",
    ],
    answer: "A type of database that stores data as graphs",
  },
  {
    question: "What is a key-value database?",
    options: [
      " A type of database that stores data as key-value pairs",
      " A type of database that stores data as tables",
      " A type of database that stores data as graphs",
    ],
    answer: "A type of database that stores data as key-value pairs",
  },
  {
    question: "What is a column-family database?",
    options: [
      " A type of database that stores data in a tabular format",
      " A type of database that stores data in columns and column families",
      " A type of database that stores data as graphs",
    ],
    answer:
      "A type of database that stores data in columns and column families",
  },
  {
    question: "What is a distributed database?",
    options: [
      " A type of database that is distributed across multiple nodes or servers",
      " A type of database that is stored on a single server",
      " A type of database that is encrypted",
    ],
    answer:
      "A type of database that is distributed across multiple nodes or servers",
  },

  {
    question: "What is the purpose of the UNION operator in a SQL query?",
    options: [
      " To filter the result set based on a condition that involves an aggregate function",
      " To join two or more tables based on a related column between them",
      " To combine the result sets of two or more SELECT statements into a single result set",
    ],
    answer:
      "To combine the result sets of two or more SELECT statements into a single result set",
  },
  {
    question: "What is the purpose of the VIEW statement in a SQL database?",
    options: [
      " To create a backup of a table or database",
      " To modify the structure of a table",
      " To create a virtual table that can be used in place of a regular table",
    ],
    answer:
      "To create a virtual table that can be used in place of a regular table",
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

app.get("/database-questions", (req, res) => {
  res.send(databaseQuestions);
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
