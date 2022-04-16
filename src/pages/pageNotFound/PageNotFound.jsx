import { pageNotFound } from "../../assets/Images";
import "./PageNotFound.css";
export const PageNotFound = () => {
  return (
    <div className="sub-container">
      <div className="notfound-container">
        <img
          src={pageNotFound}
          alt="Page not found!"
          className="img-responsive"
        />
      </div>
    </div>
  );
};
