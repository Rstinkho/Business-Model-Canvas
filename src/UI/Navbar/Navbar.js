import React from 'react';
import './Navbar.css';

const navbar = ( props ) => (
    <div id="verticalHeader" className="row row-md-12 fixed-top">
        <div id="logo" className="col-md-5" /> 

        <div className="col-md-4">
            <div className="row">
                <h3><font color="grey">Model you are working on: {props.info}</font></h3>
            </div>
        </div>

        <div  className="col-md-3">
            <ul>
                <li>LOGIN</li>
                <li>TUTORIALs</li>
            </ul>
        </div>

    </div>
)

export default navbar;