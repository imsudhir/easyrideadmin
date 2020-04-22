import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu, 
    DropdownItem
  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper,faBell,faSpinner,faUpload, faCreditCard, faCircleNotch, faBiking, faPeopleArrows, faRupeeSign } from '@fortawesome/free-solid-svg-icons'

export default class Menu extends Component {
    render() {
        return (
          <div>
  <aside className="main-sidebar" style={{height:'100%'}}>
    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">
      {/* Sidebar user panel */}
      <div className="user-panel">
        <div className="pull-left image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
        </div>
        <div className="pull-left info">
          <p>Admin</p>
          <a href="fake_url"><i className="fa fa-circle text-success" /> Online</a>
        </div>
      </div>
      <Router>
      <hr />
       <Nav className="sidebar-menu" data-widget="tree">
 
        <NavItem>
          <NavLink tag={Link} to="/drivers">
             <FontAwesomeIcon icon={faBiking} /> <span> Drivers</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/riders">
             <FontAwesomeIcon icon={faPeopleArrows} /> <span> Riders</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/fare">
             <FontAwesomeIcon icon={faRupeeSign} /> <span> Fare</span>
          </NavLink>
        </NavItem>
       </Nav>
  </Router>

    </section>
    {/* sidebar  */}
  </aside>
</div>

        )
    }
}
