import { ThemeProvider } from "../context/";
import { ToastProvider } from "../context/";
import { AuthProvider } from "../context/";
import { QuizProvider } from "../context/";

export const AppProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <QuizProvider>{children}</QuizProvider>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};
