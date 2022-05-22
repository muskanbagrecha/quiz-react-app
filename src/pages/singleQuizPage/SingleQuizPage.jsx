import { useEffect, useState } from "react";
import { useFetch, useAuth, useQuiz, useToast } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { QuizCard, Timer } from "./components";
import "./SingleQuizPage.css";
import spinner from "../../assets/spinner.svg";

const RULES_LENGTH = 5;

export const SingleQuizPage = () => {
  const { encodedToken } = useAuth();
  const {
    currentQuizState: { currentQuiz, attemptedQuizQuestions },
  } = useQuiz();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const { addWarningToast } = useToast();
  const {
    data: allQuizQuestionsResponse,
    loading: quizLoading,
    serverCall: getAllQuizQuestions,
  } = useFetch();

  const { data: currentQuestionResponse, serverCall: getCurrentQuestion } =
    useFetch();

  useEffect(() => {
    if (!allQuizQuestionsResponse) {
      getAllQuizQuestions({
        url: `/api/quizzes/${currentQuiz?._id}`,
        method: "GET",
        headers: {
          authorization: encodedToken,
        },
      });
    }
  }, [allQuizQuestionsResponse]);

  useEffect(() => {
    if (
      allQuizQuestionsResponse &&
      attemptedQuizQuestions.length !== RULES_LENGTH
    ) {
      const currQuestionId =
        allQuizQuestionsResponse?.quiz?.mcqs[attemptedQuizQuestions.length]._id;
      if (!currQuestionId) {
        addWarningToast("Please restart the quiz!");
        navigate("/quizzes/All");
      } else {
        getCurrentQuestion({
          url: `/api/quizzes/${currentQuiz._id}/${currQuestionId}`,
          method: "GET",
          headers: {
            authorization: encodedToken,
          },
        });
      }
    } else if (attemptedQuizQuestions.length === RULES_LENGTH) {
      navigate(`/quiz/${currentQuiz._id}/result`);
    }
  }, [allQuizQuestionsResponse, attemptedQuizQuestions.length]);

  return (
    <div className="sub-container">
      {quizLoading ? (
        <div className="flex-center">
          <img src={spinner} alt="loading..." />
        </div>
      ) : (
        <>
          <Timer quizId={currentQuiz} />
          <div className="question-number-label">{`Question: ${
            attemptedQuizQuestions.length + 1
          }/${RULES_LENGTH}`}</div>
          {currentQuestionResponse && (
            <QuizCard
              questionData={currentQuestionResponse}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          )}
        </>
      )}
    </div>
  );
};
