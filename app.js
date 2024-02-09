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

//interview links

app.get('/interviews/daniel_interview.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'daniel_interview.html'))
});

app.get('/interviews/laura_interview.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'laura_interview.html'))
});

app.get('/interviews/morrie_interview.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'morrie_interview.html'))
});

app.get('/interviews/sandra_interview.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'sandra_interview.html'))
});

//persona links

app.get('/personas/daniel_persona.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'daniel_persona.html'))
});

app.get('/personas/morrie_persona.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'morrie_persona.html'))
});

app.get('/personas/sandra_persona.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'sandra_persona.html'))
});

app.get('/personas/personas_laura.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'personas_laura.html'))
});

//scenario links

app.get('/scenarios/daniel_scenario_1.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'daniel_scenario_1.html'))
});

app.get('/scenarios/daniel_scenario_2.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'daniel_scenario_2.html'))
});

app.get('/scenarios/daniel_scenario_3.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'daniel_scenario_3.html'))
});

app.get('/scenarios/daniel_scenario_4.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'daniel_scenario_4.html'))
});

app.get('/scenarios/laura_scenario_1.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'laura_scenario_1.html'))
});

app.get('/scenarios/laura_scenario_2.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'laura_scenario_2.html'))
});

app.get('/scenarios/laura_scenario_3.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'laura_scenario_3.html'))
});

app.get('/scenarios/morrie_scenario_1.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'morrie_scenario_1.html'))
});

app.get('/scenarios/morrie_scenario_2.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'morrie_scenario_2.html'))
});

app.get('/scenarios/morrie_scenario_3.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'morrie_scenario_3.html'))
});

app.get('/scenarios/sandra_scenario_1.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'sandra_scenario_1.html'))
});

app.get('/scenarios/sandra_scenario_2.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'sandra_scenario_2.html'))
});

app.get('/scenarios/sandra_scenario_3.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'sandra_scenario_3.html'))
});

//user story links

app.get('/user_stories/daniel_user_stories_scenario1.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'daniel_user_stories_scenario1.html'))
});

app.get('/user_stories/daniel_user_stories_scenario2.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'daniel_user_stories_scenario2.html'))
});

app.get('/user_stories/daniel_user_stories_scenario3.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'daniel_user_stories_scenario3.html'))
});

app.get('/user_stories/daniel_user_stories_scenario4.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'daniel_user_stories_scenario4.html'))
});

app.get('/user_stories/laura_user_stories_scenario1.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'laura_user_stories_scenario1.html'))
});

app.get('/user_stories/laura_user_stories_scenario2.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'laura_user_stories_scenario2.html'))
});

app.get('/user_stories/laura_user_stories_scenario3.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'laura_user_stories_scenario3.html'))
});

app.get('/user_stories/morrie_user_stories_scenario1.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'morrie_user_stories_scenario1.html'))
});

app.get('/user_stories/morrie_user_stories_scenario2.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'morrie_user_stories_scenario2.html'))
});

app.get('/user_stories/morrie_user_stories_scenario3.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'morrie_user_stories_scenario3.html'))
});

app.get('/user_stories/sandra_user_stories_scenario1.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'sandra_user_stories_scenario1.html'))
});

app.get('/user_stories/sandra_user_stories_scenario2.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'sandra_user_stories_scenario2.html'))
});

app.get('/user_stories/sandra_user_stories_scenario3.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'sandra_user_stories_scenario3.html'))
});

//architectural design links

app.get('/architectural_design/architectural_design_1.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'architectural_design_1.html'))
});

app.get('/architectural_design/architectural_design_2.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'architectural_design_2.html'))
});

//feature links

app.get('/features/feature_1.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'feature_1.html'))
});

app.get('/features/feature_2.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'feature_2.html'))
});

app.get('/features/feature_3.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'feature_3.html'))
});

//image links

app.get('/img/brianpic.jpg', (req,res) => {
    res.sendFile(path.join(__dirname, 'brianpic.jpg'))
});

app.get('/img/alyssapic.jpeg', (req,res) => {
    res.sendFile(path.join(__dirname, 'alyssapic.jpeg'))
});

app.get('/img/daniel_stockpic.jpg', (req,res) => {
    res.sendFile(path.join(__dirname, 'daniel_stockpic.jpeg'))
});

app.get('/img/kendallpic.jpg', (req,res) => {
    res.sendFile(path.join(__dirname, 'kendallpic.jpg'))
});

app.get('/img/kidrunning.jpg', (req,res) => {
    res.sendFile(path.join(__dirname, 'kidrunning.jpg'))
});

app.get('/img/lawrencepic.png', (req,res) => {
    res.sendFile(path.join(__dirname, 'lawrencepic.png'))
});

app.get('/img/laura_stockpic.jpg', (req,res) => {
    res.sendFile(path.join(__dirname, 'laura_stockpic.jpeg'))
});

app.get('/img/morrie_picture.jpeg', (req,res) => {
    res.sendFile(path.join(__dirname, 'morrie_picture.jpeg'))
});

app.get('/img/sandra_stockpic.jpeg', (req,res) => {
    res.sendFile(path.join(__dirname, 'sandra_stockpic.jpeg'))
});

app.get('/overbookbackground.jpg', (req,res) => {
    res.sendFile(path.join(__dirname, 'overbookbackground.jpg'))
});

app.get('/overbookbackground2.jpg', (req,res) => {
    res.sendFile(path.join(__dirname, 'overbookbackground2.jpg'))
});


app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});



app.use('/public', express.static(path.join(__dirname, "../public")));

