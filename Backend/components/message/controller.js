const store = require('./store')
const {dev_host} = require('../../config')


function addMessage (chat, user, message, file){
    return new Promise((resolve, reject)=>{
        if (!user || !message)return reject('Incorect data in add')
        const file_url = file?`${dev_host}/app/files/${file.filename}`:''
        const full_message = {
            user,
            message,
            date: new Date(),
            chat,
            file: file_url
        }
        store.add(full_message)
        return resolve(full_message)
    })
}

function getMessages(filters){
    return new Promise((resolve, reject)=>{
        return resolve(store.list(filters))
    })
}

function updateMessage(id, text){
    return new Promise(async(resolve, reject)=>{
        if(!id || !text){
            return reject('Parámetros inválidos')
        }
        return store.update(id,text)
            .then(resp => resolve(resp))
            .catch(err => reject(err))
    })
}

function deleteMessage (id){
    return new Promise((resolve, reject)=>{
        if(!id){
            return reject('No se encuentra id')
        }
        return store.remove(id)
            .then(resp => resolve(resp))
            .catch(err => reject(err))
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}