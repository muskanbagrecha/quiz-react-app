import { Card } from "../../../../components/UI/card/Card";
export const CategoryItem = ({ category }) => {
  console.log(category);
  const { categoryImage, categoryName, categoryDescription } = category;

  return (
    <div className="card-category-wrapper">
      <div className="card__description">
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
