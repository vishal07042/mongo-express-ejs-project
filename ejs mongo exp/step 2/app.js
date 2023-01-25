const express = require('express')
const path = require('path')
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/testmongo',{useNewUrlParser:true,useUnifiedTopology: true});
const app = express()
const port = 3000
var public = path.join(__dirname, 'public');

 
mongoose.set('strictQuery', true);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, 'views'));



const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});


const User = mongoose.model('User', userSchema);













app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('view engine','ejs');

app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});
app.get('/pa', function(req, res) {
    // res.sendFile(path.join(public, 'index.html'));
    res.render('index2')
});


app.get('/sucess',(req,res)=>{
res.render('sucess')
})
app.get('/failure',(req,res)=>{
res.render('failure')
})

app.get('/views/signup.ejs', function(req, res) { res.render('signup') });






app.post('/views/signup.ejs', (req, res) => {
    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password
    });
    user.save((err) => {
        if (err) {
            console.log(err);
            res.send(err);
            res.redirect('/failure');
        } else {
            res.redirect('/sucess');
        }
    });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})