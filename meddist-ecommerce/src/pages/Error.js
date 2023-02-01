/** @format */
import { useRouteError } from "react-router-dom";
import Header from "../UI/Header/Header";
import classes from "./Error.module.css";

const ErrorPage = ({ children }) => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <Header></Header>
      <div className={classes["error-page-container"]}>
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </>
  );
};

export default ErrorPage;
