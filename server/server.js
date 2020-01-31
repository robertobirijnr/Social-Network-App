const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect Database
connectDB();

//init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("app is runing ");
});

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));
app.use("/api/comment", require("./routes/comment"));
app.use("/api/profile", require("./routes/profile"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App runing on port ${port}`);
});
