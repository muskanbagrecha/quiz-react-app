import { Route, Routes } from "react-router-dom";
import { Homepage, RulesPage, PageNotFound } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/rules/:id" element={<RulesPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
