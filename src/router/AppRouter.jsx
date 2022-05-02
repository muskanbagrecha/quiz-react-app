import { Route, Routes } from "react-router-dom";
import {
  Homepage,
  RulesPage,
  PageNotFound,
  QuizListingPage,
  RequiresAuth,
  LoginPage,
  SignupPage,
  SingleQuizPage,
  ResultPage
} from "../pages";
import { useAuth } from "../hooks";
import MockmanEs from "mockman-js";

export const AppRouter = () => {
  const {
    authState: { isAuthenticated },
  } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/quizzes/:categoryName" element={<QuizListingPage />} />
      <Route
        path="/rules"
        element={
          <RequiresAuth>
            <RulesPage />
          </RequiresAuth>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/quiz"
        element={
          <RequiresAuth>
            <SingleQuizPage />
          </RequiresAuth>
        }
      />
      <Route
        path="/quiz/:quizId/result"
        element={
          <RequiresAuth>
            <ResultPage />
          </RequiresAuth>
        }
      />
      <Route path="/mockapi" element={<MockmanEs />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
