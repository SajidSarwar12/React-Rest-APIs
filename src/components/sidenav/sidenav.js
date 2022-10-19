import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './sidenav.css';
import {useLocation, useNavigate} from 'react-router-dom';

function SideNav() {
    const location=useLocation();
    const navigator= useNavigate();
    console.log(location);
    return (
        <React.Fragment>
            <Nav defaultActiveKey="/home" className="flex-column sideNavOuter">
                <div className="sideNavInner">
                    <div className="sideNavLogo"></div>
                    <div className="sideNavMenuitem">
                        <div className="sideNavMenuItemIcon"></div>
                        <div className="sideNavMenuItemName">
                            <Nav.Link onClick={()=>navigator("/")}><span className={location.pathname==="/"&&"text-white"}>DashBoard</span></Nav.Link>
                        </div>
                    </div>
                    <div className="sideNavMenuitem">
                        <div className="sideNavMenuItemIcon"></div>
                        <div className="sideNavMenuItemName">
                            <Nav.Link onClick={()=>navigator("/addadmin")}><span className={location.pathname==="/addadmin"&&"text-white"}>Administrator</span></Nav.Link>
                        </div>
                    </div>
                    <div className="sideNavMenuitem">
                        <div className="sideNavMenuItemIcon"></div>
                        <div className="sideNavMenuItemName">
                        <NavDropdown id="nav-dropdown-light-example" title="User" menuVariant="light">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            
                            </NavDropdown>
                        </div>
                    </div>
                    <div className="sideNavMenuitem">
                        <div className="sideNavMenuItemIcon"></div>
                        <div className="sideNavMenuItemName">
                            <Nav.Link eventKey="disabled"  href="/addadmin">
                            
                                Subscription
                            
                            </Nav.Link>
                        </div>
                    </div>
                    <div className="sideNavMenuitem">
                        <div className="sideNavMenuItemIcon"></div>
                        <div className="sideNavMenuItemName">
                            <Nav.Link eventKey="link-2">Announcements</Nav.Link>
                        </div>
                    </div>
                    <div className="sideNavMenuitem">
                        <div className="sideNavMenuItemIcon"></div>
                        <div className="sideNavMenuItemName">
                            <Nav.Link eventKey="link-2" onClick={()=>navigator("/login")}>Logout</Nav.Link>
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
            </Nav> 
        </React.Fragment>
    );
}

export default SideNav;
