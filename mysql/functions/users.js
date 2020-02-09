var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

function createProfessor(req, res, cn) {
    var dataRequest = req.body;
    bcrypt.hash(dataRequest.password, 10)
    .then((hashResult)=>{
        var sql = "INSERT INTO  users (name, isProfessor, password) VALUES ('" + dataRequest.name + "', '1','"+ hashResult +"')";
        cn.query(sql, dataRequest, (err, rows) =>{
            if (err) throw err
            res.send(rows);
        })
    })    
}

function createStudent(req, res, cn) {
    var dataRequest = req.body;
    var sql = "INSERT INTO  users (name, isProfessor, password) VALUES ('" + dataRequest.name + "', '0')";
    cn.query(sql, dataRequest, (err, rows) =>{
        if (err) throw err
        res.send(rows);
    })
}

function login(req, res, cn) {
    var dataRequest = req.body;
    var sql = "SELECT * FROM users WHERE name = ?";
    cn.query(sql, dataRequest.name, (err, rows)=>{
        if (err) throw err;
        if (rows.length == 0) {
            res.send("Vacio")
        }
        else{
            res.send(rows)
        }
    })
}

module.exports ={
    createProfessor,
    createStudent,
    login
}