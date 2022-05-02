import { Card } from "../../../../components";
import { useQuiz } from "../../../../hooks/";
import "./QuizCard.css";
export const QuizCard = ({
  questionData,
  selectedOption,
  setSelectedOption,
}) => {
  const { _id, question, options, answer } = questionData.question;
  const { attemptQuestionHandler } = useQuiz();

  return (
    <div className="flex-col-center">
      <Card className="card-vertical card-quiz-mcq">
        <h4>{question}</h4>
        <ul className="quiz__options no-list-style">
          {options.map((option, index) => (
            <li
              key={index}
              className={
                `alert alert-secondary` +
                (selectedOption === index + 1 ? " alert-selected" : "")
              }
              onClick={() => setSelectedOption(index + 1)}
            >
              {option}
            </li>
          ))}
        </ul>
      </Card>
      {selectedOption && (
        <button
          className="btn btn-primary margin-center"
          onClick={() => {
            attemptQuestionHandler(selectedOption, answer);
            setSelectedOption(null);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};
