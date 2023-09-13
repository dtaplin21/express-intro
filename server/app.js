const express = require("express");
const http = reuire("http")

const app = express()

const port = 5000;

const server = http.createServer(app)
 server.listen("port", () => {
    console.log(`Hello from ${port}`)
 })
