// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("dbSoftware");

db.getCollection("users").find({});

// Create a new document in the collection.
/* 
db.getCollection("users").insertOne({
  userName: "carlossanchez1980",
  firstName: "Carlos",
  lastName: "Sánchez Pérez",
  email: "carlossanchez1980@gmail.com",
  password: "csan80_3x!",
  createdAt: "2024-09-10T14:45:00Z",
  lastLogin: "2024-09-10T17:30:00Z",
  status: "active",
  role: "admin",
  phoneNumber: "3113456789",
}); 
*/
