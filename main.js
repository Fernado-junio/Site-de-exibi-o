const express = require('express')
const path = require('path');

const app = express();


app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.render('index')
})
app.get('')




const port = process.env.PORT || 80
app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}` );
});