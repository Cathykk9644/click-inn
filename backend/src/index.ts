import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "This is the test route!! Happy Coding" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
