const Model = require('./model')

function addChat(users){
    const response = (already_exist=false, id) => {
        return{already_exist, id}
    }
    return new Promise((resolve, reject)=>{
        Model.findOne({users: users.users})
        .then(async(x)=> {
            if(!x){
                const _chat = new Model(users)
                const saved = await _chat.save()
                resolve(response(false, saved._id)); return; 
            }
            resolve(response(true, x._id))
        })
        .catch(x=> reject(x))
    })
}

function list(userId={}){
    return new Promise((resolve, reject)=>{
        let filter = userId?{users: {$in: userId}}:{} //$elemMatch
        Model.find(filter, {__v:0})
            .populate({path:'users', select:'-__v -token -password'})
            .exec((error, populated)=>{
                if (error) reject(error)
                resolve(populated)
            })
    })
}

module.exports ={
    add: addChat,
    list
}