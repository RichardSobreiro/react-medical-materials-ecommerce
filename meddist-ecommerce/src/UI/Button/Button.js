/** @format */

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type ? props.type : "button"}
      aria-label={props.ariaLabel ? props.ariaLabel : "No role description"}
      onClick={props.onClickHandler}
      disabled={props.disabled}
      className={`${classes.btn} ${props.success ? classes.success : ""}  
        ${props.info ? classes.info : ""} 
        ${props.warning ? classes.warning : ""}
        ${props.danger ? classes.danger : ""} 
        ${props.default ? classes.default : ""}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
