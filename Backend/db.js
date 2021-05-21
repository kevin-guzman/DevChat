const db = require('mongoose')
const config = require('./config')
const {db_connection} = config

db.set('useFindAndModify', false);
db.Promise = global.Promise
async function connect(url){
    await db.connect(url,{
        useNewUrlParser:true,
        dbName:'Devchat',
        useUnifiedTopology:true,
        useFindAndModify:false
        })
    console.log('[DB conectada]');
}

module.exports = connect