const express = require('express');
const path = require('path');
const app = express();

const PORT=8080; 

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/design_artifacts.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'design_artifacts.html'))
});

app.get('/searchPage.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'searchPage.html'))
});

app.get('/genreRecommendation.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'genreRecommendation.html'))
});


app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});

