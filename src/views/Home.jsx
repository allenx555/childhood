import React from "react";
import "../assets/home.scss";
import { Button } from "antd-mobile";


export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Button type="primary" style={{float:"left","margin-right":"30px","width":"120px"}}>回忆</Button>
        <Button type="primary" style={{float:"right","width":"120px"}}>记录</Button>
      </div>
    );
  }
}
