import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = 3000;

try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}

app.get("/", (req: Request, res: Response) => {
  console.log("hello exspress.");

  // res.send("こんちは")
  // res.sendStatus(500) // HTTP STTAUS CODE
  // res.status(500).send("エラーやわ")

  res.status(500).json({ msg: "エラーだっちゃ" });
});
