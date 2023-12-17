const mysql = require('mysql')
const koneksi = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'cobadb',
    multipleStatements: true
});

    koneksi.connect((err) =>{
    if(err) throw err;
    console.log('Udah nyambung mas');
});
module.exports=koneksi;