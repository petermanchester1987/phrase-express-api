const express = require("express");
const quotesRouter = express();
const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

quotesRouter.get("/", (req, res) => {
  if (!req.query.person) {
    res.send({ quotes: quotes });
  } else {
    const quotePerson = req.query.person;
    const matchingInArray = quotes.filter(
      (singleQuote) => singleQuote.person === quotePerson
    );
    res.send({ quotes: matchingInArray });
  }
});

quotesRouter.post("/", (req, res) => {
  if (!req.query.quote && req.query.person) {
    res.status(400).send("Please Include a Quote and a Person");
  } else {
    const newAddition = req.query;
    quotes.push(newAddition);
    res.send({ quote: newAddition });
  }
});

module.exports = quotesRouter;
