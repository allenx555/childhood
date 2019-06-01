import React from "react";
import more from "../static/more.png";
import plus from "../static/plus.png";
import "../assets/diary.scss";

export default class Diary extends React.Component {
  render() {
    return (
      <div id="content">
        <div id="left">
          <img
            src={more}
            alt="more"
            style={{ "margin-top": 55, width: 96, float: "left" }}
          />
        </div>
        <div id="right" />
      </div>
    );
  }
}
