const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// app.use(bodyParser.json());
const server = require("http").Server(app);
const cors = require("cors");
const router = require("./network/router");
// const config = require('./config')
const {port, dev_host, db_connection} = require('./config')
const db = require('./db')


// app.listen()
app.use(express.json())
// app.use(express.urlencoded({ extended: true,  }));
app.use(cors([{origin:'*', credentials:true}]));

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

// app.use(express.json({strict:true}));
app.set('port', process.env.PORT || port);
db(db_connection);

server.listen(port, () => {
	console.log(`La app está en ->${dev_host}`);
});

app.get("/", (req, res) => {
	res.send({res:"Perra hpta"});
});

router(app)

process.on('uncaughtException', (e)=>{
	console.log('error', e);
	if(/EADDRINUSE/.test(e.message.toString())){
		// console.log(process.pid);
		// process.kill(process.pid, 'SIGUSR2')
	}
})
process.once('SIGUSR2', function () {
  process.kill(process.pid, 'SIGUSR2');
});

// process.on('SIGINT', function () {
//   // this is only called on ctrl+c, not restart
//   process.kill(process.pid, 'SIGINT');
// });