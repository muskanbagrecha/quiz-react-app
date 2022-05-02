import { ThemeProvider } from "../context/";

export const AppProvider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
