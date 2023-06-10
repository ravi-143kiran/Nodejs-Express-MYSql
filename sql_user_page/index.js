const express = require("express");
const db = require("./routes/db-config");
const app = express();
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 5000;
app.use("/js", express.static(__dirname + "/public/js"))
app.use("/css", express.static(__dirname + "/public/css"))
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cookie());

app.use(express.json());
// db.connect((err)=> {
//     // if(err) throw err;
//     // console.log("database connected");
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("MYSQL CONNECTED")
//     }
// })
// const mysql2 = require("mysql2");
// const dotenv = require("dotenv").config();
// const db = mysql2.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "India_143",
//     database: "sql_login",
//     port: 3306
// });
// db.connect((err)=> {
//     if (err) throw err;
//     console.log("Connection created...!!");
//     if (err) {
//                 console.log(err);
//             } else {
//                 console.log("MYSQL CONNECTED")
//             }
        
// });
module.exports.db = db;

app.use("/", require("./routes/pages"));
app.use("/api", require("./controllers/auth")); 
app.listen(PORT);