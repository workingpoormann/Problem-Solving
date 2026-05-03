import React from "react";
import type { ProblemType } from "../../types/problem";
import { getProblemById } from "../api/problemApi";

export const useProblem = (
  problemId: number,
): { problem: ProblemType; loading: boolean } => {
  const [problem, setProblem] = React.useState<ProblemType>({
    id: 0,
    title: "hoge",
    question: "what?",
    answer: "yes :D",
  });
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    getProblemById(problemId)
      .then(setProblem)
      .finally(() => setLoading(false));
  }, [problemId]);

  return { problem, loading };
};
