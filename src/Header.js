import React, { Component } from 'react'
import { Redirect, hashHistory} from 'react-router';
import {
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper,faBell,faSpinner,faUpload, faCreditCard, faCircleNotch, faBiking, faPeopleArrows, faRupeeSign } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component {
  Logout = () =>{
    localStorage.clear();
    return window.location.reload(false)
  }
  

  render() {
        return (
           <div>
             {localStorage.length==0 ?
    <Redirect push to="/admin" />:<Redirect push to="/drivers" />
    
             }
  <header className="main-header">
    {/* Logo */}
    <a href="/" className="logo">
      {/* mini logo for sidebar mini 50x50 pixels */}
      <span className="logo-mini"><b>A</b>LT</span>
      {/* logo for regular state and mobile devices */}
      <span className="logo-lg"><b>Easy</b>Ride</span>
    </a>
    {/* Header Navbar: style can be found in header.less */}
    <nav className="navbar navbar-static-top">
      {/* Sidebar toggle button*/}
      <a href="fake_url" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      {/* Navbar Right Menu */}
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
        
          <li className="dropdown user user-menu">
            <a href="fake_url" className="dropdown-toggle" data-toggle="dropdown">
              <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User" />
              <span className="hidden-xs">Admin</span>
            </a>
            <ul className="dropdown-menu">
              {/* User image */}
              <li className="user-header">
                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                <p>
                  Admin
                  <small>Admin</small>
                </p>
              </li>
              {/* Menu Body */}
              
              {/* Menu Footer*/}
              <li className="user-footer">
               
                <div style={{textAlign:"center"}}>
                <NavItem>
                <NavLink tag={Link} to="/riders">
                   <span> Sign out</span>
                </NavLink>
              </NavItem>
              <Button  color="primary" key="002" to="/admin" onClick={this.Logout} style={{color:"balck", display:"block"}} tag={Link} className="mr-auto">
              Logout 
            
             </Button>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <a href="fake_url" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</div>
        )
    }
}