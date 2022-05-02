import { useQuiz, useToast } from "../../hooks/";
import { useNavigate } from "react-router-dom";
import { Check, Cross } from "../../assets/icons/Icons";
import { useEffect } from "react";
import "./ResultPage.css";
export const ResultPage = () => {
  const navigate = useNavigate();
  const {
    currentQuizState: { attemptedQuizQuestions, quizScore, currentQuiz },
    endQuizHandler,
  } = useQuiz();

  const { addWarningToast } = useToast();

  useEffect(() => {
    if (currentQuiz) {
      console.log(currentQuiz);
      console.log(attemptedQuizQuestions);
    } else {
      navigate("/quizzes/All");
      addWarningToast("Please attempt quiz again!");
    }
  }, []);

  return (
    <div className="sub-container">
      <div className="flex-col-center">
        <h1>Results</h1>
        {`Score: ${quizScore} / 100`}
        <button
          className="btn btn-primary flex-center"
          onClick={() => {
            endQuizHandler();
            navigate("/quizzes/All");
          }}
        >
          Finish Quiz
        </button>
        <div className="quiz__results">
          {currentQuiz?.mcqs?.map((question, index) => {
            return (
              <div className="bordered-container" key={index}>
                <h3>{question.question}</h3>
                <div className="alert alert-success alert-result">
                  {question.options[question.answer - 1]}
                  <span>
                    <Check />
                  </span>
                </div>
                {question.answer !== attemptedQuizQuestions[index] && (
                  <div className="alert alert-danger">
                    {question.options[attemptedQuizQuestions[index] - 1] ||
                      `Not answered`}
                    <span>
                      <Cross />
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
