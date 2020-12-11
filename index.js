const express = require('express');
const mongoose = require('mongoose');
const User = require('./modle/User');
const cors = require('cors');
const multer  = require('multer')
const upload = multer({ dest: 'static/' });

const app = express()
const Port = 3012

mongoose.connect('mongodb://localhost:27017/books-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine','ejs');
app.set('views','./views');

app.use(cors())



app.use('/static',express.static('./static'));

app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/upload',(req,res)=>{
  res.render('uploading')
});


app.post('/upload', upload.single('profile'),async(req, res)=>{
  console.log(req.file);
  let newFile ;
    const {file} = req;
  newFile = await User.create({
    fieldname : file.fieldname,
    originalname:file.originalname ,
    mimetype : file.mimetype ,
    path : file.path ,
    size : file.size,
    
  })
  res.send('uploading success')
});

app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`);

})