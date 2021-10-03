const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

connection.connect(function (err){
    if (err) {
        throw err;
    }

    console.log("terkoneksi dengan sukses");
    connection.query("CREATE DATABASE ecommerce", function (err, result) {
        if (err) {
            throw err;
        }

        console.log("database telah dibuat");
        connection.destroy();
    });
});