//在函数组件中使用，如（表单登录）
import "./login.css"
import { useAppDispatch } from "@/store/hooks";
import { loginAsync } from "@/store/redux/userSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  let userObj={
    userName:"",
    userCode:""
  }
  //用户登录
  const doLogin = async () => {
    const result = await dispatch(loginAsync(userObj));
    //这里是可以拿到回调的
    if (result.payload) {
      //跳转页面
      navigate("/index");
    }
  };

  return (
    <div className="login-container">
      <p>用户名：<input type="text" value={userObj.userName} name="userName"></input>密码：<input type="password"value={userObj.userCode} name="pwd"></input></p>
      <p><Button onClick={doLogin}></Button></p></div>);
}
