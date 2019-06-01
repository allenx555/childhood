import React from "react";

export default class diarylist extends React.Component {
  state = {
    year: "",
    diarys: [{ diarydate: "", diarytitle: "", diaryurl: "" }]
  };
  render() {
    return (
      <div>
        <div className="circle" />
        <div className="diarycontent" />
      </div>
    );
  }
}
