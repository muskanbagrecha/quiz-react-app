import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
