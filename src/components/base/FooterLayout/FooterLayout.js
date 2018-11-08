import React from "react";
import "./FooterLayout.scss";

const FooterLayout = ({ footer }) => {
  return (
    <div className="FooterLayout">
      <div className="footerLayout-container">{footer}</div>
    </div>
  );
};

export default FooterLayout;
