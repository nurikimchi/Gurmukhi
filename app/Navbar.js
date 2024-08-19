import React from 'react'; 
import { MdSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
    return (
        <nav className="nav">
            <ul className="left-nav">
                <li>
                    <a href="/profile" className="nav-item">
                        <CgProfile className="profile-icon" />
                    </a>
                </li>
            </ul>
            <a href="/" className="site-title">Gurmukhi</a>
            <ul>
                <li>
                    <a href="/settings" className="nav-item">
                        <MdSettings className="icon-settings" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}
