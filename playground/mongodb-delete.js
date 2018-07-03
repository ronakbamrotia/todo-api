// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to mongoDB server');

    // db.collection('Todos').deleteMany({
    //     text : "Eat lunch"
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text : "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
    //     console.log(result);
    // });

    //db.collection('Users').deleteMany({name : "Ram"});

    db.collection('Users').findOneAndDelete({
        _id : ObjectID("5b3ae4ac36637c0da4b05868")
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })
    // db.close();
});