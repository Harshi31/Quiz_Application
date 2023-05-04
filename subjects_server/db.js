const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const databaseQuestions = [
  {
    question: "What is the purpose of a primary key in a database?",
    options: [
      "(A) To uniquely identify each row in a table",
      "(B) To sort data in a table in ascending or descending order",
      "(C) To create a new table based on existing tables",
      "(D) To update a single column in a table",
    ],
    answer: "(A) To uniquely identify each row in a table",
  },
  {
    question:
      "What is the difference between a clustered index and a non-clustered index?",
    options: [
      "(A) A clustered index determines the physical order of data in a table, while a non-clustered index does not",
      "(B) A non-clustered index determines the physical order of data in a table, while a clustered index does not",
      "(C) A clustered index and a non-clustered index are the same thing",
      "(D) A clustered index can only be used for SELECT operations, while a non-clustered index can be used for any database operation",
    ],
    answer:
      "(A) A clustered index determines the physical order of data in a table, while a non-clustered index does not",
  },
  {
    question: "What is a foreign key in a database?",
    options: [
      "(A) A column or set of columns that refers to a primary key in another table",
      "(B) A column that uniquely identifies each row in a table",
      "(C) A set of rules that govern the format of data in a table",
      "(D) A query that retrieves data from multiple tables in a database",
    ],
    answer:
      "(A) A column or set of columns that refers to a primary key in another table",
  },
  {
    question: "What is a stored procedure in a database?",
    options: [
      "(A) A precompiled and stored set of SQL statements that perform a specific task",
      "(B) A data structure that improves the speed of data retrieval operations on a database table",
      "(C) A query that retrieves data from multiple tables in a database",
      "(D) A column that uniquely identifies each row in a table",
    ],
    answer:
      "(A) A precompiled and stored set of SQL statements that perform a specific task",
  },
  {
    question:
      "What is the difference between a LEFT JOIN and an INNER JOIN in a database?",
    options: [
      "(A) A LEFT JOIN returns all records from the left table and the matched records from the right table, while an INNER JOIN only returns the matched records from both tables",
      "(B) An INNER JOIN returns all records from the left table and the matched records from the right table, while a LEFT JOIN only returns the matched records from both tables",
      "(C) A LEFT JOIN and an INNER JOIN are the same thing",
      "(D) A LEFT JOIN can only be used for SELECT operations, while an INNER JOIN can be used for any database operation",
    ],
    answer:
      "(A) A LEFT JOIN returns all records from the left table and the matched records from the right table, while an INNER JOIN only returns the matched records from both tables",
  },
  {
    question:
      "What is the purpose of the GROUP BY clause in a SELECT statement?",
    options: [
      "(A) To group rows that have the same values in a specified column or columns",
      "(B) To sort data in a table in ascending or descending order",
      "(C) To create a new table based on existing tables",
      "(D) To update a single column in a table",
    ],
    
    answer: "(A) To group rows that have the same values in a specified column or columns",
  },
  {
    question: "What is the purpose of a primary key in a database?",
    options: [
      "(A) To uniquely identify each row in a table",
      "(B) To sort data in a table in ascending or descending order",
      "(C) To create a new table based on existing tables",
      "To update a single column in a table",
    ],
    answer: "(A) To uniquely identify each row in a table",
  },
  {
    question:
      "What is the difference between a clustered index and a non-clustered index?",
    options: [
      "(A) A clustered index determines the physical order of data in a table, while a non-clustered index does not",
      "(B) A non-clustered index determines the physical order of data in a table, while a clustered index does not",
      "(C) A clustered index and a non-clustered index are the same thing",
      "(D) A clustered index can only be used for SELECT operations, while a non-clustered index can be used for any database operation",
    ],
    answer:
      "(A) A clustered index determines the physical order of data in a table, while a non-clustered index does not",
  },
  {
    question: "What is a foreign key in a database?",
    options: [
      "(A) A column or set of columns that refers to a primary key in another table",
      "(B) A column that uniquely identifies each row in a table",
      "(C) A set of rules that govern the format of data in a table",
      "(D) A query that retrieves data from multiple tables in a database",
    ],
    answer:
      "(A) A column or set of columns that refers to a primary key in another table",
  },
  {
    question: "What is a stored procedure in a database?",
    options: [
      "(A) A precompiled and stored set of SQL statements that perform a specific task",
      "(B) A data structure that improves the speed of data retrieval operations on a database table",
      "(C) A query that retrieves data from multiple tables in a database",
      "(D) A column that uniquely identifies each row in a table",
    ],
    answer:
      "(A) A precompiled and stored set of SQL statements that perform a specific task",
  },
  {
    question:
      "What is the difference between a LEFT JOIN and an INNER JOIN in a database?",
    options: [
      "(A) A LEFT JOIN returns all records from the left table and the matched records from the right table, while an INNER JOIN only returns the matched records from both tables",
      "(B) An INNER JOIN returns all records from the left table and the matched records from the right table, while a LEFT JOIN only returns the matched records from both tables",
      "(C) A LEFT JOIN and an INNER JOIN are the same thing",
      "(D) A LEFT JOIN can only be used for SELECT operations, while an INNER JOIN can be used for any database operation",
    ],
    answer:
      "(A) A LEFT JOIN returns all records from the left table and the matched records from the right table, while an INNER JOIN only returns the matched records from both tables",
  },
  {
    question: "What is the purpose of a primary key in a database?",
    options: [
      "(A) To link two tables together based on a common field",
      "(B) To store large binary data, such as images or documents",
      "(C) To uniquely identify each record in a table",
      "(D) To enforce data type restrictions on a table",
    ],
    answer: "To uniquely identify each record in a table",
  },
  {
    question: "Which of the following is an example of a NoSQL database?",
    options: ["(A) MySQL", "(B) PostgreSQL", "(C) MongoDB", "(D) Oracle"],
    answer: "(C) MongoDB",
  },
  {
    question: "What is the purpose of the ORDER BY clause in SQL?",
    options: [
      "(A) To filter the query result based on a condition",
      "(B) To group the query result based on one or more columns",
      "(C) To sort the query result in ascending or descending order",
      "(D) To join multiple tables in the query",
    ],
    answer: "(C) To sort the query result in ascending or descending order",
  },
  {
    question:
      "Which of the following is a benefit of using a relational database?",
    options: [
      "(A) It provides better support for handling large amounts of unstructured data",
      "(B) It is more scalable and better suited for distributed computing",
      "(C) It ensures data consistency by enforcing strict data schemas",
      "(D) It is easier to set up and maintain than other types of databases",
    ],
    answer: "It ensures data consistency by enforcing strict data schemas",
  },
  {
    question:
      "Which of the following is not a type of database management system?",
    options: [
      "(A) Relational database management system",
      "(B) Document-oriented database management system",
      "(C) Object-oriented programming language",
      "(D) Graph database management system",
    ],
    answer: "(C) Object-oriented programming language",
  },
  {
    question: "What is the purpose of the WHERE clause in SQL?",
    options: [
      "(A) To sort the query result in ascending or descending order",
      "(B) To filter the query result based on a condition",
      "(C) To group the query result based on one or more columns",
      "(D) To join multiple tables in the query",
    ],
    answer: "(B) To filter the query result based on a condition",
  },
  {
    question: "Which of the following is a characteristic of a NoSQL database?",
    options: [
      "(A) It enforces strict data schemas",
      "(B) It is typically used for small-scale applications",
      "(C) It provides better support for complex queries and transactions",
      "(D) It is more suitable for handling unstructured and semi-structured data",
    ],
    answer:
      "(D) It is more suitable for handling unstructured and semi-structured data",
  },
  {
    question: "What is the purpose of the JOIN clause in SQL?",
    options: [
      "(A) To group the query result based on one or more columns",
      "(B) To filter the query result based on a condition",
      "(C) To combine data from two or more tables",
      "(D) To sort the query result in ascending or descending order",
    ],
    answer: "(C) To combine data from two or more tables",
  },
  {
    question:
      "Which of the following is a characteristic of a column in a database table?",
    options: [
      "(A) It stores a single value for each row in the table",
      "(B) It stores a group of related data fields",
      "(C) It defines the structure of the table, including its columns and data types",
      "(D) It is used to filter data in a query",
    ],
    answer: "(A) It stores a single value for each row in the table",
  },
  {
    question:
      "Which of the following SQL commands is used to insert new data into a database table?",
    options: ["(A) DELETE", "(B) UPDATE", "(C) INSERT", "(D) CREATE"],
    answer: "(C) INSERT",
  },
  {
    question: "What is the purpose of a foreign key in a database?",
    options: [
      "(A) To uniquely identify each record in a table",
      "(B) To link two tables together based on a common field",
      "(C) To enforce data type restrictions on a table",
      "(D) To store large binary data, such as images or documents",
    ],
    answer: "(B) To link two tables together based on a common field",
  },
  {
    question: "Which of the following is a type of database index?",
    options: [
      "(A) Primary index",
      "(B) Secondary index",
      "(C) Both primary and secondary index",
      "(D) Neither primary nor secondary index",
    ],
    answer: "(C) Both primary and secondary index",
  },
  {
    question: "What is the purpose of the SELECT clause in SQL?",
    options: [
      "(A) To filter the query result based on a condition",
      "(B) To sort the query result in ascending or descending order",
      "(C) To group the query result based on one or more columns",
      "(D) To specify the columns to retrieve from the table",
    ],
    answer: "(D) To specify the columns to retrieve from the table",
  },
  {
    question: "What is a database?",
    options: [
      "(A) A collection of files",
      "(B) A collection of tables",
      "(C) A collection of spreadsheets",
      "(D) A collection of documents",
    ],
    answer: "(B) A collection of tables",
  },
  {
    question:
      "Which of the following is a characteristic of a column in a database table?",
    options: [
      "(A) It stores a single value for each row in the table",
      "(B) It stores a group of related data fields",
      "(C) It defines the structure of the table, including its columns and data types",
      "(D) It is used to filter data in a query",
    ],
    answer: "(A) It stores a single value for each row in the table",
  },
  {
    question:
      "Which of the following SQL commands is used to insert new data into a database table?",
    options: ["(A) DELETE", "(B) UPDATE", "(C) INSERT", "(D) CREATE"],
    answer: "(C) INSERT",
  },
  {
    question: "What is the purpose of a foreign key in a database?",
    options: [
      "(A) To uniquely identify each record in a table",
      "(B) To link two tables together based on a common field",
      "(C) To enforce data type restrictions on a table",
      "(D) To store large binary data, such as images or documents",
    ],
    answer: "(B) To link two tables together based on a common field",
  },
  {
    question: "Which of the following is a type of database index?",
    options: [
      "(A) Primary index",
      "(B) Secondary index",
      "(C) Both primary and secondary index",
      "(D) Neither primary nor secondary index",
    ],
    answer: "(C) Both primary and secondary index",
  },
  {
    question: "What is the purpose of the SELECT clause in SQL?",
    options: [
      "(A) To filter the query result based on a condition",
      "(B) To sort the query result in ascending or descending order",
      "(C) To group the query result based on one or more columns",
      "(D) To specify the columns to retrieve from the table",
    ],
    answer: "(D) To specify the columns to retrieve from the table",
  },
  {
    question: "What is a database view in SQL?",
    options: [
      "(A) A temporary table that is created for a single query",
      "(B) A virtual table that is based on the result of a SELECT statement",
      "(C) A physical table that is created from the data in one or more tables",
      "(D) A stored procedure that can be called from other SQL queries",
    ],
    answer: "(B) A virtual table that is based on the result of a SELECT statement",
  },
  {
    question:
      "Which of the following SQL commands is used to update existing data in a database table?",
    options: ["(A) INSERT", "(B) UPDATE", "(C) DELETE", "(D) SELECT"],
    answer: "(B) UPDATE",
  },
  {
    question: "What is a primary key in a database?",
    options: [
      "(A) A field that is used to group related records together",
      "(B) A field that is used to filter records in a query",
      "(C) A unique identifier for each record in a table",
      "(D) A table that is linked to another table in a database",
    ],
    answer: "(C) A unique identifier for each record in a table",
  },
  {
    question:
      "Which of the following SQL commands is used to insert new data into a database table?",
    options: ["DELETE", "(B) UPDATE", "(C) INSERT", "(D) CREATE"],
    answer: "(C) INSERT",
  },
  {
    question: "What is a foreign key in a database?",
    options: [
      "(A) A key used to filter records in a query",
      "(B) A key used to group related records together",
      "(C) A key used to link one table to another in a database",
      "(D) A key used to identify a unique record in a table",
    ],
    answer: "(C) A key used to link one table to another in a database",
  },
  {
    question: "What is an index in a database?",
    options: [
      "(A) A table that contains a list of primary keys",
      "(B) A field that is used to group related records together",
      "(C) A data structure used to improve the performance of database queries",
      "(D) A table that contains a list of foreign keys",
    ],
    answer:
      "(C) A data structure used to improve the performance of database queries",
  },
  {
    question: "What is a join in SQL?",
    options: [
      "(A) A command used to delete data from a database",
      "(B) A command used to update data in a database",
      "(C) A command used to combine data from two or more tables",
      "(D) A command used to create a new table in a database",
    ],
    answer: "(C) A command used to combine data from two or more tables",
  },
  {
    question: "What is a stored procedure in a database?",
    options: [
      "(A) A function that performs a specific task in a database",
      "(B) A table that contains a list of primary keys",
      "(C) A data structure used to store large amounts of data",
      "(D) A table that contains a list of foreign keys",
    ],
    answer: "(A) A function that performs a specific task in a database",
  },
  {
    question: "What is ACID in database management?",
    options: [
      "(A) A set of properties that ensure database transactions are processed reliably",
      "(B) A type of database architecture that is designed to be highly scalable",
      "(C) A command used to update data in a database",
      "(D) A data structure used to store large amounts of data",
    ],
    answer:
      "(A) A set of properties that ensure database transactions are processed reliably",
  },
  {
    question: "What is a view in a database?",
    options: [
      "(A) A temporary table used for storing data",
      "(B) A table that is linked to another table in a database",
      "(C) A stored procedure used for querying data",
      "(D) A virtual table used for presenting data in a specific way",
    ],
    answer: "(D) A virtual table used for presenting data in a specific way",
  },
  {
    question: "What is a trigger in a database?",
    options: [
      "(A) A stored procedure used for updating data",
      "(B) A stored procedure used for querying data",
      "(C) A program that automatically executes in response to a specific event",
      "(D) A virtual table used for presenting data in a specific way",
    ],
    answer:
      "(C) A program that automatically executes in response to a specific event",
  },
  {
    question: "What is a transaction in a database?",
    options: [
      "(A) A group of SQL statements that are executed together as a single unit",
      "(B) A table that is linked to another table in a database",
      "(C) A stored procedure used for querying data",
      "(D) A temporary table used for storing data",
    ],
    answer:
      "(A) A group of SQL statements that are executed together as a single unit",
  },
  {
    question: "What is a database index?",
    options: [
      "(A) A data structure that allows for faster data retrieval in a database",
      "(B) A table that is linked to another table in a database",
      "(C) A stored procedure used for updating data",
      "(D) A virtual table used for presenting data in a specific way",
    ],
    answer:
      "(A) A data structure that allows for faster data retrieval in a database",
  },
  {
    question: "What is a clustered index in a database?",
    options: [
      "(A) An index that determines the physical order of data in a table",
      "(B) An index that contains only unique values",
      "(C) A table that is linked to another table in a database",
      "(D) A temporary table used for storing data",
    ],
    answer: "(A) An index that determines the physical order of data in a table",
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

app.get("/databaseQuestions", (req, res) => {
  res.send(databaseQuestions);
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
