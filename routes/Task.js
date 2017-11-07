var express = require('express');
var router = express.Router();
var Task=require('../models/Task');


router.get('/:id?', function(req, res, next) {
    if(req.params.id) {
        Task.getTaskById(req.params.id, function(err, rows){
            if(err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        Task.getAllTask(function(err, rows) {
            if(err) {
                res.json(err);
            } else {
                res.json(rows)
            }
        });
    }
});

router.post('/', function(res, req, next) {
    Task.addTask(req.body, function(err, count) {
        if(err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

router.post('/:id', function(res, req, next) {
    Task.deleteAll(req.body, function(err, count) {
        if(err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.delete('/:id', function(res, req, next) {
    Task.deleteTask(req.params.id, function(err, count) {
        if(err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.put('/:id', function(res, req, next) {
    Task.updateTask(req.params.id, req.body, function(err, rows) {
        if(err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;