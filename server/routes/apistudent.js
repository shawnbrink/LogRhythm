var express = require('express'),
router = express.Router(),
util = require('util'),
storage = require('node-persist'),
loki = require('lokijs');



var db = new loki('loki.json');

var students = db.addCollection('students');

students.insert({
  		firstname: "Shawn",
		id: "stu1000",
		lastname: "Brinkman",
		testscore: "70",
		classgrade: "pass",
});

db.saveDatabase();

router.get('/api/student', function(req, res, next) {

    res.json(students.data);
    res.end();
});

router.post('/api/student/', function(req, res, next) {
	students.insert(req.body)
    db.saveDatabase();
    res.sendStatus(200);
    res.end();
});

router.put('/api/student/:id', function(req, res, next) {


	students.update(req.body)

    db.saveDatabase();
    res.sendStatus(200);
    res.end();
});


router.delete('/api/student/:id', function(req, res, next) {
	var lookupstudent = students.find({id:req.params.id})
	students.remove(lookupstudent);
     db.saveDatabase();
    res.sendStatus(200);
    res.end();
});






module.exports = router;