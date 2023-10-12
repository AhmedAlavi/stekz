require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


app.post("/login", (req, res) => {
  const USERNAME = "admin";
  const PASSWORD = "admin";

  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    const user = {
      id: 1,
      name: "Ahamed Alavi",
      username: "ahamedalavi",
    };
    const token = jwt.sign(user, process.env.JWT_KEY);
    res.json({
      token,
      user,
    });
  } else {
    res.status(403);
    res.json({
      message: "wrong login information",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});