const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.use("/api/quotes/random", require("./random.js"));
app.use("/api/quotes", require("./quotes.js"));

app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
