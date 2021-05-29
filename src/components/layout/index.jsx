import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
 const Layout = props => {
    return (
        <div>
            <header >
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                            <Link to='/hinata'>Hinata</Link>
                            <Link to='/naruto'>ñe</Link>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
                {props.children}
            <footer className='panocha'>Footer</footer>
        </div>
    )
}
export default Layout 