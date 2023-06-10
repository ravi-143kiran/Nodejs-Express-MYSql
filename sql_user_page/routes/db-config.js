// const mysql2 = require("mysql2");
// const db = mysql2.createConnection({
//     host:process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE
// })
// module.exports.db = db;



const mysql2 = require("mysql2");
const dotenv = require("dotenv").config();
const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "India_143",
    database: "sql_login",
    port: 3306
});
db.connect((err)=> {
    if (err) throw err;
    console.log("Connection created...!!");
    if (err) {
                console.log(err);
            } else {
                console.log("MYSQL CONNECTED")
            }
        
});
module.exports.db = db;
