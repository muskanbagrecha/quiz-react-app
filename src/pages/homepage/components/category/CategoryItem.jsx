import { useNavigate } from "react-router-dom";
import { Card } from "../../../../components/UI/card/Card";
export const CategoryItem = ({ category }) => {
  const {
    _id: categoryId,
    categoryImage,
    categoryName,
    categoryDescription,
  } = category;
  const navigate = useNavigate();
  return (
    <div className="card-category-wrapper">
      <div className="card__description">
        <p>{categoryDescription}</p>
        <button
          className="btn btn-black-no-br"
          onClick={() => {
            navigate("/rules/" + categoryId);
          }}
        >
          Explore
        </button>
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
