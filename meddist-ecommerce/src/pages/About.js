/** @format */

import redux from "../images/redux.png";
import reactRouterDom from "../images/react-router.png";
import reactMemoization from "../images/react-memoization.png";
import jest from "../images/react-jest.png";
import hooks from "../images/react-hooks.jpeg";
import azureDevOps from "../images/azure-devops.png";

import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.container}>
      <section className={classes["card"]}>
        <h1 className={classes["title"]}>
          Medical Distributor Website with React 18
        </h1>
        <p className={classes["app-description"]}>
          This is a simple application constructed using React and Javascript.
          The application uses React 18 and many of it's most exciting features.
          At the moment there is no authentication feture enabled, and the user
          can add products to the shopping cart, click over the cart icon on the
          top right corner of the Home page, and create an Order on the Orders
          page. The application was deployed using Azure Storage Account with
          Static Website Hosting enabled. There is also a mock server running in
          another domain using also Static Website Hosting with an Azure Storage
          Account.
        </p>
      </section>
      <h1 className={classes["title"]}>React and Other Technologies Used</h1>
      <section className={classes["features-list"]}>
        <article className={classes["features-container"]}>
          <img src={redux} alt="Redux" />
          <div>
            <h3>Redux</h3>
            <p>
              The shopping cart was completely constructed using Redux Toolkit
              alongside Redux Persist to guarantee that the state of the cart is
              consistent even when the user closes the page and returns later.
            </p>
          </div>
        </article>
        <article className={classes["features-container"]}>
          <img src={reactRouterDom} alt="React Router Dom" />
          <div>
            <h3>React Router Dom</h3>
            <p>
              To keep the navigation within the client application and avoid
              unnecessary server requests React Router Dom was extensively used,
              including the loader feature.
            </p>
          </div>
        </article>
        <article className={classes["features-container"]}>
          <img src={reactMemoization} alt="React Memoization" />
          <div>
            <h3>React Memoization</h3>
            <p>
              The way that React works can lead to many unnecessary re-rendering
              of components due to the execution of child components or DOM
              changes within them. To create an application that efficiently
              uses available resources React.memo and useCallback were also
              applied..
            </p>
          </div>
        </article>
        <article className={classes["features-container"]}>
          <img src={jest} alt="Unit Tests with React and Jest" />
          <div>
            <h3>Unit Tests with Jest</h3>
            <p>
              Unit testing the components is a key factor for any well-designed
              application, even frontend ones. To fulfill that requirement Jest
              was extensively applied in the unit test section.
            </p>
          </div>
        </article>
        <article className={classes["features-container"]}>
          <img src={hooks} alt="React Hooks" />
          <div>
            <h3>Hooks</h3>
            <p>
              Sharing logic within any application is an important aspect to
              avoid reinventing the wheel all the time. React Custom Hooks gives
              us the ability to share logic among components using the builtin
              Hooks that the framework provides (when needed).
            </p>
          </div>
        </article>
        <article className={classes["features-container"]}>
          <img src={azureDevOps} alt="CICD with Azure DevOps" />
          <div>
            <h3>CICD and Hosting</h3>
            <p>
              React compiles to pure HTML, CSS, and Javascript code, so hosting
              a website built using React is as simple as hosting any static
              website application. Then, Azure Storage Account with Static Web
              Site Hosting, alongside Azure CDN, is the main technology used for
              the Hosting of the application. The build and release pipelines
              are using the Azure DevOps platform.
            </p>
          </div>
        </article>
      </section>
      <section className={classes["card"]}>
        <h1 className={classes["title"]}>Send a message</h1>
        <div className={classes["contacts-container"]}>
          <div className={classes["contacts-line"]}>
            <span className={classes["contact-type"]}>Email:&nbsp;</span>
            <span>richard@sobreiro.dev</span>
          </div>
          <div className={classes["contacts-line"]}>
            <span className={classes["contact-type"]}>
              Personal&nbsp;Profile:&nbsp;
            </span>
            <span>
              <a href="https://richard.sobreiro.dev" target="_blank">
                richard.sobreiro.dev
              </a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
