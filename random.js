const express = require("express");
const randomRouter = express();
const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

randomRouter.get("/", (req, res) => {
  const randomElement = getRandomElement(quotes);
  res.send({ quote: randomElement });
});

module.exports = randomRouter;
