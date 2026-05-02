import cors from "cors";
import express from "express";
import { prisma } from "./lib/prisma.ts";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/problem", async (req, res) => {
  const problems = await prisma.problem.findMany();
  res.json(problems);
});

app.get("/problem/:problemId", async (req, res) => {
  const problemId = Number(req.params.problemId);

  const problem = await prisma.problem.findFirst({
    where: {
      id: problemId,
    },
  });
  res.json(problem);
});

app.post("/problem", async (req, res) => {
  try {
    const { title, question, answer } = req.body;

    const problem = await prisma.problem.create({
      data: {
        title,
        question,
        answer,
      },
    });
    console.log(problem);
    res.status(201).json({ message: "created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "error" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
