const express = require("express");
const cors = require("cors");
const peer = require("peer");

const app = express();
app.use(cors());

const server = app.listen(5000, () => {
    console.log("✅ Backend running on http://localhost:5000");
})

const peerServer = peer.ExpressPeerServer(server, {
    debug: true,
    path: "/myapp"
})

app.use("/peerjs", peerServer);
app.get("/", (req, res) => {
  res.send("MeetMind Backend Running 🚀");
});