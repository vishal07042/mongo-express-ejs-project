const express = require('express')
const path = require('path')
const app = express()
const port = 3000
var public = path.join(__dirname, 'public');

app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('view engine','ejs');

app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});
app.get('/pa', function(req, res) {
    // res.sendFile(path.join(public, 'index.html'));
    res.render('index2')
});
app.get('/signup', function(req, res) {
    // res.sendFile(path.join(public, 'index.html'));
    res.render('signup')
});
app.get('/signup.ejs', function(req, res) {
    // res.sendFile(path.join(public, 'index.html'));
    res.render('signup')
});
app.get('/views/signup.ejs', function(req, res) {
    // res.sendFile(path.join(public, 'index.html'));
    res.render('signup')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})