import "./content.css";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import store from "@/store";
import {AppDispatch} from "@/store";
import { lazy } from "react";
import { useAppDispatch } from "@/store/hooks";

// import Login from "../../../pages/login/login";
// import UserMgr from "../../../pages/userMgr/userInfo/userInfo";

// const currentMenu = store.getState().currentMenu;

const menuList = store.getState().user.permissions;
function loadComponent(path: string) {
    const Module = lazy(() => import(`../../../pages/${path}`));
    return <Module />;

}
function Content() {
    return (
        <div className="content">
            <Routes>
                {
                    
                    menuList.map((menu: any) => {
                        console.log(menu.path);
                        console.log(menu.path);
                        return <Route path="{menu.path}" element={loadComponent(menu.element)} />
                    })
                }
            </Routes>
        </div>
    );
}

export default Content;