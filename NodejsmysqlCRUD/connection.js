const mysql2 = require("mysql2")
const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "India_143",
    database: "youtube",
    port: 3306
});

con.connect((err)=> {
    if (err) throw err;
    console.log("Connection created...!!");
});

module.exports.con = con;
