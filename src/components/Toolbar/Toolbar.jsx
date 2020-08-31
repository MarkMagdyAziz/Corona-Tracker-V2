import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import {Link} from 'react-router-dom'
const toolbar = props => (
    <header className="toolbar">
      <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
          <div className="toolbar__logo">
          <h2>Corona-<span>Tracker</span></h2>
          </div>
          <div className="spacer" />
          <div className="toolbar_navigation-items">
              <ul>
                  {/* <li><a href="/">Home</a></li>
                  <li><a href="/Contact.jsx">Contact Us</a></li>
                  <li><a href="/Prevention">Prevention Tips</a></li> */}
                  <li><Link to={"/"} activeClassName="active">Home</Link></li>
                  <li><Link to={"/Prevention"} activeStyle={{color:"red"}}>Prevention Tips</Link></li>
                  <li><Link to={"/Contact"}>Contact Us</Link></li>

                  
              </ul>
          </div>
      </nav>
    </header>
  );
  
  export default toolbar;