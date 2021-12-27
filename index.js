const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const mongoURL = ''
const mongoose = require('mongoose')
const cookieParse = require('cookie-parser')
const config = require('./server/config/key')
const { auth } = require('./server/middleware/auth')
const { User } = require('./server/models/user');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParse());

mongoose.connect(config.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello World'));


app.post('/api/user/register', (req, res) => {
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

app.post('/api/user/login', (req, res) => {

    // 요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
        // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 일치하는지 확인
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) return res.json({ loginSuccess: false, message: '비밀번호가 틀렸습니다.' });

            // 비밀번호가 일치한다면 Token 생성
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);

                // token 을 쿠키에 저장한다.
                res.cookie("x_auth", user.token)
                    .status(200)
                    .json({ loginSuccess: true, userId: user._id })
            })

        })
    })
})



app.get('/api/user/auth', auth, (req, res) => {
    console.log('sss');
    // 여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication 이 True 라는 말
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
    })
})

app.get('/api/user/logout', auth, (req, res) => {
    User.findOneAndUpdate(
        {
            _id: req.user._id,
        },
        {
            token: "",
        },
        (err, user) => {
            if (err) return res.json({ success: false, err })
            return res.status(200).send({
                success: true
            })
        }
    )
})
app.get('/api/hello', (req, res) => {
    res.send("안녕하세요 ~")
})
app.listen(port, () => console.log(`Example app listening on port ${port}`));
