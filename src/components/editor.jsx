import React from "react";
import "../assets/editor.scss";
import arrow from "../static/arrow.png";

export default class Editor extends React.Component {
  state = {
    year: "请输入年份",
    date: "请输入日期",
    title: "请输入标题",
    content1: "",
    picurl: "",
    content2: "",
    content3: ""
  };
  render() {
    return (
      <div style={{ "background-color": "#009688" }}>
        <div className="head">
          <a href="/diary">
            <img src={arrow} alt="arrow" id="arrow" />
          </a>
          <div className="text">
            <h2>{this.state.year}</h2>&nbsp;&nbsp;
            <h3>{this.state.date}</h3>
            <h1>{this.state.title}</h1>
          </div>
        </div>
        <div className="content">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.content1}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.content2}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.content3}</p>
        </div>
      </div>
    );
  }
}
