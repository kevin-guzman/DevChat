const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./network/router");
// const config = require('./config')
const {port, dev_host, db_connection} = require('./config')
const db = require('./db')



app.set('port', process.env.PORT || port);
db(db_connection);
app.use(bodyParser.json());
app.use(cors([{origin:'*', credentials:true}]));

server.listen(app.get("port"), () => {
	console.log(`La app está en ->${dev_host}`);
});

app.get("/", (req, res) => {
	res.send({res:"Perra hpta"});
});

router(app)

process.on('uncaughtException', (e)=>{console.log('error', e);})