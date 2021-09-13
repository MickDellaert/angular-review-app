const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./dist/angular-review-app-heroku'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-review-app/heroku'}),
);

const PORT = 8080;

let allReviews = [{fname: 'Mary', lname: 'Anne', email: 'mary.anne@becode.org', image: 'https://images-ext-1.discordapp.net/external/097jABsyfkJ4O4VQ5UQ58lMVw2IEd9y92QembJxtbAE/%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%253D%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80/https/images.unsplash.com/photo-1438761681033-6461ffad8d80?width=995&height=663', title: "Best place", starRating: 5, textarea: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n', CurrentTime: '16/7/2021, 16:24:3'}];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});


// Below you can define how your API handles a get or a post request.
// Try sending a get request to the root, you should get a "Hello from server" back.

app.get('/', function (request, response) {
    response.send('Hello from server');
});

app.get('/allReviews', function (request, response) {
    response.send(allReviews);
});

app.post('/', function (request, response) {
    response.status(200).send({"message": "Data received"});
});

app.post('/allReviews', function (request, response) {
    allReviews.push(request.body);
    response.status(200).send({"message" : "Data Received"});
});


app.listen( PORT, function () {});
