import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
