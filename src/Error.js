import React from "react";
import "./Error.css";

const Error = (props) => {
  return (
    <div className="error">
      <i className={`icon huge close icon`} />
      <h1 className="errMessage">{props.errMess}</h1>
    </div>
  );
};
Error.propsDefault = {
  errMess: "We cannot access your location",
};

export default Error;
