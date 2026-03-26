// CURD helpers

const connectDB = require('./db');
const { ObjectID } = require('mongodb');

//Adding a Book
async function addBook(book) {
  const books = await connectDB();
  const result = await books.insertOne(book);
  console.log('Book added:', result.insertedId);
}

//Fetching Books

async function listBooks() {
  const books = await connectDB();
  const allBooks = await books.find().toArray();
  console.log('All Books:', allBooks);
}

//Updating a book

async function updateBook(id, updates) {
  const books = await connectDB();
  const result = await books.updateOne({ _id: new ObjectID(id) }, { $set: updates });
  console.log('Updated:', result.modifiedCount);
}

async function deleteBook(id) {
  const books = await connectDB();
  const result = await books.deleteOne({ _id: new ObjectID(id) });
  console.log('Deleted:', result.deletedCount);
}

module.exports = { addBook, listBooks, updateBook, deleteBook };
