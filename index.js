var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


var tasks = [];


app.post("/addtask", function(req, res) {

    var newTask = req.body.newtask;

    var num=tasks.length;
    var tasknew={id:num,label:newTask,completed:false};
    tasks.push(tasknew);

    res.send(tasks);
});

app.post("/toggletask", function(req, res) {

    var newid = req.body.check;

    newid=parseInt(newid);
    if (tasks[newid].completed)
      tasks[newid].completed = false;
    else 
      tasks[newid].completed = true;


        res.send(tasks);

});


app.get('/alltasks', function(req, res){
   res.send(tasks);
});

app.listen(3000, function() {
    console.log("server is running on port 3000");
});
