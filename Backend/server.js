const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./network/router");

const config = {
	port: process.env.PORT || 8080,
	ip: "192.168.0.11",
};

app.set("port", config.port);
app.use(bodyParser.json());
app.use(cors());

server.listen(app.get("port"), () => {
	console.log(`La app está en -> http://${config.ip}:${config.port}`);
});

app.get("/", (req, res) => {
	res.send("Perra hpta");
});
