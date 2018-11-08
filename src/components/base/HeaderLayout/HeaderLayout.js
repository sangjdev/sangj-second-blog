import React from "react";
import "./HeaderLayout.scss";

const HeaderLayout = ({ header, nav }) => {
  return (
    <div className="HeaderLayout">
      <div className="headerLayout-container">
        {header}
        {nav}
      </div>
    </div>
  );
};

export default HeaderLayout;
