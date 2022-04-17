import { v4 as uuid } from "uuid";
import { category1, category3 } from "../../assets/Images";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "TV Shows",
    categoryImage: category1,
    categoryDescription: "Quizes based on TV shows",
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    categoryImage:
      "https://cdn.dribbble.com/users/2417352/screenshots/14850541/media/4ae104247e3936000a70007ce7638baa.png?compress=1&resize=400x300&vertical=top",
    categoryDescription: "Quizes based on sports",
  },
  {
    _id: uuid(),
    categoryName: "Technology",
    categoryImage: category3,
    categoryDescription: "Quizes based on technology",
  },
];
