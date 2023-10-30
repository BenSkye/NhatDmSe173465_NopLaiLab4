
// _______________________________DŨNG___________________________________________
import React, { useContext } from "react";
// import useRefMenu from "../Hooks/useRefMenu";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { Navbar, NavItem, Icon, Switch } from "react-materialize";
export default function NavigationFC() {
  const { theme, toggle } = useContext(ThemeContext);
  // const responseMenu = useRefMenu();
  return (
    // _______________________________________________________________________________________________________________________
    <div className="navigation-header"  style={{backgroundColor: theme.backgroundColor, borderBottomColor: theme.borderBottomColor, color: theme.color}}>
    <Navbar className="navigation-nav"  style={{backgroundColor: theme.backgroundColor, borderBottomColor: theme.borderBottomColor}}
    alignLinks="right"
    brand={<Link style={{color: theme.color, textAlign: "start", fontWeight: "bold"}} className="brand-logo"></Link>}
    id = "mobile-nav"
    menuIcon = {<Icon style={{backgroundColor: theme.backgroundColor, color: theme.color}}><i class="fa-solid fa-bars"></i></Icon>}
    options = {{
      draggable: true, 
      edge: "left", 
      inDuration: 250, 
      onCloseEnd: null, 
      onOpenStart: null, 
      outDuration: 200, 
      preventScrolling: true
    }}
    >
      <div className="navigation-item" style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
      <NavItem>
      <Link to={"/"} style= {{color: theme.color}}>
        Trang chủ
      </Link>
      </NavItem>
      <NavItem>
      <Link to={"/news"} style= {{color: theme.color}}>
        Tin tức
      </Link>
      </NavItem>
      <NavItem>
        <Link to={"/category"} style= {{color: theme.color}}>
          Thể loại
          </Link>
      </NavItem>
      <NavItem>
        <Link to={"/about"} style= {{color: theme.color}}>
          Về chúng tôi
          </Link>
      </NavItem>
      <NavItem>
        <Link to={"/contact"} style= {{color: theme.color}}>
          Liên hệ
          </Link>
      </NavItem>
      <NavItem>
        <Switch className="switch-mode" href="#switchmode" onClick={toggle} style={{backgroundColor: theme.backgroundColor, color: theme.color}}
        >
        </Switch>
      </NavItem>
      </div>
    </Navbar>
    </div>
    );
    // __________________________________________________________________________________________________________________________________
  }
  
  


