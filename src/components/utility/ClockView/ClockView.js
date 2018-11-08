import React from "react";
import Clock from "react-live-clock";
import moment from "moment";
import "moment/locale/ko";
import "./ClockView.scss";

const ClockView = () => {
  return (
    <div className="ClockView">
      <h2>
        <Clock
          format={"ll dddd"}
          ticking={true}
          timezone={moment.tz.link("Asia/Seoul")}
        />
      </h2>
      <h2>
        <Clock
          format={"HH:mm:ss"}
          ticking={true}
          timezone={moment.tz.link("Asia/Seoul")}
        />
      </h2>
    </div>
  );
};

export default ClockView;
