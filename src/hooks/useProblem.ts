import React from "react";
import type { ProblemType } from "../../types/problem";
import { getProblemById, getProblems } from "../api/problemApi";

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

export const useProblems = (): {
  problems: ProblemType[];
  setProblems: React.Dispatch<React.SetStateAction<ProblemType[]>>;
  loading: boolean;
} => {
  const [problems, setProblems] = React.useState<ProblemType[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    getProblems()
      .then(setProblems)
      .finally(() => setLoading(false));
  }, []);

  return { problems, setProblems, loading };
};
