const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const mongoURL = 'mongodb+srv://limhoooo:dlagh12@template.fszzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require('mongoose')
const { User } = require('./models/user');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send('hello World'));

app.post('/register', (req, res) => {
    // 회원가입 할때 필요한 정보들을 client 에서 가져오면
    // 그것들을 데이터베이스에 넣어 준다.
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})



app.listen(port, () => console.log(`Example app listening on port ${port}`));
