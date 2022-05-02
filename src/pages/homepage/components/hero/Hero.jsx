import { useNavigate } from "react-router-dom";
import "./Hero.css";
export const Hero = () => {
  const defaultCategory = "All";
  const navigate = useNavigate();
  return (
    <section className="hero row-container">
      <div className="hero__heading">
        <h1 className="large-title">Quiz App</h1>
      </div>
      <button
        className="btn btn-black-no-br"
        onClick={() => {
          navigate(`/quizzes/${defaultCategory}`);
        }}
      >
        Explore
      </button>
    </section>
  );
};
