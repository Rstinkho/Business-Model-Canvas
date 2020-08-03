import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const sidebar = ( props ) => {

    function toggleSidebar() {
        const element = document.getElementById('sidebar');
        element.classList.toggle('active')
    }

    return (
        <div className="sidebar" id="sidebar">
        <div className="toggle" onClick={toggleSidebar} />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li onClick={props.choose}><Link to="/components/bmc">BMC</Link></li>
                <li onClick={props.choose}><Link to="/components/vrin">VRIN</Link></li>
                <li onClick={props.choose}><Link to="/components/swot">SWOT</Link></li>
                <li onClick={props.choose}><Link to="/components/swotE">SWOT(e)</Link></li>
            </ul>
    </div>
    )
}

export default sidebar;