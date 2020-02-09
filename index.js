var express = require('express');
var bodyParser = require('body-parser');
var db = require('./mysql/data')
var users = require('./mysql/functions/users')
var courses = require('./mysql/functions/courses')

var config = require('./config/config')


db.connection.connect((err)=>{
    if(err) throw err
    console.log("Conectado");
});

var app = express();
app.set('configjwt', config.secretKey);
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
})

/** Users */
app.post('/users/professors',(req, res)=> users.createProfessor(req, res, db.connection));
app.post('/users/students',(req, res)=> users.createProfessor(req, res, db.connection));
app.post('/login', (req, res) => users.login(req, res, db.connection));

/** Courses */
app.get('/courses', (req, res) => courses.getCourses(req, res, db.connection));
app.get('/courses/:courseId', (req, res) => courses.getCourseById(req, res, db.connection));
app.post('/courses', (req, res) => courses.createCourse(req, res, db.connection));
app.put('/courses', (req, res) => courses.updateCourse(req, res, db.connection));
app.delete('/courses', (req, res) => courses.deleteCourse(req, res, db.connection));

app.listen(3000, function() {
    console.log('Listening on port 3000')
})