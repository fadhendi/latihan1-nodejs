const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce"
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }

    console.log('terkoneksi dengan sukses');

    const sql1 = 'CREATE TABLE product(id_product INT AUTO_INCREMENT PRIMARY KEY, nama_produk VARCHAR(60), gambar_produk VARCHAR(200), harga_product INT (13), des_product TEXT, createdate DATE)';
    connection.query(sql1, function(err, result){
        if (err) {
            throw err;
        }

        console.log('table berhasil dibuat');
        connection.destroy();
       });

    // const ins1 = "INSERT INTO module(nama_produk, gambar-produk, harga-produk, des-product, createdate) VALUES('sepatu sneaker', 'sneaker.jpg', 200000, 'kami menjual sepatu berkualitas semua ukuran', 2020-01-17)";

    // connection.query(ins1, function(err, result) {
    //     if(err) {
    //         throw err;
    //     }

    //     console.log('1 record berhasil di-insert');
    //     connection.destroy();
    // });
});
    