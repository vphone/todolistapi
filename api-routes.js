let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to rest api crafted with love!',
    });
});

var todoController = require('./controller/todo');

router.route('/todo')
    .get(todoController.index)
    .post(todoController.new);
router.route('/todo/:todo_id')
    .get(todoController.view)
    .patch(todoController.update)
    .put(todoController.update)
    .delete(todoController.delete);

module.exports = router;