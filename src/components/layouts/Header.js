import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
    const { branding } = props;
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <a className="navbar-brand" href="/">{branding}</a>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact/add">Add Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

export default Header;