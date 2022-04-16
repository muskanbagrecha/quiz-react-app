import Mockman from "mockman-js";
import { AppRouter } from "./router/AppRouter";
import { Footer, Navigation } from "./components/";

function App() {
  return (
    <div className="main-container">
      <Navigation />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
