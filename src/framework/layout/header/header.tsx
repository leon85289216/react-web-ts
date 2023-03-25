import "./header.css";
import store from "@/store"


function LogOut(e){
  store.dispatch({ type: "user/logout" })
}

function Header() {
  return (
    <div className="header">
      <div className="search-box">
        <input placeholder="输入菜单进行搜索" id="txt-search" />
        <button onClick={LogOut}>登出</button>
      </div>
    </div >
  );
}
export default Header;