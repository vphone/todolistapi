var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    status: String,
    deadline: {
        type: Date,
        default: Date.now
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Todo = module.exports = mongoose.model('todo', todoSchema);
module.exports.get = function (callback, limit) {
    Todo.find(callback).limit(limit);
}