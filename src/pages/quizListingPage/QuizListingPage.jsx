import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "../../components";
import { useFetch, useQuiz } from "../../hooks";
import {
  getFilteredQuizListing,
  playQuizHandler,
} from "../../utils/quizListingUtils";
import spinner from "../../assets/spinner.svg";
import "./QuizListingPage.css";

export const QuizListingPage = () => {
  const { categoryName } = useParams();
  const { data: quizData, loader, serverCall: fetchQuizzes } = useFetch();
  const navigate = useNavigate();
  const { attemptQuizHandler } = useQuiz();

  useEffect(() => {
    if (!quizData) {
      fetchQuizzes({
        url: `/api/quizzes`,
        method: "GET",
      });
    }
  }, [quizData]);

  const filteredQuizzes = getFilteredQuizListing(
    quizData?.quizzes,
    categoryName
  );

  return (
    <div className="sub-container">
      <h1 className="styled-title">Quizzes - {categoryName}</h1>
      <div className="row-container">
        {loader && <img src={spinner} alt="loading" />}
        {filteredQuizzes.map((quiz) => {
          return (
            <Card className="card-vertical card-quiz" key={quiz._id}>
              <div className="card__img">
                <img
                  src={quiz.thumbnail}
                  alt={quiz.title}
                  className="img-responsive"
                />
              </div>
              <div className="card__content">
                <div className="card__header">
                  <p>{quiz.title}</p>
                </div>
                <div className="card__CTA">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      attemptQuizHandler(quiz);
                      navigate("/rules");
                    }}
                  >
                    Play Now
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
