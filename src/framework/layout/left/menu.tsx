import { Menu } from 'antd';
import './menu.css'
import store from "@/store";
import { useAppDispatch } from "@/store/hooks";
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;

interface IMenu {
  title: string;
  items: Array<IMenu>;
  path: string;
  icon?: string;
}

const MenuComps: React.FC = () => {

  const dispatch = useAppDispatch()
  const handleClick = (e: any) => {
    console.log('click ', e);
  }

  // 渲染不含children的目录
  const renderNoChildMenu = (item: IMenu) => {
    return <Menu.Item key={item.path}>
      <Link to={item.path}>
        {item.title}</Link></Menu.Item>
  }
  // 渲染含有children的目录
  const renderChildMenu = (item: IMenu) => {
    return <SubMenu key={item.path} title={item.title}>
      {
        item.items.map((child) => {
          return renderMenu(child)
        })
      }
    </SubMenu>
  }
  // 渲染菜单
  const renderMenu = (item: IMenu) => {
    return item.items.length ? renderChildMenu(item) : renderNoChildMenu(item)
  }

  return (
    <div className="menu">
      <div className="menu-header">
        <span>HIM管理平台{store.getState().user.username}</span></div>
      <Menu
        onClick={handleClick}
        style={{ width: '100%', marginTop: '2px' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={[]}
        mode="inline">
        {
          store.getState().user.permissions.map((item: any) => renderMenu(item))
        }
      </Menu>
    </div>
  )
}

export default MenuComps