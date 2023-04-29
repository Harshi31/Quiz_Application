const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const databaseQuestions = [
  {
    question: "What is the purpose of a primary key in a database?",
    options: [
      "To uniquely identify each row in a table",
      "To sort data in a table in ascending or descending order",
      "To create a new table based on existing tables",
      "To update a single column in a table",
    ],
    answer: "To uniquely identify each row in a table",
  },
  {
    question:
      "What is the difference between a clustered index and a non-clustered index?",
    options: [
      "A clustered index determines the physical order of data in a table, while a non-clustered index does not",
      "A non-clustered index determines the physical order of data in a table, while a clustered index does not",
      "A clustered index and a non-clustered index are the same thing",
      "A clustered index can only be used for SELECT operations, while a non-clustered index can be used for any database operation",
    ],
    answer:
      "A clustered index determines the physical order of data in a table, while a non-clustered index does not",
  },
  {
    question: "What is a foreign key in a database?",
    options: [
      "A column or set of columns that refers to a primary key in another table",
      "A column that uniquely identifies each row in a table",
      "A set of rules that govern the format of data in a table",
      "A query that retrieves data from multiple tables in a database",
    ],
    answer:
      "A column or set of columns that refers to a primary key in another table",
  },
  {
    question: "What is a stored procedure in a database?",
    options: [
      "A precompiled and stored set of SQL statements that perform a specific task",
      "A data structure that improves the speed of data retrieval operations on a database table",
      "A query that retrieves data from multiple tables in a database",
      "A column that uniquely identifies each row in a table",
    ],
    answer:
      "A precompiled and stored set of SQL statements that perform a specific task",
  },
  {
    question:
      "What is the difference between a LEFT JOIN and an INNER JOIN in a database?",
    options: [
      "A LEFT JOIN returns all records from the left table and the matched records from the right table, while an INNER JOIN only returns the matched records from both tables",
      "An INNER JOIN returns all records from the left table and the matched records from the right table, while a LEFT JOIN only returns the matched records from both tables",
      "A LEFT JOIN and an INNER JOIN are the same thing",
      "A LEFT JOIN can only be used for SELECT operations, while an INNER JOIN can be used for any database operation",
    ],
    answer:
      "A LEFT JOIN returns all records from the left table and the matched records from the right table, while an INNER JOIN only returns the matched records from both tables",
  },
  {
    question:
      "What is the purpose of the GROUP BY clause in a SELECT statement?",
    options: [
      "To group rows that have the same values in a specified column or columns",
      "To sort data in a table in ascending or descending order",
      "To create a new table based on existing tables",
      "To update a single column in a table",
    ],
  },
  {
    question: "What is the purpose of a primary key in a database?",
    options: [
      "To uniquely identify each row in a table",
      "To sort data in a table in ascending or descending order",
      "To create a new table based on existing tables",
      "To update a single column in a table",
    ],
    answer: "To uniquely identify each row in a table",
  },
  {
    question:
      "What is the difference between a clustered index and a non-clustered index?",
    options: [
      "A clustered index determines the physical order of data in a table, while a non-clustered index does not",
      "A non-clustered index determines the physical order of data in a table, while a clustered index does not",
      "A clustered index and a non-clustered index are the same thing",
      "A clustered index can only be used for SELECT operations, while a non-clustered index can be used for any database operation",
    ],
    answer:
      "A clustered index determines the physical order of data in a table, while a non-clustered index does not",
  },
  {
    question: "What is a foreign key in a database?",
    options: [
      "A column or set of columns that refers to a primary key in another table",
      "A column that uniquely identifies each row in a table",
      "A set of rules that govern the format of data in a table",
      "A query that retrieves data from multiple tables in a database",
    ],
    answer:
      "A column or set of columns that refers to a primary key in another table",
  },
  {
    question: "What is a stored procedure in a database?",
    options: [
      "A precompiled and stored set of SQL statements that perform a specific task",
      "A data structure that improves the speed of data retrieval operations on a database table",
      "A query that retrieves data from multiple tables in a database",
      "A column that uniquely identifies each row in a table",
    ],
    answer:
      "A precompiled and stored set of SQL statements that perform a specific task",
  },
  {
    question:
      "What is the difference between a LEFT JOIN and an INNER JOIN in a database?",
    options: [
      "A LEFT JOIN returns all records from the left table and the matched records from the right table, while an INNER JOIN only returns the matched records from both tables",
      "An INNER JOIN returns all records from the left table and the matched records from the right table, while a LEFT JOIN only returns the matched records from both tables",
      "A LEFT JOIN and an INNER JOIN are the same thing",
      "A LEFT JOIN can only be used for SELECT operations, while an INNER JOIN can be used for any database operation",
    ],
    answer:
      "A LEFT JOIN returns all records from the left table and the matched records from the right table, while an INNER JOIN only returns the matched records from both tables",
  },
  {
    question: "What is the purpose of a primary key in a database?",
    options: [
      "To link two tables together based on a common field",
      "To store large binary data, such as images or documents",
      "To uniquely identify each record in a table",
      "To enforce data type restrictions on a table",
    ],
    answer: "To uniquely identify each record in a table",
  },
  {
    question: "Which of the following is an example of a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    answer: "MongoDB",
  },
  {
    question: "What is the purpose of the ORDER BY clause in SQL?",
    options: [
      "To filter the query result based on a condition",
      "To group the query result based on one or more columns",
      "To sort the query result in ascending or descending order",
      "To join multiple tables in the query",
    ],
    answer: "To sort the query result in ascending or descending order",
  },
  {
    question:
      "Which of the following is a benefit of using a relational database?",
    options: [
      "It provides better support for handling large amounts of unstructured data",
      "It is more scalable and better suited for distributed computing",
      "It ensures data consistency by enforcing strict data schemas",
      "It is easier to set up and maintain than other types of databases",
    ],
    answer: "It ensures data consistency by enforcing strict data schemas",
  },
  {
    question:
      "Which of the following is not a type of database management system?",
    options: [
      "Relational database management system",
      "Document-oriented database management system",
      "Object-oriented programming language",
      "Graph database management system",
    ],
    answer: "Object-oriented programming language",
  },
  {
    question: "What is the purpose of the WHERE clause in SQL?",
    options: [
      "To sort the query result in ascending or descending order",
      "To filter the query result based on a condition",
      "To group the query result based on one or more columns",
      "To join multiple tables in the query",
    ],
    answer: "To filter the query result based on a condition",
  },
  {
    question: "Which of the following is a characteristic of a NoSQL database?",
    options: [
      "It enforces strict data schemas",
      "It is typically used for small-scale applications",
      "It provides better support for complex queries and transactions",
      "It is more suitable for handling unstructured and semi-structured data",
    ],
    answer:
      "It is more suitable for handling unstructured and semi-structured data",
  },
  {
    question: "What is the purpose of the JOIN clause in SQL?",
    options: [
      "To group the query result based on one or more columns",
      "To filter the query result based on a condition",
      "To combine data from two or more tables",
      "To sort the query result in ascending or descending order",
    ],
    answer: "To combine data from two or more tables",
  },
  {
    question:
      "Which of the following is a characteristic of a column in a database table?",
    options: [
      "It stores a single value for each row in the table",
      "It stores a group of related data fields",
      "It defines the structure of the table, including its columns and data types",
      "It is used to filter data in a query",
    ],
    answer: "It stores a single value for each row in the table",
  },
  {
    question:
      "Which of the following SQL commands is used to insert new data into a database table?",
    options: ["DELETE", "UPDATE", "INSERT", "CREATE"],
    answer: "INSERT",
  },
  {
    question: "What is the purpose of a foreign key in a database?",
    options: [
      "To uniquely identify each record in a table",
      "To link two tables together based on a common field",
      "To enforce data type restrictions on a table",
      "To store large binary data, such as images or documents",
    ],
    answer: "To link two tables together based on a common field",
  },
  {
    question: "Which of the following is a type of database index?",
    options: [
      "Primary index",
      "Secondary index",
      "Both primary and secondary index",
      "Neither primary nor secondary index",
    ],
    answer: "Both primary and secondary index",
  },
  {
    question: "What is the purpose of the SELECT clause in SQL?",
    options: [
      "To filter the query result based on a condition",
      "To sort the query result in ascending or descending order",
      "To group the query result based on one or more columns",
      "To specify the columns to retrieve from the table",
    ],
    answer: "To specify the columns to retrieve from the table",
  },
  {
    question: "What is a database?",
    options: [
      "A collection of files",
      "A collection of tables",
      "A collection of spreadsheets",
      "A collection of documents",
    ],
    answer: "A collection of tables",
  },
  {
    question:
      "Which of the following is a characteristic of a column in a database table?",
    options: [
      "It stores a single value for each row in the table",
      "It stores a group of related data fields",
      "It defines the structure of the table, including its columns and data types",
      "It is used to filter data in a query",
    ],
    answer: "It stores a single value for each row in the table",
  },
  {
    question:
      "Which of the following SQL commands is used to insert new data into a database table?",
    options: ["DELETE", "UPDATE", "INSERT", "CREATE"],
    answer: "INSERT",
  },
  {
    question: "What is the purpose of a foreign key in a database?",
    options: [
      "To uniquely identify each record in a table",
      "To link two tables together based on a common field",
      "To enforce data type restrictions on a table",
      "To store large binary data, such as images or documents",
    ],
    answer: "To link two tables together based on a common field",
  },
  {
    question: "Which of the following is a type of database index?",
    options: [
      "Primary index",
      "Secondary index",
      "Both primary and secondary index",
      "Neither primary nor secondary index",
    ],
    answer: "Both primary and secondary index",
  },
  {
    question: "What is the purpose of the SELECT clause in SQL?",
    options: [
      "To filter the query result based on a condition",
      "To sort the query result in ascending or descending order",
      "To group the query result based on one or more columns",
      "To specify the columns to retrieve from the table",
    ],
    answer: "To specify the columns to retrieve from the table",
  },
  {
    question: "What is a database view in SQL?",
    options: [
      "A temporary table that is created for a single query",
      "A virtual table that is based on the result of a SELECT statement",
      "A physical table that is created from the data in one or more tables",
      "A stored procedure that can be called from other SQL queries",
    ],
    answer: "A virtual table that is based on the result of a SELECT statement",
  },
  {
    question:
      "Which of the following SQL commands is used to update existing data in a database table?",
    options: ["INSERT", "UPDATE", "DELETE", "SELECT"],
    answer: "UPDATE",
  },
  {
    question: "What is a primary key in a database?",
    options: [
      "A field that is used to group related records together",
      "A field that is used to filter records in a query",
      "A unique identifier for each record in a table",
      "A table that is linked to another table in a database",
    ],
    answer: "A unique identifier for each record in a table",
  },
  {
    question:
      "Which of the following SQL commands is used to insert new data into a database table?",
    options: ["DELETE", "UPDATE", "INSERT", "CREATE"],
    answer: "INSERT",
  },
  {
    question: "What is a foreign key in a database?",
    options: [
      "A key used to filter records in a query",
      "A key used to group related records together",
      "A key used to link one table to another in a database",
      "A key used to identify a unique record in a table",
    ],
    answer: "A key used to link one table to another in a database",
  },
  {
    question: "What is an index in a database?",
    options: [
      "A table that contains a list of primary keys",
      "A field that is used to group related records together",
      "A data structure used to improve the performance of database queries",
      "A table that contains a list of foreign keys",
    ],
    answer:
      "A data structure used to improve the performance of database queries",
  },
  {
    question: "What is a join in SQL?",
    options: [
      "A command used to delete data from a database",
      "A command used to update data in a database",
      "A command used to combine data from two or more tables",
      "A command used to create a new table in a database",
    ],
    answer: "A command used to combine data from two or more tables",
  },
  {
    question: "What is a stored procedure in a database?",
    options: [
      "A function that performs a specific task in a database",
      "A table that contains a list of primary keys",
      "A data structure used to store large amounts of data",
      "A table that contains a list of foreign keys",
    ],
    answer: "A function that performs a specific task in a database",
  },
  {
    question: "What is ACID in database management?",
    options: [
      "A set of properties that ensure database transactions are processed reliably",
      "A type of database architecture that is designed to be highly scalable",
      "A command used to update data in a database",
      "A data structure used to store large amounts of data",
    ],
    answer:
      "A set of properties that ensure database transactions are processed reliably",
  },
  {
    question: "What is a view in a database?",
    options: [
      "A temporary table used for storing data",
      "A table that is linked to another table in a database",
      "A stored procedure used for querying data",
      "A virtual table used for presenting data in a specific way",
    ],
    answer: "A virtual table used for presenting data in a specific way",
  },
  {
    question: "What is a trigger in a database?",
    options: [
      "A stored procedure used for updating data",
      "A stored procedure used for querying data",
      "A program that automatically executes in response to a specific event",
      "A virtual table used for presenting data in a specific way",
    ],
    answer:
      "A program that automatically executes in response to a specific event",
  },
  {
    question: "What is a transaction in a database?",
    options: [
      "A group of SQL statements that are executed together as a single unit",
      "A table that is linked to another table in a database",
      "A stored procedure used for querying data",
      "A temporary table used for storing data",
    ],
    answer:
      "A group of SQL statements that are executed together as a single unit",
  },
  {
    question: "What is a database index?",
    options: [
      "A data structure that allows for faster data retrieval in a database",
      "A table that is linked to another table in a database",
      "A stored procedure used for updating data",
      "A virtual table used for presenting data in a specific way",
    ],
    answer:
      "A data structure that allows for faster data retrieval in a database",
  },
  {
    question: "What is a clustered index in a database?",
    options: [
      "An index that determines the physical order of data in a table",
      "An index that contains only unique values",
      "A table that is linked to another table in a database",
      "A temporary table used for storing data",
    ],
    answer: "An index that determines the physical order of data in a table",
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
