import React from "react";
import "./SideBar.css"


function SideBarTest(props) {
        return (
            <div>
                <div className="wrapperSideBar">
               
                    <nav id="sidebar">
                        <div className="sidebar-header">
                        <div className="sidenav">
                            <h1>{props.firstName} {props.lastName}</h1>
                            <hr></hr>
                            <p> P: {props.phoneNumber} <br/>
                            Birthdate: {props.birthdate} <br/>
                            Race: {props.race}</p>
                        
                            </div>
                        </div>

                        <ul className="list-unstyled components">
                            <li className="active">
                                <a
                                    href="#homeSubmenu"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    className="dropdown-toggle">HISTORY</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">
                                <br></br>
                                  {props.hSuicidal}

                                    <br/>
                                    <br/>
                                </ul>
                            </li>
                            <li className="active">
                                <a
                                    href="#pageSubmenu"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    className="dropdown-toggle">CONTACTS</a>
                                <ul className="collapse list-unstyled" id="pageSubmenu">
                                <br></br>
                                    Dr. Baula VakinStrap <br/>
                                    142 E. Havoc Street <br/>
                                    PortLand Org <br/>
                                    970-3092786 <br/>
                                    Doctor <br/>

                                    <br/>

                                    Dr. Baula VakinStrap <br/>
                                    142 E. Havoc Street <br/>
                                    PortLand Org <br/>
                                    970-3092786 <br/>
                                    Doctor <br/>
                                    <br/>
                                    

                                </ul>
                            </li>
                        </ul>

                    </nav>
                </div>
            </div>
        )
    

}

export default SideBarTest;