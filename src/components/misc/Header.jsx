import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <h1>World class Security Consultancy services</h1>
                    <h2>Build trust in your defences with affordable real-world penetration testing services</h2>
                    <Link to="/">Get in Touch !</Link>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;