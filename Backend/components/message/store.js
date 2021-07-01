const Model = require('./model')
const {socket}= require('../../socket')

function addMessage (message){
    const _Message = new Model(message)
    _Message.save()
    .then(response =>{
        getMessages({chat: message.chat})
        .then(data => socket.io.emit(`chat/${message.chat}`, data)) //'message'
        .catch(err => console.log('Error getting list', err))
    })
    .catch(err =>{
    })
}

function getMessages(filters={}){
    return new Promise((resolve, reject)=>{
        // let filter = filters?{user:filters}:{}
        // if (filters) filter = {user: filters}
        console.log('filters', filters);
        Model.find(filters, {__v:0})
            .populate({path:'user', select:'-__v -token -password'})
            .exec((error, populated)=>{
                if (error) reject(error)
                resolve(populated)
            })
    })
}

async function updateMessage(id,text){
    const db_message = await Model.findOne({_id:id})
    db_message.message = text
    return await db_message.save()
}

async function removeMessage(id){
    return await Model.deleteOne({_id:id})
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    remove: removeMessage
}