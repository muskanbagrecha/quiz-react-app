import { Route, Routes } from "react-router-dom";
import { Homepage, RulesPage, PageNotFound, QuizListingPage } from "../pages";
import MockmanEs from "mockman-js";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/quizzes/:categoryName" element={<QuizListingPage />} />
      <Route path="/rules/:quizId" element={<RulesPage />} />
      <Route path="/mockapi" element={<MockmanEs />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
