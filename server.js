console.log("welcome node.js!!");

const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log("サーバーが起動しました。"));


app.get("/", (req, res) => {
  console.log("hello exspress.")

  // res.send("こんちは")
  // res.sendStatus(500) // HTTP STTAUS CODE
  // res.status(500).send("エラーやわ")

  res.status(500).json({ msg: "エラーだっちゃ"});
 
})