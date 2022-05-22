import { Navigate } from "react-router-dom";

export const getFilteredQuizListing = (quizListing, category) => {
  if (quizListing) {
    if (category === "All") {
      return quizListing;
    }
    return quizListing.filter((quiz) => quiz.categoryName === category);
  } else {
    return [];
  }
};

export const playQuizHandler = (isAuthenticated) => {
  if (!isAuthenticated) {
    Navigate("/login");
  }
};
