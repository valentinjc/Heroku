const express = require('express');
const app = express();

const hbs = require('hbs');

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs')

//Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Carlos',

    });
});
app.get('/about', function(req, res) {

    res.render('about', {

    });
});

app.listen(port)