/** @format */

import React from "react";
import ReactDOM from "react-dom";
import CSSTransition from "react-transition-group/CSSTransition";

import Backdrop from "../Modal/Backdrop";
import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const portalElement = document.getElementById("overlays");

const modal = (props) => {
  if (props.show) {
    document.body.classList.add("body-modal-open");
  } else {
    document.body.classList.remove("body-modal-open");
  }
  return (
    <>
      {props.show
        ? ReactDOM.createPortal(
            <Backdrop onClick={props.closed} show={props.show} />,
            portalElement
          )
        : null}
      {ReactDOM.createPortal(
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={props.show}
          timeout={animationTiming}
          classNames={{
            enter: "",
            enterActive: "ModalOpen",
            exit: "",
            exitActive: "ModalClosed",
          }}
        >
          <div className="Modal">
            <header className="ModalHeader">
              <h2>{props.title}</h2>
              <button
                type="button"
                aria-label="Close modal dialog"
                onClick={props.closed}
              >
                &times;
              </button>
            </header>
            <hr />
            <div className="modal-body">{props.children}</div>
            <hr />
            {props.customFooter ? null : (
              <footer className="footer">
                <button
                  className="success"
                  type="button"
                  onClick={props.onConfirm}
                >
                  Okay
                </button>
              </footer>
            )}
          </div>
        </CSSTransition>,
        portalElement
      )}
    </>
  );
};

export default modal;
