var mysql = require('mysql');

function getCourses(req, res, cn) {
    var sql = "SELECT * FROM courses";
    cn.query(sql, (err, rows) =>{
        if (err) throw err
        res.send(rows);
    })
}

function getCourseById(req, res, cn) {
    var courseId = req.params.courseId;
    var sql = "SELECT * FROM courses WHERE id = " + courseId;
    cn.query(sql, (err, rows) =>{
        if (err) throw err
        res.send(rows);
    })
}

function createCourse(req, res, cn) {
    var dataRequest = req.body;
    var sql = "INSERT INTO  courses SET ?";
    cn.query(sql, dataRequest, (err, rows) =>{
        if (err) throw err
        res.send(rows);
    })
}

function updateCourse(req, res, cn) {
    var dataRequest = req.body;
    var sql = "UPDATE courses SET ? WHERE ?";
    cn.query(sql, dataRequest, (err, rows) =>{
        if (err) throw err
        res.send(rows);
    })
}

function deleteCourse(req, res, cn) {
    var dataRequest = req.body;
    var sql = "DELETE FROM courses WHERE ?";
    cn.query(sql, dataRequest, (err, rows) =>{
        if (err) throw err
        res.send(rows);
    })
}

module.exports = {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
}