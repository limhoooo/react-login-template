const mongoose = require('mongoose');

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

const User = mongoose.model('User', userSchema)

module.exports = { User }