import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userRedux';
import { Link,useHistory } from "react-router-dom";


export default function Topbar() {
  const user = useSelector((state) => state.user.currentUser);

  const history = useHistory();
  // const user = JSON.parse(localStorage.getItem('user'));

 
  const dispatch = useDispatch();
  const handleSignOut = () => {
    localStorage.removeItem('user');
    dispatch(logout());
    user ? console.log("hey"): console.log("no user");
    history.push('/');
  };
  
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">CharAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          {user ? <div className="topAvatar" onClick={handleSignOut}>SIGN OUT</div> : <Link to="/login" style={{ textDecoration: 'none',color:"black" }}>
            <div>SIGN IN</div>
          </Link>}
          {/* <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" /> */}
        </div>
      </div>
    </div>
  );
}
