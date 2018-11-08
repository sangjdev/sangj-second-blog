import React, { Fragment } from "react";
import ClockView from "../../components/utility/ClockView";
import TagTitle from "../../components/utility/TagTitle";
import Tag from "../../components/utility/Tag";

const UtilityContainer = () => {
  return (
    <Fragment>
      <ClockView />
      <TagTitle />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
    </Fragment>
  );
};

export default UtilityContainer;
