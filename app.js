const express = require('express');

const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.get('/', (req,res) =>{
    res.send('Chào mừng bạn đến ứng dụng web động!');
});

app.post('/submit', (req,res) =>{
    const {name} = req.body;

    if (name) {
        res.json({message: 'Chào mừng ${name}!' });
    }else {
        res.status(400).json({message:'Vui lòng cung cấp tên của bạn'});
       } 
    }
);

app.listen(port, () => {
    console.log('Ứng dụng đang chạy tại http://localhost;${port}');
});