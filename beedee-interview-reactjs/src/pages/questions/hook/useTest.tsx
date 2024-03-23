import { useCallback, useState } from "react";
import { Question, useQuestion } from "./useQuestion";

export type UseTestProps = {
  current?: number;
  setCurrent?: (current: number) => void;
  score?: number;
  onSaveScore?: (val: number) => void;
  question?: Question[];
  setQuestion?: (val: Question[]) => void;
  answer?: string[];
  setAnswer?: (val: string[]) => void;
  onStartTest?: () => void;
  onAnswer?: (val: string, index: number) => void;
  currentUser?: string;
  getRanking?: () => Score[];
};

export type Score = {
  username: string;
  score: number;
};

export const useTest = (username: string): UseTestProps => {
  const { randomQuestions } = useQuestion();
  const [score, setScore] = useState(0 as number);
  const [current, setCurrent] = useState(0);
  const [question, setQuestion] = useState([] as Question[]);
  const [answer, setAnswer] = useState([] as string[]);

  const onStartTest = useCallback(() => {
    setAnswer([]);
    setCurrent(0);
    setScore(0);
    const question = randomQuestions();
    setQuestion([...question]);
  }, [randomQuestions]);

  const onAnswer = useCallback(
    (value: string, index: number) => {
      answer[index] = value;
      setAnswer([...answer]);
    },
    [answer]
  );

  const saveScores = (username: string, score: number) => {
    // Step 1: Retrieve existing data from localStorage
    const existingDataString = localStorage.getItem("scores");
    let scores = [];
    if (existingDataString) {
      scores = JSON.parse(existingDataString);
    }

    // Step 2: Modify the data (add new data or update existing data)
    const newData = { username, score }; // New data to add or update

    // Find if the user already exists in the scores array
    const existingUserIndex = scores.findIndex(
      (entry: Score) => entry.username === newData.username
    );

    if (existingUserIndex !== -1) {
      // User already exists, update their score
      scores[existingUserIndex].score = newData.score;
    } else {
      // User doesn't exist, add them to the scores array
      scores.push(newData);
    }

    // Step 3: Save the modified data back to localStorage
    localStorage.setItem("scores", JSON.stringify(scores));
  };

  const getRanking = () => {
    const scoresString = localStorage.getItem("scores");
    let scores = [];
    if (scoresString) {
      scores = JSON.parse(scoresString);
    }
    return scores.sort((a: Score, b: Score) => {
      return b.score - a.score; // Sort in descending order (highest to lowest)
    });
  };

  const onSaveScore = useCallback(
    (score: number) => {
      setScore(score);
      saveScores(username, score);
    },
    [username]
  );

  return {
    score,
    onSaveScore,
    current,
    setCurrent,
    question,
    setQuestion,
    answer,
    setAnswer,
    onStartTest,
    onAnswer,

    currentUser: username,

    getRanking,
  };
};
