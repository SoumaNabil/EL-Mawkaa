//import { QuerySnapshot } from '@google-cloud/firestore';
const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);
var db = admin.firestore();

exports.funAdd = functions.https.onRequest((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const userID = req.body.userID;
  admin.firestore()
    .collection('Users')
    .doc(userID)
    .set({
      fName: firstName,
      lName: lastName,
    });
});

exports.addBid = functions.https.onRequest((req, res) => {
  const bidName = req.body.bidName;
  const duration = req.body.duration;
  const bidID = req.body.bidID;
  
  admin.firestore()
    .collection('Bids')
    .doc(bidID)
    .set({
      bidName: bidName,
      duration: duration,

    });
});
//////////////////////////////////////////////////////


//get all documents in json like this 
exports.funget = functions.https.onRequest((req, res) => {
  const store = admin.firestore()
  const output = {}
  store.collection('Users').get().then((snapshot) => {
    snapshot.forEach((doc) => {
      //console.log(doc.id, '=>', doc.data());
      output[doc.id] = doc.data()
    });
    return res.json(output);
  })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
});
