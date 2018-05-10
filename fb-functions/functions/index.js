//import { QuerySnapshot } from '@google-cloud/firestore';
const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);
var db = admin.firestore();


//add new value and update
exports.funset = functions.https.onRequest((req, res) => {
 const newdata = admin.firestore()
 var docRef = newdata.collection('Users').doc();
 var setData = docRef.set(data);
});

//get all documents in json like this
 exports.funget = functions.https.onRequest((req, res) => {
  const store = admin.firestore()
  const output = {}
  store.collection('Users').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        //console.log(doc.id, '=>', doc.data());
        output[doc.id]=doc.data()
      });
      return res.json(output);
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });      
});

exports.getBid = functions.https.onRequest((req, res) => {
    const store = admin.firestore()
    const output = {}
    store.collection('Bids').get().then((snapshot) => {
        snapshot.forEach((doc) => {
          //console.log(doc.id, '=>', doc.data());
          output[doc.id]=doc.data()
        });
        return res.json(output);
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });      
  });