import "./header.css";


function Header() {
  return (
    <div className="header">
      <div className="search-box">
       <input placeholder="输入菜单进行搜索"  id="txt-search"/>
      </div>
    </div>
  );
}

export default Header;