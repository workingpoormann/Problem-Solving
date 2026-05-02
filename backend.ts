import cors from "cors";
import express from "express";
import { prisma } from "./lib/prisma.ts";

const app = express();
app.use(cors());

app.get("/problem", async (req, res) => {
  const problems = await prisma.problem.findMany();
  res.json(problems);
});

app.get("/problem/:problemId", async (req, res) => {
  let problemId = Number(req.params.problemId);

  const problem = await prisma.problem.findFirst({
    where: {
      id: problemId,
    },
  });
  res.json(problem);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
