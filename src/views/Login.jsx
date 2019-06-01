import React from "react";
import { Button, InputItem,WhiteSpace} from "antd-mobile";
import { createForm } from "rc-form";
import "../assets/login.scss";

class Home extends React.Component {
  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  handleClick = () => {
    this.inputRef.focus();
  };
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div id="content">
          <div><h1 id="login">登录</h1></div>
          <div id="input">
            <InputItem
              {...getFieldProps("autofocus")}
              clear
              placeholder="请输入手机号/邮箱"
              ref={el => (this.autoFocusInst = el)}
            />
            <WhiteSpace size="md" />
            <InputItem
              {...getFieldProps("focus")}
              clear
              placeholder="请输入密码"
              ref={el => (this.inputRef = el)}
            />
          </div>  
          <div id="button">
            <Button type="primary" id="click">登录</Button>
          </div>
      </div>
    );
  }
}

const HomePage = createForm()(Home);
export default HomePage;
