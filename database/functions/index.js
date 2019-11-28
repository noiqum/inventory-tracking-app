const functions = require('firebase-functions');
const admin = require('firebase-admin');

const express= require('express');

const app=express();

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
response.send("Hello from Firebase!");
 });
// get items from database and return them as objects

app.get('/items',(req,res)=>{
    admin
     .firestore()
     .collection('inventory')
     .get()
     .then(data=>{
         let items=[];
         data.forEach(doc=>{
             items.push(doc.data());
         });
         return res.json(items);
     })
        .catch((err) => console.error(err));
});
 
     

 // add an item to database
 app.post('/item',(req,res)=>{
    let item ={
        category:req.body.category,
        barcode:req.body.barcode,
        itemName:req.body.itemName,
        amount:req.body.amount,
        price:req.body.price
    };
    admin
    .firestore()
    .collection('inventory')
    .add(item)
    .then(
        (docRef)=>{
            res.json({mes:`${docRef.id} created`});
        }
    )
     .catch((err)=>console.error(err));
 });
//delete an item from database
app.delete('/itemU',(req,res)=>{
 let itemId=req.body.itemId;
 admin
 .firestore()
 .collection('inventory')
 .doc(itemId)
 .delete()
 .then(
    (doc)=>{ 
        res.json({message:`${itemId} was deleted`});
    }
 )
    .catch((err)=>console.error(err));
});
 
 


 exports.api=functions.https.onRequest(app);