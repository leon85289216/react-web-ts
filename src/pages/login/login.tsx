//在函数组件中使用，如（表单登录）
import "./login.scss"
import { useAppDispatch } from "@/store/hooks";
import { loginAsync } from "@/store/redux/userSlice";
import { Button, Input } from "antd";
import { renderIndex } from "@/index";

export default function Login() {
  const dispatch = useAppDispatch();
  let userObj = {
    userName: "",
    userCode: ""
  }
  //用户登录
  const doLogin = async () => {
    const result = await dispatch(loginAsync(userObj));
    //这里是可以拿到回调的
    if (result.payload) {
      //跳转页面
      renderIndex();
    }
  };
  const doReset = () => {

  }

  return (
    <div className="login-bg">
      <div className="login-bg2"></div>
      <div className="login-bg3"></div>
      <div className="sys-name"><strong style={{ float: "left" }}>HIM运管平台</strong>
        <div style={{ paddingLeft: "50px" }}>————————HIM-为您带来品质生活</div></div>
      <div className="login-container">
        <div className="row"><label>用户名：</label><Input placeholder="请输入用户名" onChange={e => {
          userObj.userName = e.target.value
        }} name="userName" /></div>
        <div className="row"> <label>密码：</label><Input placeholder="请输入密码" type="password" onChange={e => {
          userObj.userCode = e.target.value
        }} name="pwd" /></div>
        <div className="row" style={{ textAlign: "center" }}><Button onClick={doLogin}>登录</Button><Button style={{ marginLeft: 20 }} onClick={doReset}>重置</Button></div></div>
    </div>);
}
