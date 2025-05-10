import React from "react";

const Header = ()=>{
    return <header className="header">
        <div className="logo">
            <img src="logo192.png" alt="logo" />
        </div>
        <div className="menus">
            <ul>
                <li className="menu_item"><a href="#home">Accueil</a></li>
                <li className="menu_item"><a href="#about">A propos</a></li>
                <li className="menu_item"><a href="#services">Nos solutions</a></li>
                <li className="menu_item"><a href="#contacts">Contact</a></li>
            </ul>
        </div>
    </header>
}

export default Header
