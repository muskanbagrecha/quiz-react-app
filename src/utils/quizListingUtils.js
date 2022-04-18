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
