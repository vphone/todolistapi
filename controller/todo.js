Todo = require('./../model/todo');
// Handle index actions
exports.index = function (req, res) {
    Todo.get(function (err, todo) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "todo retrieved successfully",
            data: todo
        });
    });
};
// Handle create todo actions
exports.new = function (req, res) {
    var todo = new Todo();
    todo.label = req.body.label || todo.label;
    todo.priority = req.body.priority;
    todo.status = req.body.status;
    todo.deadline = req.body.deadline;
// save the todo and check for errors
    todo.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New todo created!',
            data: todo
        });
    });
};
// Handle view todo info
exports.view = function (req, res) {
    todo.findById(req.params.todo_id, function (err, todo) {
        if (err)
            res.send(err);
        res.json({
            message: 'todo details loading..',
            data: todo
        });
    });
};
// Handle update todo info
exports.update = function (req, res) {
todo.findById(req.params.todo_id, function (err, todo) {
        if (err)
            res.send(err);
            todo.label = req.body.label || todo.label;
            todo.priority = req.body.priority;
            todo.status = req.body.status;
            todo.deadline = req.body.deadline;
// save the todo and check for errors
        todo.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'todo Info updated',
                data: todo
            });
        });
    });
};
// Handle delete
exports.delete = function (req, res) {
    Todo.remove({
        _id: req.params.todo_id
    }, function (err, todo) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Todo deleted'
        });
    });
};