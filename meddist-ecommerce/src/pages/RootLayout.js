/** @format */
import { Outlet } from "react-router-dom";
import Header from "../UI/Header/Header";
import classes from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <>
      <Header></Header>
      <main className={classes["main-container"]}>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default RootLayout;
