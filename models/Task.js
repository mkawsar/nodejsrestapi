var db = require ('../dbconnection');
var Task = {
    getAllTask: function(callback) {
        return db.query("SELECT * FROM task", callback);
    },
    getTaskById:function (callback) {
        return db.query("select * from task where Id=?",[id],callback);
    },
    addTask:function(Task, callback) {
        return db.query("Insert into task values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
    },
    deleteTask:function(id, callback) {
        return db.query("delete from task where Id=?",[id],callback);
    },
    updateTask:function(id, callback) {
        return db.query("update task set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
    }
};

module.exports = Task;