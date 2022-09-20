import logo from '../images/unlock-icon-18.png';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Link} from 'react-router-dom';
import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link to="" className="navbar-brand"> <img src={logo} alt=""  /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home"  className="nav-link active" >Home</Link>
                            {/* <a className="nav-link active" aria-current="page">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" data-bs-toggle="modal" data-bs-target="#RegModal" role="button" >Registration</span>
                        </li><li className="nav-item">
                            <Link to="/user"  className="nav-link" >Data</Link>
                            {/* <a href="/user" data-rr-ui-event-key="/user" className="nav-link" >Data</a> */}
                            
                        </li>
                        <li className="nav-item">
                         <Link to="/dev"  className="nav-link" role="button" > Price</Link>
                            </li>
                            
                        </ul>

                <button className="d-flex btn btn-warning mr-3">Logout</button>
                {/* <!-- <a href="#" className="d-flex"><i className="fa fa-power-off" aria-hidden="true"> LogOut</i></a> --> */}


            </div>
        </div>
  </nav >
    )
}

export default Header;