//const url="mongodb+srv://davidkumar4606:Ajay12@#@shubhamcoder.pmmmiw3.mongodb.net/"

// schema based hai ye bhut flexible h hmlog apne hisab se sab cheez likh skte h

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// username password cluster. @ ke jagah mod(%)40 # ke jagah %23
// @ ka hexadecimal value receive krta h
const url = "mongodb+srv://davidkumar4606:Ajay12%40%23@shubhamcoder.pmmmiw3.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = 'CoderArmy';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName); // isme wo check hi nhi krta h isliye Await nhi likha h
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  // ye Cursor h network call nhi kr rha h
  const findResult= collection.find({}).toArray();
  //const ans= await findResult.toArray();  ye bhut hi khatranak operation h device ka h 5 gb ram aur data ka 8 gb h to khrab ho jayega
  for await (const doc of findResult)
  console.log(doc);
//   console.log('Found documents =>', ans);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


  // Database na karta ho, what will happen: Will it create DB for you or throw an error

