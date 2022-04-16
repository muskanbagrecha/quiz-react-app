import { Hero } from "./components";
import { CategorySection } from "./components";

export const Homepage = () => {
  return (
    <div className="sub-container">
      <Hero />
      <h1 className="styled-title">Featured Categories</h1>
      <CategorySection />
    </div>
  );
};
