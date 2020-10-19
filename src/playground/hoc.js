import React from "react";
import ReactDom from "react-dom";

const Info = () => (
  <div>
    <h1>Info</h1>
    <p>The info is :{props.info}</p>
  </div>
);

const requireAuthentication = (wrapperComponent) => {
  return (props) => {
    {
      props.isAuthenticated ? (
        <wrapperComponent {...props} />
      ) : (
        <p>please login to view the info</p>
      );
    }
  };
};

const AuthInfo = requireAuthentication(Info);

ReactDom.render(
  <AuthInfo isAuthenticated={false} info="This are the details" />,
  document.getElementById("app")
);
