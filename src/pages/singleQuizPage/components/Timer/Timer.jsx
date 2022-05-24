import { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../../hooks/";
import "./Timer.css";
export const Timer = ({ quizId }) => {
  const INITIAL_TIMER_VALUE = 25;
  const [currentTime, setCurrentTime] = useState(INITIAL_TIMER_VALUE);

  const navigate = useNavigate();
  const { addInfoToast, addWarningToast } = useToast();
  useEffect(() => {
    if (currentTime > 0) {
      var id = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (currentTime === 5) {
      addWarningToast("5 seconds remaining!");
    } else {
      addInfoToast("Timer has expired!");
      navigate(`/quiz/${quizId}/result`);
    }
    return () => clearInterval(id);
  }, [currentTime]);

  return (
    <div
      className="timer__pie"
      style={{
        "--fill-value": `${(currentTime / INITIAL_TIMER_VALUE) * 360}deg`,
      }}
    ></div>
  );
};
