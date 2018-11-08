import React from "react";
import Helmet from "react-helmet";
import "../../../assets/scss/init.scss";
import "./PageLayout.scss";

const PageLayout = ({ children }) => {
  return (
    <div className="PageLayout">
      <main role="main">{children}</main>
    </div>
  );
};

export default PageLayout;
