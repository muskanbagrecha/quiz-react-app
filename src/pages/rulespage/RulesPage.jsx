import { useNavigate } from "react-router-dom";
import { Card } from "../../components/";
import "./RulesPage.css";

export const RulesPage = () => {
  const rules = [
    "You will have to answer 5 questions",
    "You will have to select one amongst 4 options",
    "You will have a total of 25 seconds to answer the entire quiz.",
    "Your answer will be registered only when you click on the next button.",
    "You will receive 20 points for the correct answer.",
    "You will receive -5 points for incorrect answer.",
    "If the timer expires, there is no negative penalization.",
  ];
  const navigate = useNavigate();

  return (
    <main className="sub-container">
      <h1 className="styled-title">Rules to Follow</h1>
      <div className="flex-center">
        <Card className="card card-vertical card-rules">
          <div className="card__content">
            <ol>
              {rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ol>
          </div>
          <div className="card__CTA">
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate(`/quiz`);
              }}
            >
              Let's go!
            </button>
          </div>
        </Card>
      </div>
    </main>
  );
};
