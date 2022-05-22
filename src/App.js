import { AppRouter } from "./router/AppRouter";
import { Footer, Navigation, Toast } from "./components/";

function App() {
  return (
    <div className="main-container">
      <Navigation />
      <Toast />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
