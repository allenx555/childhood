import React from "react";
import circle from "../static/circle.png";
import "../assets/diarylist.scss";

export default class Diarylist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="circle">
          <img src={circle} alt="circle" />
        </div>
        <div className="diarycontent">
          <h1>{this.props.arr.year}</h1>
          {this.props.arr.diarys.map(data => (
            <a href={data.diaryurl}>
              <pre>
                {data.diarydate}&nbsp;&nbsp;&nbsp;
                {data.diarytitle}
              </pre>
            </a>
          ))}
        </div>
      </div>
    );
  }
}
