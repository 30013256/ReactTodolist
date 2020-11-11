//Generated with rcf
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home </Link>|  
            <Link style={linkStyle} to="/about"> About</Link>
        </header>
    )
}

const linkStyle = {
    color: 'White',
    textDecoration: 'none',
}

const headerStyle = {
    background: '#3d3d3d',
    color: 'White',
    textAlign: 'center',
    padding: '15px',
}
