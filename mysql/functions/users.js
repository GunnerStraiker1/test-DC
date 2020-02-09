var mysql = require('mysql');

function createProfessor(req, res, cn) {
    var dataRequest = req.body;
    var sql = "INSERT INTO  users (name, isProfessor) VALUES ('" + dataRequest.name + "', '1')";
    cn.query(sql, dataRequest, (err, rows) =>{
        if (err) throw err
        res.send(rows);
    })
}

function createStudent(req, res, cn) {
    var dataRequest = req.body;
    var sql = "INSERT INTO  users (name, isProfessor) VALUES ('" + dataRequest.name + "', '0')";
    cn.query(sql, dataRequest, (err, rows) =>{
        if (err) throw err
        res.send(rows);
    })
}

module.exports ={
    createProfessor,
    createStudent,
}