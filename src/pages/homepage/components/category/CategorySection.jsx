import { useEffect } from "react";
import { useFetch } from "../../../../hooks";
import { CategoryItem } from "./CategoryItem";
import "./CategorySection.css";
import spinner from "../../../../assets/spinner.svg";

export const CategorySection = () => {
  const { data, loading, error, serverCall: fetchCategories } = useFetch();

  useEffect(() => {
    fetchCategories({
      url: "/api/categories",
      method: "GET",
    });
  }, []);

  return (
    <div className="row-container">
      {loading && <img src={spinner} alt="loading" />}
      {data?.categories.map((category) => (
        <CategoryItem key={category._id} category={category} />
      ))}
    </div>
  );
};
