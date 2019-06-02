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
          <a href="/poster">
            <img
              src={more}
              alt="more"
              style={{ "margin-top": 55, width: 96, float: "left" }}
            />
          </a>
        </div>
        <div id="right">
          {this.state.arr.map(data => (
            <Diarylist arr={data} />
          ))}
        </div>
        <div>
          <a href="/editor">
            <img
              src={plus}
              alt="plus"
              style={{ "margin-top": 580, float: "right" }}
            />
          </a>
        </div>
      </div>
    );
  }
}
