const store = require('./store')

function addChat(chatsData={name:'', description:'', date:''}, mainUser=''){
    const {name, description, date} = chatsData
    // if(!users || !Array.isArray(users)) return Promise.reject('Invalid users, these required');
    if(!name || !description) return Promise.reject('Name and description are required');
    if(name.length ===0 || description.length ===0) return Promise.reject("Name and description are required");
    const chat ={name, description, date}
    return store.add(chat, mainUser)
}

function getChats(userId){
    return store.list(userId)
}

module.exports = {
    addChat,
    getChats
}