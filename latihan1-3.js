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

    const ins1 = "INSERT INTO product(nama_produk, gambar_produk, harga_product, des_product, createdate) VALUES('sepatu sneaker', 'sneaker.jpg', 200000, 'kami menjual sepatu berkualitas semua ukuran', '2020-01-17'), ('sepatu pantofel', 'pantofel.jpg', 500000, 'kami menjual sepatu pantofel 2020', '2020-01-30'),('sepatu pantofel', 'pantofel.jpg', 500000, 'kami menjual sepatu pantofel 2020', '2020-01-30')";

    // const ins2 = "INSERT INTO product(nama_produk, gambar_produk, harga_product, des_product, createdate) VALUES('sepatu pantofel', 'pantofel.jpg', 500000, 'kami menjual sepatu pantofel 2020', '2020-01-30')";

    connection.query(ins1, function(err, result) {
        if(err) {
            throw err;
        }

        console.log(result.affectedRows + ' record berhasil di-insert');
        connection.destroy();
    });
});