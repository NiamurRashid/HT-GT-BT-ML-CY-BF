const express = require("express");
const app = express();
const port = 4000;

const HT = [];
const GT = [];
const BT = [];
const ML = [];
const CY = [];
const BF = [];
// console.log(HT.shift());
// console.log(HT.shift());
// console.log(HT.shift());
// console.log(HT.shift());
// HT.push(5);
// console.log(HT.shift());

// console.log(HT.length);

app.get("/:country", (req, res) => {
  if (req.params.country == "HT" && HT.length > 0) {
    res.send(`${HT.shift()}`);
  }

  if (req.params.country == "GT" && GT.length > 0) {
    res.send(`${GT.shift()}`);
  }

  if (req.params.country == "BT" && BT.length > 0) {
    res.send(`${BT.shift()}`);
  }

  if (req.params.country == "ML" && ML.length > 0) {
    res.send(`${ML.shift()}`);
  }

  if (req.params.country == "CY" && CY.length > 0) {
    res.send(`${CY.shift()}`);
  }

  if (req.params.country == "BF" && BF.length > 0) {
    res.send(`${BF.shift()}`);
  } else {
    res.send("wait");
  }
});

app.get("/:country/:number", (req, res) => {
  if (req.params.country == "HT") {
    HT.push(req.params.number);
    res.send(`${req.params.number}--added to HT`);
  }

  if (req.params.country == "GT") {
    GT.push(req.params.number);
    res.send(`${req.params.number}--added to GT`);
  }

  if (req.params.country == "BT") {
    BT.push(req.params.number);
    res.send(`${req.params.number}--added to BT`);
  }

  if (req.params.country == "ML") {
    ML.push(req.params.number);
    res.send(`${req.params.number}--added to ML`);
  }

  if (req.params.country == "CY") {
    CY.push(req.params.number);
    res.send(`${req.params.number}--added to CY`);
  }

  if (req.params.country == "BF") {
    BF.push(req.params.number);
    res.send(`${req.params.number}--added to BF`);
  } else {
    res.send("Network error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
