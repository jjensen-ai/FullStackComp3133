const mongoose = require('mongoose')

const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: {
        type: String,
        minLength: 4,
        required: [true, 'Please enter a name']
    },
    username: {
        type: String,
        required: [true, 'Please enter a username']
    },
    email: {
        type: String,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, 'Please enter a valid email'],
        required: [true, 'Please enter an email']
    },
    address: {
        street: {
            type: String,
            required: true
        },
        suite: {
            type: String,
            required: true
        },
        city: {
            type: String,
            match: [/^[a-zA-Z\s]*$/, 'Please use only letters'],
            required: true
        },
        zipcode: {
            type: String,
            match: [/^\d{5}(-\d{4})?$/, 'Please Enter a valid ZipCode'],
            required: true
        },
        geo: {
            lat: {
                type: String,
                required: true
            },
            lng: {
                type: String,
                required: true
            }
        }
    },
    phone: {
        type: String,
        match: [/^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/, 'Please enter a valid phone number'],
        required: true
    },
    website: {
        type: String,
        match: [/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/, 'Please enter a valid URL'],
        required: true
    },
    company: {
        name: {
            type: String,
            required: true
        },
        catchPhrase: {
            type: String, 
            required: true
        },
        bs: {
            type: String,
            required: true
        }
    }
})

const Users = mongoose.model('User', usersSchema)

module.exports = Users