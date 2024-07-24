const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: {
      message: "Success fetching the API from Express UPDATED!!!!",
      code: 200,
    },
    data: null,
  });
});

module.exports = app;
