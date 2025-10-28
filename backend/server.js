import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import connectToSocket from "./src/controllers/SocketManager.js ";
import userRoutes from "./src/routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.json({ limit: "40kb", extended: "true" }));
app.use("/api/v1/users", userRoutes);
app.get("/home", (req, res) => {
  return res.json({ hello: "World" });
});

const start = async () => {
  app.get("mongo_user");
  const connectDB = await mongoose.connect(
    "mongodb+srv://pranavkharote2005:yIu2UqnJOVU8qzJO@cluster0.bnd1w.mongodb.net/MeetMind?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log(`Mongo DB host ${connectDB.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("SERVER IS ACTIVE ON 8000");
  });
};
start();
