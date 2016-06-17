var massive = require('massive')
var connectionsString = "postgres://localhost/scarbble_express"
var db = ,assive.connectSync({connectionString: connectionString})

var data = require('../db/seeds/words.json')
var records = data.length

// this is asynchronis code:
// how do i know when done? what does done mean? all fo the records that are in the json file are now in the db
// until that point, we're not done
// the stuff we get out of the json file is an array, whats in the array, nee to save that off

function checkFinsih() {
  // asynchronis operatons get callbacks
  db.words.count(function(err, res) {
    console.log("words in db: ", res)
    if (res >= records) { process.exit() }
  })
}


for (var record of data) {
  db.words.save(record, function(err, res) {
    console.log('saved: ', JSON.stringify(res))
    checkFinish()
  })
}

// saved line- a callback from saving a word in the db
// words line is______
// items in queque have the .exit but will wait til theyre next up in the queque and the stack is empty
// nothing gets pulled outof the stack queque before the stack is empty







// this is synchronis code:

// for (var record of data) {
//   console.log(record.word, record.score)
//   // this is what our record looks like: {word: "elephant", score: 63}
//   db.words.saveSync(record)
//   // this is the same:
//   // db.words.saveSync({word: record.word, score: record.score})
// }
// console.log("seeding done!")
// process.exit()



// synchronis is not ok for our main aplication bc synchronis db calls are blocking? WTF does this mean?
// communicating with the db is expensive
// js is built to be non-blocking


// saveSyna a blocking operation that doesnt necessitate a callback
// if doing update, will have an id, thats how massive knows which record to update without id it treats it like a new record and does an insert

// node tasks/seed.js to run for(var) above
// then
// select * from words


// differenece between asyncronis and syncronis?????? WTF does this mean???
    // asynchronis is faster
// WTF is massive?????? saved words bc we had a table called words????????? WTF?
