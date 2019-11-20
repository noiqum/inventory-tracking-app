import React from 'react'
import "./navbar.css";

export default function Navbar(props) {
    return (
        <div className="navbar">
            <div className="navbarContainer">
            <div onClick={props.onclick} className="item-a">HOME</div>
            <div onClick={props.onclick} className="item-b">REPORTS</div>
            <div onClick={props.onclick} className="item-c">ITEMS</div>
            <div onClick={props.onclick} className="item-d">{props.user}</div>
            <div onClick={props.onclick} className="item-e">{props.logst}</div>
            </div>
        </div>
    )
}
