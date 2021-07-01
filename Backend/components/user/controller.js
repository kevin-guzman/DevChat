const store = require('./store')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {cryptPass, dev_host} = require('../../config')


function getUsers(){
    return store.list()
}

function singIn(name, password){
    return new Promise((resolve, reject)=>{
        store.getUser(name)
        .then(resp => {
            const {_id, password:realPassword, token} = resp
            bcrypt.compare(password, realPassword, (err, result)=>{
                if (!result) {return reject('Crendenciales incorrectas')}
                resolve(getUserInfo(_id))
            })
        })
        .catch(x =>  reject('Credenciales incorrectas'))
    })
}

function singUp(name, password, password2, email, photo){
    return new Promise((resolve, reject)=>{
        const photo_url = photo?`${dev_host}/app/files/${photo.filename}`:''
        if(!name, !password, !password2, !email) reject('Todos los campos son obligatorios')
        store.getUser(name)
        .then(x => {
            if(x) return resolve({data:'¡Este nombre de usuario ya existe!', status:206})
            if(password !== password2) reject('Las contraseñas no coinciden')
            const _newPassword = bcrypt.hashSync(password, 8)
            store.add({name, password:_newPassword , email, photo: photo_url})
            .then(resp =>{
                const token = jwt.sign({id:resp._id, scopes:'customer:read'}, cryptPass)
                store.updateToken(resp._id, token)
                .then(response => resolve({data:response, status:201}))
                .catch(err => reject('Error interno'))
            })
            .catch(err => reject('Error al crear usuario'))
        })
        .catch(x => reject('Error interno'))
    })
}

function getUserInfo(id){
    return new Promise((resolve, reject)=>{
        store.getUserById(id)
        .then(resp => {
            resolve(resp)
        })
        .catch(err => reject('Id de usuario no encontrado'))
    })
}

function getUsersToChat(name){
    return new Promise((resolve, reject)=>{
        store.getUsersByName(name)
        .then(resp => resolve(resp))
        .catch(err => reject(err))
    })
}

module.exports = {
    getUsers,
    singUp,
    singIn,
    getUserInfo,
    getUsersToChat
}