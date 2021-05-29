import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <h1>hola Home</h1>
            <Link to='/login'>Login</Link>
            <br></br>
            <Link to='/naruto'>naruto</Link>
            <br></br>
            <Link to='/hinata'>hinata</Link>
        </div>
    )
}

