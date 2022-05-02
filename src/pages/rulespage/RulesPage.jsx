import { Card } from "../../components/";
import "./RulesPage.css";

export const RulesPage = () => {
  const rules = [
    "You will have to answer 5 questions",
    "Each question will have 4 options",
    "You will have to select one option",
    "You will have only 15 seconds to answer each question.",
    "You will be given only one attempt to answer each question.",
  ];

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
            <button className="btn btn-primary">Let's go!</button>
          </div>
        </Card>
      </div>
    </main>
  );
};
