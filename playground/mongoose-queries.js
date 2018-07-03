const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = "5b3b9f153678308416a21767";

if(!ObjectId.isValid(id)){
    console.log('ID not valid');
}

Todo.find({
    _id : id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id : id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not Found');
    }
    console.log('Todo by ID', todo);
}).catch((e) => console.log(e));

console.log('First');