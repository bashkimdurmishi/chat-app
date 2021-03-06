const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const router = require("./router");
const cors = require("cors");

const { addUser, removeUser, getUser, getUserInRoom } = require("./users");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    socket.emit("message", {
      user: "admin",
      text: `${user.name} welcome to room ${user.room}`,
    });

    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} has joined the chat`,
    });

    socket.join(user.room);
  });

  socket.on("send-message", (message) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    io.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} has disconnected`,
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
