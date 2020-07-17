import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <Link to="/"><span className="navbar-brand mb-0 h1">All Students</span></Link>
                <Link to="/search"><span className="navbar-brand mb-0 h1">Search</span></Link>
            </nav>
        </div>
    )
}
