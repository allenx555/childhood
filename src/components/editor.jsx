import React from "react";
import { TextareaItem } from "antd-mobile";
import "../assets/editor.scss";
import arrow from "../static/arrow.png";

export default class Editor extends React.Component {
  render() {
    return (
      <div style={{ "background-color": "#009688" }}>
        <div className="head">
          <a href="/diary">
            <img src={arrow} alt="arrow" id="arrow" />
          </a>
          <div className="text">
            <TextareaItem
              placeholder="请输入日期"
              data-seed="logId"
              ref={el => (this.autoFocusInst = el)}
              autoHeight
            />
          </div>
        </div>
        <div className="content">
          <TextareaItem placeholder="请输入文本" rows={17} count={100} />
        </div>
      </div>
    );
  }
}
