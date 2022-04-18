import { useNavigate } from "react-router-dom";
import { Card } from "../../../../components/UI/card/Card";
export const CategoryItem = ({ category }) => {
  const {
    categoryImage,
    categoryName,
    categoryDescription,
  } = category;
  const navigate = useNavigate();

  return (
    <div className="card-category-wrapper">
      <div
        className="card__description"
        onClick={() => {
          navigate("/quizzes/" + categoryName);
        }}
      >
        <p>{categoryDescription}</p>
        <button className="btn btn-black-no-br">Explore</button>
      </div>
      <Card className="card-vertical card-category">
        <div className="card__img">
          <img
            src={categoryImage}
            alt={categoryName}
            className="img-responsive"
          />
        </div>
      </Card>
    </div>
  );
};
