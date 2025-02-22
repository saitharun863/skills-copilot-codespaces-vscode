// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', (req, res) => {
    const comments = fs.readFileSync('./comments.json', 'utf-8');
    res.json(JSON.parse(comments));
});

app.post('/comments', (req, res) => {
    const comments = fs.readFileSync('./comments.json', 'utf-8');
    const commentsArray = JSON.parse(comments);
    const newComment = {
        id: commentsArray.length + 1,