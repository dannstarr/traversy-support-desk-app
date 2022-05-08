const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email address'],
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        // minlength: 7,
        validate(value) {
            if (!validator.isLength(value, { min: 6, max: undefined })) {
                throw new Error('Password is too short')
            }
            if (value === 'password') {
                throw new Error('Your password must not be "password"')
            }
        },

    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema)

