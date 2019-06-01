import React from "react";
import more from "../static/more.png";
import plus from "../static/plus.png";
import "../assets/diary.scss";
import Diarylist from "../components/diarylist";
import json from "../static/test.json";

export default class Diary extends React.Component {
  state = {
    arr: json
  };
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
        <div id="right">
          {this.state.arr.map(data => (
            <Diarylist arr={data} />
          ))}
        </div>
        <div><img
            src={plus}
            alt="plus"
            style={{  "margin-top": 580,float: "right" }}
          /></div>
      </div>
    );
  }
}
