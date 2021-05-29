import React from 'react'
import { Link } from 'react-router-dom'

export const login = () => {
    return (
        <div>
            <h1>Login</h1>
            <Link to='/naruto'>naruto</Link>
            <br></br>
            <Link to='/'>home</Link>
        </div>
    )
}

