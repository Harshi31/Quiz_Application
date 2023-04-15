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
    question: "What is a primary key in a database table?",
    options: [
      " A unique identifier for a row in a table",
      " A unique identifier for a column in a table",
      " A unique identifier for a database",
    ],
    answer: "A unique identifier for a column in a table",
  },
  {
    question: "What is a foreign key in a database table?",
    options: [
      " A key that links two or more tables together",
      " A key that is used to encrypt data in a table",
      " A key that is used to index a table",
    ],
    answer: "A key that is used to encrypt data in a table",
  },
  {
    question: "What is a join in a database query?",
    options: [
      " A way to combine data from two or more tables based on a related column",
      " A way to search for data in a table",
      " A way to sort data in a table",
    ],
    answer:
      "A way to combine data from two or more tables based on a related column",
  },
  {
    question: "What is an index in a database?",
    options: [
      " A way to search for data in a table",
      " A way to sort data in a table",
      " A way to improve the performance of database queries",
    ],
    answer: "A way to improve the performance of database queries",
  },
  {
    question: "What is a stored procedure in a database?",
    options: [
      " A set of SQL statements that are stored and executed on the server",
      " A way to query data from multiple tables",
      " A way to organize and store data in a hierarchical structure",
    ],
    answer:
      "A set of SQL statements that are stored and executed on the server",
  },
  {
    question: "What is a view in a database?",
    options: [
      " A virtual table that is derived from the result of a select query",
      " A database object that is used to query data from multiple tables",
      " A database object that stores a collection of related data",
    ],
    answer: "A virtual table that is derived from the result of a select query",
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
    question: "What is a sharding in a database?",
    options: [
      " A technique used to partition a large database into smaller, more manageable parts called shards",
      " A way to search for data in a table",
      " A way to sort data in a table",
    ],
    answer:
      "A technique used to partition a large database into smaller, more manageable parts called shards",
  },
  {
    question: "What is CAP theorem in distributed database systems?",
    options: [
      " A theorem that states that a distributed database can have at most two of the following three desirable properties: consistency, availability, and partition tolerance",
      " A theorem that states that a distributed database can have all three desirable properties: consistency, availability, and partition tolerance",
      " A theorem that states that a distributed database can have only one desirable property: consistency, availability, or partition tolerance",
    ],
    answer:
      "A theorem that states that a distributed database can have at most two of the following three desirable properties: consistency, availability, and partition tolerance",
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
    question: "What is a sharding in a database?",
    options: [
      " A technique used to partition a large database into smaller, more manageable parts called shards",
      " A way to search for data in a table",
      " A way to sort data in a table",
    ],
    answer:
      "A technique used to partition a large database into smaller, more manageable parts called shards",
  },
  {
    question: "What is CAP theorem in distributed database systems?",
    options: [
      " A theorem that states that a distributed database can have at most two of the following three desirable properties: consistency, availability, and partition tolerance",
      " A theorem that states that a distributed database can have all three desirable properties: consistency, availability, and partition tolerance",
      " A theorem that states that a distributed database can have only one desirable property: consistency, availability, or partition tolerance",
    ],
    answer:
      "A theorem that states that a distributed database can have at most two of the following three desirable properties: consistency, availability, and partition tolerance",
  },
  {
    question: "What is ACID in database transactions?",
    options: [
      " A set of properties that guarantee that database transactions are processed reliably",
      " A way to search for data in a table",
      " A way to sort data in a table",
    ],
    answer:
      "A set of properties that guarantee that database transactions are processed reliably",
  },
  {
    question: "What is a transaction in a database?",
    options: [
      " A single unit of work performed on a database",
      " A way to search for data in a table",
      " A way to sort data in a table",
    ],
    answer: "A single unit of work performed on a database",
  },
  {
    question: "What is a deadlock in a database?",
    options: [
      " A situation where two or more transactions are blocked and waiting for each other to release locks on data",
      " A way to search for data in a table",
      " A way to sort data in a table",
    ],
    answer:
      "A situation where two or more transactions are blocked and waiting for each other to release locks on data",
  },
  {
    question: "What is normalization in database design?",
    options: [
      " A process of organizing data in a database to minimize data redundancy and dependency",
      " A way to search for data in a table",
      " A way to sort data in a table",
    ],
    answer:
      "A process of organizing data in a database to minimize data redundancy and dependency",
  },
  {
    question: "What is denormalization in database design?",
    options: [
      " A process of intentionally adding redundancy to a database to improve performance or simplify querying",
      " A way to search for data in a table",
      " A way to sort data in a table",
    ],
    answer:
      "A process of intentionally adding redundancy to a database to improve performance or simplify querying",
  },
  {
    question: "What is indexing in a database?",
    options: [
      " A way to search for data in a table",
      " A way of optimizing database performance by creating data structures that allow for faster data retrieval",
      " A way to sort data in a table",
    ],
    answer:
      "A way of optimizing database performance by creating data structures that allow for faster data retrieval",
  },
  {
    question: "What is a trigger in a database?",
    options: [
      " A way to search for data in a table",
      " A special type of stored procedure that is automatically executed in response to certain database events",
      " A way to sort data in a table",
    ],
    answer:
      "A special type of stored procedure that is automatically executed in response to certain database events",
  },
  {
    question: "What is a view in a database?",
    options: [
      " A way to search for data in a table",
      " A way to sort data in a table",
      " A virtual table that is based on the result of a SQL statement",
    ],
    answer: "A virtual table that is based on the result of a SQL statement",
  },
  {
    question: "What is a stored procedure in a database?",
    options: [
      " A way to sort data in a table",
      " A precompiled SQL statement that is stored in a database and can be called by other SQL statements or applications",
      " A way to search for data in a table",
    ],
    answer:
      "A precompiled SQL statement that is stored in a database and can be called by other SQL statements or applications",
  },
  {
    question: "What is a cursor in a database?",
    options: [
      " A way to search for data in a table",
      " A way to sort data in a table",
      " A database object that enables traversal over the rows in a result set",
    ],
    answer:
      "A database object that enables traversal over the rows in a result set",
  },
  {
    question: "What is a primary key in a database?",
    options: [
      " A column or set of columns that uniquely identifies each row in a table",
      " A way to search for data in a table",
      " A way to sort data in a table",
    ],
    answer:
      "A column or set of columns that uniquely identifies each row in a table",
  },
  {
    question: "What is a foreign key in a database?",
    options: [
      " A way to search for data in a table",
      " A column or set of columns that references the primary key of another table",
      " A way to sort data in a table",
    ],
    answer:
      "A column or set of columns that references the primary key of another table",
  },
  {
    question: "What is a composite key in a database?",
    options: [
      " A way to search for data in a table",
      " A way to sort data in a table",
      " A key that consists of more than one column",
    ],
    answer: "A key that consists of more than one column",
  },
  {
    question: "What is a clustered index in a database?",
    options: [
      " A way to search for data in a table",
      " A way to sort data in a table",
      " An index that determines the physical order of data in a table based on the values in one or more columns",
    ],
    answer:
      "An index that determines the physical order of data in a table based on the values in one or more columns",
  },
  {
    question: "What is a nonclustered index in a database?",
    options: [
      " An index that does not affect the physical order of data in a table and is stored separately from the table",
      " A way to search for data in a table",
      " A way to sort data in a table",
    ],
    answer:
      "An index that does not affect the physical order of data in a table and is stored separately from the table",
  },
  {
    question: "What is a full-text index in a database?",
    options: [
      " A way to search for data in a table",
      " A way to sort data in a table",
      " An index that enables fast searching of text data using keywords and Boolean operators",
    ],
    answer:
      "An index that enables fast searching of text data using keywords and Boolean operators",
  },
  {
    question: "What is a join in a database?",
    options: [
      " A way to search for data in a table",
      " A way to combine data from two or more tables based on a related column between them",
      " A way to sort data in a table",
    ],
    answer:
      "A way to combine data from two or more tables based on a related column between them",
  },
  {
    question: "What is a subquery in a database?",
    options: [
      " A way to search for data in a table",
      " A way to sort data in a table",
      " A query that is nested inside another query and is used to retrieve data that will be used in the main query",
    ],
    answer:
      "A query that is nested inside another query and is used to retrieve data that will be used in the main query",
  },
  {
    question: "What is a correlated subquery in a database?",
    options: [
      " A way to search for data in a table",
      " A way to sort data in a table",
      " A subquery that is related to the main query and is executed for each row returned by the main query",
    ],
    answer:
      "A subquery that is related to the main query and is executed for each row returned by the main query",
  },
  {
    question: "What is data warehousing in a database?",
    options: [
      " A way to search for data in a table",
      " A process of collecting and managing data from multiple sources to provide meaningful business insights",
      " A way to sort data in a table",
    ],
    answer:
      "A process of collecting and managing data from multiple sources to provide meaningful business insights",
  },
  {
    question: "What is a database transaction?",
    options: [
      " A way to search for data in a table",
      " A way to sort data in a table",
      " A sequence of one or more database operations that are treated as a single unit of work",
    ],
    answer:
      "A sequence of one or more database operations that are treated as a single unit of work",
  },
  {
    question:
      "What is the purpose of the COMMIT statement in a database transaction?",
    options: [
      " To roll back the changes made to the database during the transaction",
      " To permanently save the changes made to the database during the transaction",
      " To undo a specific change made during the transaction",
    ],
    answer:
      "To permanently save the changes made to the database during the transaction",
  },
  {
    question:
      "What is the purpose of the ROLLBACK statement in a database transaction?",
    options: [
      " To permanently save the changes made to the database during the transaction",
      " To undo a specific change made during the transaction",
      " To undo all the changes made to the database during the transaction",
    ],
    answer:
      "To undo all the changes made to the database during the transaction",
  },
  {
    question:
      "What is the difference between a unique key and a primary key in a database?",
    options: [
      " A primary key cannot contain null values, but a unique key can",
      " A unique key can contain null values, but a primary key cannot",
      " There is no difference between a unique key and a primary key",
    ],
    answer: "A unique key can contain null values, but a primary key cannot",
  },
  {
    question: "What is the purpose of the GROUP BY clause in a SQL query?",
    options: [
      " To sort the result set in ascending or descending order",
      " To limit the number of rows returned by the query",
      " To group rows that have the same values in a specified column or set of columns",
    ],
    answer:
      "To group rows that have the same values in a specified column or set of columns",
  },
  {
    question: "What is the purpose of the HAVING clause in a SQL query?",
    options: [
      " To group rows that have the same values in a specified column or set of columns",
      " To limit the number of rows returned by the query",
      " To filter the result set based on a condition that involves an aggregate function",
    ],
    answer:
      "To filter the result set based on a condition that involves an aggregate function",
  },
  {
    question: "What is the purpose of the EXISTS operator in a SQL query?",
    options: [
      " To filter the result set based on a condition that involves an aggregate function",
      " To join two or more tables based on a related column between them",
      " To check if a subquery returns any rows",
    ],
    answer: "To check if a subquery returns any rows",
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
