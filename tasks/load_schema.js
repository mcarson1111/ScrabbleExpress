var massive = require('massive');
var connectionString = "postgres://localhost/scrabble_express";

//using massive to create a connection to the db:
var db = massive.connectSync({connectionString : connectionString});

//its called setup bc thats what we named the folder:
db.setup.schema([], function(err, res) {
  if (err) {
    throw(new Error(err.message));
  }

  console.log("yay schema!");
  process.exit();
});

// db.run("CREATE DATABASE scrabble_express;", function(err, res) {
//   if(err) {
//     throw(new Error(err.message))
//   }
//
//   console.log(res)
//   process.exit()
// })
