const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const corsOptions = { origin: "https://inoteweb.onrender.com/login" };
app.use(express.json());
app.use(cors());
app.use("/api/auth", require("./Routes/auth"));
app.use("/api/notes", require("./Routes/notes"));
app.use("/api/notes", require("./Routes/notes"));
connectToMongo();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
