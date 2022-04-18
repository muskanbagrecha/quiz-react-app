import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "../../components";
import { useFetch } from "../../hooks";
import spinner from "../../assets/spinner.svg";
import "./QuizListingPage.css";

export const QuizListingPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { data: quizData, loader, serverCall: fetchQuizzes } = useFetch();

  useEffect(() => {
    if (!quizData) {
      fetchQuizzes({
        url: `/api/quizzes`,
        method: "GET",
      });
    }
  }, [quizData]);

  return (
    <div className="sub-container">
      <h1 className="styled-title">Featured Quizzes</h1>
      <div className="row-container">
        {loader && <img src={spinner} alt="loading" />}
        {quizData &&
          quizData.quizzes
            .filter((quiz) => quiz.categoryName === categoryName)
            .map((quiz) => {
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
                    <div class="card__header">
                      <p>{quiz.title}</p>
                    </div>
                    <div className="card__CTA">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          navigate("/rules/" + quiz._id);
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
