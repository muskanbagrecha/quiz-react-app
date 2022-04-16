import { Route, Routes } from "react-router-dom";
import { Homepage, PageNotFound } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
