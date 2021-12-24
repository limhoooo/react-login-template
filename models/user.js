const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// 스키마
// 데이터베이스의 컬럼 값을 지정해주는것

// 모델
// 스키마를 감싸는것

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        maxlength: 50,
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    },
})
// 비밀번호 암호화
userSchema.pre('save', function (next) {
    let user = this;
    console.log('ssss');
    if (user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                user.password = hash;
                next()
            })
        })
    } else {
        next();
    }
});


userSchema.methods.comparePassword = function (plainPassword, cb) {

    // plainPassword = 1234567

}

const User = mongoose.model('User', userSchema)

module.exports = { User }