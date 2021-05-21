const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _Schema = new Schema({
    chat:{
        type: Schema.ObjectId,
        ref:'Chat'
    },
    user:{
        type: Schema.ObjectId,
        ref:'User',
        required: true
    },
    message:{
        type: String,
        required: true
    },
    date: Date,
    file:{
        type:String,
        required:false
    }
})

const model = mongoose.model('Message', _Schema)
module.exports = model