const express = require('express');
const app = express();
const port = 5000;
const mongoURL = 'mongodb+srv://limhoooo:dlagh12@template.fszzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require('mongoose')
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello World'));
app.listen(port, () => console.log(`Example app listening on port ${port}`));
