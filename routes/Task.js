var express = require('express');
var router = express.Router();
var Task = require('../models/Task');

router.get('/:id?', function(req, res, next) {
    if(req.params.id) {
        Task.getTaskById(req.params.id, function(err, rows){
            if(err) {
                res.json(err);
            } else {
                /*res.json(rows);*/
                console.log(rows);
                res.render('tasks/editTask', { title: 'Update Task', task: rows, menu: 'TaskList' });
            }
        });
    } else {
        Task.getAllTask(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.render('tasks/taskList', { title: 'All Tasks', results: rows, menu: 'TaskList' });
            }
        });
    }
});

router.post('/',function(req, res, next){
    Task.addTask(req.body,function(err,count){
        /*console.log(req.body);*/
        if(err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

/*router.post('/:id', function(req, res, next) {
    Task.deleteAll(req.body, function(err, count) {
        if(err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});*/

router.delete('/:id', function(req, res, next) {
    /*console.log(req.params.id);*/
    Task.deleteTask(req.params.id, function(err, count) {
        if(err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.post('/update/:id', function(req, res, next) {
    Task.updateTask(req.params.id, req.body, function(err, rows) {
        if(err) {
            res.redirect('/Tasks');
        } else {
            res.redirect('/Tasks');
        }
    });
});

module.exports = router;