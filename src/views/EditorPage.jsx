import React from "react";
import "../assets/editor.scss";
import pic from "../static/diary.jpg";
import arrow from "../static/arrow.png";

export default class Editor extends React.Component {
  state = {
    year: "2018年",
    date: "十月一日",
    title: "国际黄金周",
    content1:
      "站在长城上远望，远处的长城就像一条巨龙，蜿蜒迂回在崇山峻岭之间。站在城墙上向下看，满眼都是郁郁葱葱的树木。",
    picurl: pic,
    content2:
      "那茂密的枝叶一簇堆在另一簇上面，不留一点缝隙；那翠绿的颜色，明亮的照耀着我们的眼睛，好像一条巨大的绿毯披在了群山之上。城墙顶上，每隔三百多米就有一座方形的城台，在城台与城台之间涌动着无数的穿着五彩衣服的游客，形成一条长长的彩带，仿佛在迎风飘动。",
    content3:
      "我们踏着脚下的方砖，扶着墙上的条石向上攀登，不禁想到了古代的修筑长城的劳动人民，是他们用血汗和智慧凝结成前不见头后不见尾的万里长城。爬到长城的烽火台，放眼望去，所有的叠山险峻尽收眼底，我不禁心肠澎湃，“好汉”的感觉油然而生。我终于体会到了“不到长城非好汉”的含意。"
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
          <div style={{ "text-align": "center" }}>
            <img src={this.state.picurl} alt="pic" />
          </div>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.content2}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.content3}</p>
        </div>
      </div>
    );
  }
}
