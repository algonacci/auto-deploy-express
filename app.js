const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: {
      message: "HELLO WORLD!",
      code: 200,
    },
    data: null,
  });
});

module.exports = app;
