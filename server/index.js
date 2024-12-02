const express = require("express");
const app = express();
const http = require("http");
const {Server} = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: "http://localhost:5173",
        method: ["GET","POST"],
    },
});

io.on("connection", (socket) => {
    console.log("A user connected with id: ",socket.id);

    socket.on("close", () => {
        console.log("A user disconnected with ID: ", socket.id);
    });
});

app.get("/bishan", (req, res) => {
    console.log("Hello World!");
    res.send("Hello World! It's me Bishan");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});