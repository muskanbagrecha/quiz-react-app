import { createContext, useContext, useState } from "react";

const INITIAL_DATA = {
  currentQuiz: null,
  attemptedQuizQuestions: [],
  quizScore: 0,
};

const QuizContext = createContext(INITIAL_DATA);

export const QuizProvider = ({ children }) => {
  const [currentQuizState, setCurrentQuizState] = useState({
    currentQuiz: localStorage.getItem("quiz") || null,
    attemptedQuizQuestions: [],
    quizScore: 0,
  });

  const attemptQuizHandler = (quiz) => {
    setCurrentQuizState({
      currentQuiz: quiz,
      attemptedQuizQuestions: [],
      quizScore: 0,
    });
    localStorage.setItem("currentQuiz", quiz._id);
  };

  const attemptQuestionHandler = (selectedOption, correctAnswer) => {
    setCurrentQuizState((prev) => ({
      ...prev,
      attemptedQuizQuestions: [...prev.attemptedQuizQuestions, selectedOption],
    }));
    if (selectedOption === correctAnswer) {
      setCurrentQuizState((prev) => ({
        ...prev,
        quizScore: prev.quizScore + 20,
      }));
    } else {
      setCurrentQuizState((prev) => ({
        ...prev,
        quizScore: prev.quizScore - 5,
      }));
    }
  };

  const endQuizHandler = () => {
    setCurrentQuizState(INITIAL_DATA);
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuizState,
        attemptQuizHandler,
        attemptQuestionHandler,
        setCurrentQuizState,
        endQuizHandler,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
