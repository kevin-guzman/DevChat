const mongoose = require('mongoose')
const Schema = mongoose.Schema

const _Schema = new Schema({
    // users:[{type:Schema.ObjectId, ref:'User'
    // }],
    // image:{
    //     type:String,
    //     required:false
    // },
    description:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    mainUser:{
        type:Schema.ObjectId, 
        ref:'User',
        required:true
    },
    date:Date
})

const model = mongoose.model('Chat', _Schema)
module.exports = model