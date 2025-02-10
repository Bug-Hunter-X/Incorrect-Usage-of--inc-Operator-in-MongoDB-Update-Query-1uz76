# Incorrect Usage of $inc Operator in MongoDB Update Query
This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries.

## The Bug
The provided code snippet shows an incorrect usage of the `$inc` operator.  It's crucial to ensure that the field you're incrementing actually exists and is a numeric value. Otherwise, it can lead to unexpected behaviour and errors.  This example focuses on this potential issue.

## The Solution
The solution focuses on making sure the field exists, and handles the potential for non-numeric values. Error handling and data validation are crucial elements in robust MongoDB applications. 

## How to Reproduce the Bug
1.  Clone this repository.
2.  Make sure you have a MongoDB instance running.
3.  Run the `bug.js` file. You might encounter an error or unexpected results depending on your database state.
4.  Then, run `bugSolution.js` to see the corrected version of the code.

## Note
Always validate your data before performing any MongoDB update operations to avoid unexpected errors.