const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const koneksi = require('./config/database');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/kriteria',(req,res)=> {
    const querySql = 'SELECT * FROM kriteria';
    console.log('Udah diambil bang')

koneksi.query(querySql, (err, rows, field)=> {
    if(err){
        return res.status(500).json({message:' Ada yang salah', error:err});
    }
    res.status(200).json({success: true, data:rows});
});
});

app.post('/kriteria',(req,res)=> {
    const data = {...req.body};
    const querySql = "INSERT INTO kriteria SET ?";

    koneksi.query(querySql, data, (err, rows, field)=> {
        if(err){
            return res.status(500).json({message:' Ada yang salah dalam input', error:err});
        }
        res.status(201).json({success: true, message:'Insert data berhasil'});
    });
});

app.listen(port,()=> {
    console.log('Server is running at http://localhost:${port}');
});

