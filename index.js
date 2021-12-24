const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const mongoURL = ''
const mongoose = require('mongoose')
const config = require('./config/key')
const { User } = require('./models/user');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(config.mongoURL, {
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

app.post('/login', (req, res) => {

    // 요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
    })
    // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 일치하는지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {

    })
    // 비밀번호가 일치한다면 Token 생성
})


app.listen(port, () => console.log(`Example app listening on port ${port}`));
