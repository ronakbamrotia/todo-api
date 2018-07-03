// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to mongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID("5b3af3cabf741115f824253e")
    // }, {
    //     $set : {
    //         completed : false
    //     }
    // }, {
    //     returnOriginal : false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID("5b3ae30b1d5c5315647f0d4b")
    }, {
        $set : {
            name : 'RON'
        },
        $inc :{
            age : 1
        }
    }, {
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    });
   
    // db.close();
});