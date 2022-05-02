import { v4 as uuid } from "uuid";
import { category1, category2, category3 } from "../../assets/Images";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "TV Shows",
    categoryImage: category1,
    categoryDescription: "Quizzes based on TV shows",
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    categoryImage: category2,
    categoryDescription: "Quizzes based on sports",
  },
  {
    _id: uuid(),
    categoryName: "Technology",
    categoryImage: category3,
    categoryDescription: "Quizzes based on technology",
  },
];
